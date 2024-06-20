import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "../app.state";
import { add, clear, remove } from "./cricketer.actions";

export const cricketerReducer = createReducer(initialState,
    on(add, (state: AppState, { cricketer }: any) => {
        return {
            ...state, cricketer: [...state.cricketer, cricketer],
        };
    }),
    on(remove, (state, { id }: any) => (
        {
            ...state, cricketer: state.cricketer.filter((x) => x.id != id)
        })
    ),
    on(clear, (state: AppState) => {
        return { ...state, cricketer: [] }
    })
);
