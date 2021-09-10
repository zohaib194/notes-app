import { Action } from "@ngrx/store";

export enum ColorActionTypes {
    SET_COLOR = "[HEADER] Set Color",
    GET_COLOR = "[HEADER] Get Color"
}

export class SetColor implements Action {
    readonly type = ColorActionTypes.SET_COLOR;
    constructor(public payload: any) {}
}

export class GetColor implements Action {
    readonly type = ColorActionTypes.GET_COLOR;
    constructor(public payload: any) {}
}

export type ColorActions =
    SetColor |
    GetColor;