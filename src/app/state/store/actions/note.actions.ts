import { Action } from '@ngrx/store';

export enum NoteActionTypes {
  CREATE_NOTE = '[HOME] Create a note',
  DELETE_NOTE = '[HOME] Delete a note',
  GET_NOTES = '[HOME] Get all notes'
}

export class CreateNote implements Action {
  readonly type = NoteActionTypes.CREATE_NOTE;
  constructor(public payload: any) {}
}

export class DeleteNote implements Action {
  readonly type = NoteActionTypes.DELETE_NOTE;
  constructor(public payload: any) {}
}

export class GetNotes implements Action {
  readonly type = NoteActionTypes.GET_NOTES;
  constructor(public payload: any) {}
}

export type NoteActions = 
CreateNote |
DeleteNote |
GetNotes;