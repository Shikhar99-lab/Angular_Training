import { Cricketer } from "../models/cricketer.model";

export interface AppState {
    cricketer: Cricketer[];
    person: Cricketer[];
    task: Cricketer[];
}

export const initialState: AppState = {
    person: [],
    task: [],
    cricketer: [
        { id: 0, fname: "Sachin", lname: "Tendulkar", role: "Batsman" }
    ]
}