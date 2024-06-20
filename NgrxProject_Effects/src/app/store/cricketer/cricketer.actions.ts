import { createAction, props } from "@ngrx/store";
import { Cricketer } from "../../models/cricketer.model";

export const add = createAction('[Cricketer] Add', props<{ cricketer: Cricketer }>());
export const remove = createAction('[Cricketer] Remove', props<{ cricketer: Cricketer }>());
export const clear = createAction('[Cricketer] Clear', props<{ cricketer: Cricketer }>());