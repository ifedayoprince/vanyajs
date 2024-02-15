// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, Hover, commands, languages, window } from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vanya-ext" is now active!');

	
	languages.registerHoverProvider('javascript', {
		provideHover(document, position, token) {
			console.log(document);
			return new Hover('I am adsd hover!');
		}
	});
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = commands.registerCommand('vanya-ext.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		window.showInformationMessage('Hello World from vanya-ext!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
