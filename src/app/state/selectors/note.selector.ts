import { createSelector } from "@ngrx/store";
import { NoteState } from "../store/reducers/note.reducer";

const selectNote = (state: NoteState) => state;
export const getNotes = createSelector(
    selectNote,
    (state: NoteState) => state.notes
)