import { ColorActions, ColorActionTypes } from "../actions/color.action";
import { Color } from "../models/color.model";

export interface ColorState {
    color: string
}

const initialState: ColorState = {
    color: "Yellow"
}

export function colorReducer(state = initialState, action: ColorActions): ColorState {
    switch (action.type) {
        case ColorActionTypes.GET_COLOR:
            const currentState = {
                ...state
            }
            return {
                ...state as ColorState,
                color: currentState.color
            }
        
        case ColorActionTypes.SET_COLOR:
            const currentColorState = {
                ...state
            }
            currentColorState.color = action.payload
            return {
                ...state as ColorState,
                color: currentColorState.color
            }
        default:
            return state;
    }
}