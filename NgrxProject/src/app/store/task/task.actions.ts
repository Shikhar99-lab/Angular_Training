import { createAction, props } from "@ngrx/store";
import { Task } from "../../models/task.model";

export const add = createAction('[Task] Add', props<{ task: Task }>);
export const remove = createAction('[Task] Remove', props<{ task: Task }>);
export const clear = createAction('[Task] Clear', props<{ task: Task }>);