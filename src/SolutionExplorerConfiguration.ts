import * as vscode from "vscode";

const ConfigurationName = 'vssolution';
const ItemTypesName = 'xxprojItemTypes';
const ShowInExplorerName = 'showInExplorer';
const SolutionExplorerIconsName = 'solutionExplorerIcons';
const ShowOutputChannelName = 'showOutputChannel';
const NetcoreIgnoreName = 'netcoreIgnore';

let config: vscode.WorkspaceConfiguration = null;

export function register() {
    config = vscode.workspace.getConfiguration(ConfigurationName);
}

export function getItemTypes(): { [id: string]: string } {
    return config.get<{ [id: string]: string }>(ItemTypesName, {
        "*": "Content",
        "cs": "Compile",
        "vb": "Compile",
        "fs": "Compile",
        "ts": "TypeScriptCompile",
        "xaml": "EmbeddedResource"
    });
}

export function getShowInExplorer(): boolean {
    return config.get<boolean>(ShowInExplorerName, true);
}

export function getSolutionExplorerIcons(): string {
    return config.get<string>(SolutionExplorerIconsName, ICONS_CUSTOM);
}

export function getShowOutputChannel(): boolean {
    return config.get<boolean>(ShowOutputChannelName, true);
}

export function getNetCoreIgnore(): string[] {
    return config.get<string[]>(NetcoreIgnoreName, [ "bin", "node_modules", "obj", ".ds_store" ]);
}

export const ICONS_THEME = "current-theme";
export const ICONS_MIXED = "mix";
export const ICONS_CUSTOM = "solution-explorer";