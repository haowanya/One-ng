import { Injectable } from '@angular/core';
import { IProjectITemProps, IProjectITemStates, IProjectITemOutput, IProjectITemService } from './projectITem.component.d';

@Injectable()
export class ProjectITemService implements IProjectITemService {
    initDelegate(props: IProjectITemProps, states: IProjectITemStates): Object {
        return {};
    }

    changeDelegate(oldProps: IProjectITemProps, newProps: IProjectITemProps, states: IProjectITemStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IProjectITemProps, states: IProjectITemStates): void {
        return;
    }

    outputFormatter(props: IProjectITemProps, states: IProjectITemStates): IProjectITemOutput {
        return {} as IProjectITemOutput;
    }
}