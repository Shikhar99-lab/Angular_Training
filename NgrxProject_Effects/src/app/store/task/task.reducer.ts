import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "../app.state";
import { add, clear, remove } from "./task.actions";

export const task = createReducer(initialState,
    on(add, (state: AppState, { task }: any) => {
        return {
            ...state, task: [...state.task, task],
        };
    }),
    on(remove, (state, { id }: any) => (
        {
            ...state, task: state.task.filter((x) => x.id != id)
        })
    ),
    on(clear, (state: AppState) => {
        return { ...state, task: [] }
    })
);
