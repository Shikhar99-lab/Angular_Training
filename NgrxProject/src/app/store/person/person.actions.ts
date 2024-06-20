import { createAction, props } from "@ngrx/store";
import { Person } from "../../models/person.model";

export const add = createAction('[Person] Add', props<{ person: Person }>);
export const remove = createAction('[Person] Remove', props<{ person: Person }>);
export const clear = createAction('[Person] Clear', props<{ person: Person }>);