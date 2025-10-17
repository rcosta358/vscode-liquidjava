export function getStyles(): string {
    return /*css*/`
        body {
            padding: 1rem;
            font-family: var(--vscode-font-family);
        }
        h2 {
            font-weight: bold;
            margin: 0 0 1rem 0;
        }
        strong {
            display: block;
            margin-bottom: 0.5rem;
        }
        .container {
            margin: 0;
            padding: 0.5rem;
            background-color: var(--vscode-editor-background);
            border-radius: 4px;
            overflow-x: auto;
            font-family: var(--vscode-editor-font-family);
            font-size: var(--vscode-editor-font-size);
            max-width: 100%;
            line-height: 1.6;
            overflow: visible;
            position: relative;
        }
        .content {
            background-color: var(--vscode-textBlockQuote-background);
            padding: 1rem;
            border-left: 4px solid var(--vscode-errorForeground);
            margin-bottom: 1rem;
            border-radius: 4px;
        }
        .content h3 {
            margin-top: 0;
        }
        .section {
            margin-bottom: 1rem;
        }
        .section:last-child {
            margin-bottom: 0;
        }
        .link {
            color: var(--vscode-textLink-foreground);
            text-decoration: none;
            cursor: pointer;
            word-break: break-word;
            display: inline-block;
            max-width: 100%;
        }
        .link:hover {
            text-decoration: underline;
        }
        .node-var {
            color: #9CDCFE;
            position: relative;
        }
        .node-value {
            color: #CE9178;
        }
        .node-number {
            color: #B5CEA8;
        }
        .node-expand-indicator {
            opacity: 0.5;
            font-style: italic;
        }
        .clickable {
            cursor: pointer;
        }
        .clickable:hover {
            text-decoration: underline;
            text-decoration-style: dotted;
        }
        .reset-btn {
            margin: 0.5rem 0;
            padding: 0.4rem 0.8rem;
            background-color: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
        }
        .reset-btn:hover {
            background-color: var(--vscode-button-hoverBackground);
        }
        .reset-btn:disabled {
            opacity: 0.5;
        }
        .tooltip:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.5rem;
            background-color: var(--vscode-editorHoverWidget-background);
            border: 1px solid var(--vscode-editorHoverWidget-border);
            color: var(--vscode-editorHoverWidget-foreground);
            border-radius: 4px;
            white-space: nowrap;
            z-index: 1000;
            margin-bottom: 0.25rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            pointer-events: none;
        }
        .tooltip:hover::before {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: var(--vscode-editorHoverWidget-border);
            margin-bottom: -0.25rem;
            z-index: 1000;
            pointer-events: none;
        }
    `;
}