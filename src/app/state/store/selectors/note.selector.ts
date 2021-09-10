import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NoteState } from "../reducers/note.reducer";

const selectNoteState = createFeatureSelector<NoteState>('notes')
export const getNotesData = createSelector(
    selectNoteState,
    (state: NoteState) => state
)