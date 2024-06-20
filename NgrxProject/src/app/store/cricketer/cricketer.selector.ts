import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const SelectCricketerState = createFeatureSelector<AppState>('cricketer');

export const cricketerSelector = createSelector(
    SelectCricketerState , (state:AppState) => state.cricketer
);
