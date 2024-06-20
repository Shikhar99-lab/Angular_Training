import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "../app.state";
import { add, clear, remove } from "./person.actions";

export const person = createReducer(initialState,
    on(add, (state: AppState, { person }: any) => {
        return {
            ...state, person: [...state.person, person],
        };
    }),
    on(remove, (state, { id }: any) => (
        {
            ...state, person: state.person.filter((x) => x.id != id)
        })
    ),
    on(clear, (state: AppState) => {
        return { ...state, person: [] }
    })
);
