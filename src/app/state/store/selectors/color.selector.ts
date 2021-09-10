import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ColorState } from "../reducers/color.reducer";

export const selectColorState = createFeatureSelector<ColorState>('colors')
export const getColorData = createSelector(
    selectColorState,
    (colorState: ColorState) => colorState
);