# vscode-solution-explorer

This extension adds a Visual Studio Solution File explorer panel in Visual Studio Code. Now you can navigate into your solution following the original Visual Studio structure.

## Features

Adds a Solution Explorer panel where you can find a Visual Studio Solution File Explorer.

- Can load any .sln version

- Supports csproj, fsproj and vbproj (from vs2017 and before)

- Supports dotnet core projects

- You can create, delete, rename or move project folders and files.

- You can create, delete, rename or move solution, solution folders and projects.

- You can add or remove packages and references when the project is of kind CPS (dotnet core).

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/master/images/vscode-solution-explorer-1.gif)

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/master/images/vscode-solution-explorer-2.gif)

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/master/images/vscode-solution-explorer-3.gif)

## Requirements

You have to open a folder with at least one solution file (".sln") in the root path.

Or you can create a new one by clicking with the rigth mouse button.

## License

The source code is licensed under the [MIT](License) license.

The icons from ([vscode-icons extension](https://github.com/vscode-icons/vscode-icons/)) are licensed under the [Creative Commons - ShareAlike (CC BY-SA)](https://creativecommons.org/licenses/by-sa/4.0/) license. 

Branded icons are licensed under their copyright license.

## Extension Settings

- `vssolution.showInExplorer` Show the solution explorer in the explorer pane.

- `vssolution.showOutputChannel` Show the solution explorer output channel.

- `vssolution.solutionExplorerIcons` "solution-explorer": custom items from vscode-solution-explorer extension. "mix": file and folder icons from the installed icons theme. "current-theme": all the icons are from the installed icons theme.

- `vssolution.netcoreIgnore` Folder and file names to ignore when get a dotnet core project content.

- `vssolution.xxprojItemTypes` Type of XML element to put in the xxproj files.

###### Example

```javascript
{
    "vssolution.showInExplorer": true,

    "vssolution.showOutputChannel": true,

    "vssolution.solutionExplorerIcons": "current-theme", 

    "vssolution.netcoreIgnore": [
        "bin",
        "node_modules",
        "obj",
        ".ds_store"
    ],

    "vssolution.xxprojItemTypes": {
        "*": "Content",
        "cs": "Compile",
        "vb": "Compile",
        "fs": "Compile",
        "ts": "TypeScriptCompile"
    }
}
```

## Known Issues

Please report your issues: [vscode-solution-explorer GitHub page](https://github.com/fernandoescolar/vscode-solution-explorer/issues)

## Release Notes

There is a lot of work to do.

### 0.2.11

Added dotnet commands: build, clean, pack, publish, restore, run and test.

### 0.2.10

Bug fixed: error removing a folder with files in old xxproj files.

Added basic support for .shproj files.

Improved xml node name selection on edit old xxproj.

Updated question popups to show 'No' option.

Updated to vscode 1.21.1.

### 0.2.9

Bug fixed: #6 Wrong warning about incorrect type for xxprojItemTypes.

Updated icons from current theme with the vscode 1.21.0 new features.

Added commands shorcuts (but you have to open the context menu to make it work :( ).

### 0.2.8

Ask for install templates only when at least one solution is found.

Added more inline actions for create files and folders.

Refactoring template engine installation.

Rename command now has the old name value to modify.

Add project command is showed in the right group, and it has a default project destination folder based on name.

**Enjoy!**
