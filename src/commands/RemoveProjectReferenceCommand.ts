import { CliCommandBase } from "./base/CliCommandBase";
import { SolutionExplorerProvider } from "../SolutionExplorerProvider";
import { TreeItem } from "../tree/TreeItem";
import { StaticCommandParameter } from "./parameters/StaticCommandParameter";
import { InputTextCommandParameter } from "./parameters/InputTextCommandParameter";

export class RemoveProjectReferenceCommand extends CliCommandBase {
    constructor(provider: SolutionExplorerProvider) {
        super(provider, 'dotnet');
    }

    protected shouldRun(item: TreeItem): boolean {
        this.parameters = [
            new StaticCommandParameter('remove'),
            new StaticCommandParameter(item.parent.path),
            new StaticCommandParameter('reference'),
            new StaticCommandParameter(item.path)
        ];

        return true;
    }
}