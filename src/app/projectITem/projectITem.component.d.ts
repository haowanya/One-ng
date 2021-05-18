export interface IProjectITemProps {

}

export interface IProjectITemStates {

}

export interface IProjectITemOutput {

}

export interface IProjectITemService {
    initDelegate(props: IProjectITemProps, states: IProjectITemStates): Object;
    changeDelegate(oldProps: IProjectITemProps, newProps: IProjectITemProps, states: IProjectITemStates): Object;
    destroyDelegate(props: IProjectITemProps, states: IProjectITemStates): void;
    outputFormatter(props: IProjectITemProps, states: IProjectITemStates): IProjectITemOutput;
}