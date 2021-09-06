import { Note } from "../../models/note.models";
import { NoteActions, NoteActionTypes } from "../actions/note.actions";

export interface NoteState {
    notes: Note[];
}

const initialState: NoteState = {
    notes: []
};

export function noteReducer(state = initialState, action: NoteActions): NoteState {
    switch (action.type) {
        case NoteActionTypes.CREATE_NOTE: {
            const newNote = action.payload;
            const updatedNotes = [...state.notes];

            updatedNotes.push(newNote);
            return {
                ...state as NoteState,
                notes: updatedNotes
            }
        }
        case NoteActionTypes.DELETE_NOTE: {

            const currentNotes = [...state.notes];
            const itemToRemoveIndex = currentNotes.findIndex(note => note.id == action.payload.id);

            if(itemToRemoveIndex > -1) {
                currentNotes.splice(itemToRemoveIndex, 1);
            }
            return {
                ...state as NoteState,
                notes: currentNotes
            }
        }
        case NoteActionTypes.GET_NOTES: {
            const currentNotes = [...state.notes];

            return {
                ...state as NoteState,
                notes: currentNotes
            }
        }
        default: {
            return state;
        }
    }
}