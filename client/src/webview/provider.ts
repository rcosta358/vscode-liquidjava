import * as vscode from 'vscode';
import { getHtml } from './ui';

export class LiquidJavaWebviewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "liquidJavaView";
  private view?: vscode.WebviewView;
  private messageEmitter = new vscode.EventEmitter<any>();
  public readonly onDidReceiveMessage = this.messageEmitter.event;

  constructor(private readonly extensionUri: vscode.Uri) {}

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    token: vscode.CancellationToken
  ) {
    this.view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    };
    webviewView.webview.html = this.getHtml(webviewView.webview);

    // listen for messages coming from webview
    webviewView.webview.onDidReceiveMessage(message => {
      // emit the message to any external listeners
      this.messageEmitter.fire(message);
      
      // handle message
      if (message.type === "openFile") {
        // open file at the specificied location
        const uri = vscode.Uri.file(message.filePath);
        vscode.workspace.openTextDocument(uri).then(doc => {
          vscode.window.showTextDocument(doc).then(editor => {
            const line = message.line;
            const character = message.character;
            const position = new vscode.Position(line, character);
            const range = new vscode.Range(position, position);
            editor.selection = new vscode.Selection(position, position);
            editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
          });
        });
      }
    });
  }

  public sendMessage(message: any) {
    this.view?.webview.postMessage(message);
  }

  private getHtml(webview: vscode.Webview): string {
    return getHtml(webview.cspSource);
  }
}
