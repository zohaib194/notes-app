import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from './note-form/note-form.component';
import { noteReducer } from '../state/store/reducers/note.reducer';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('notes', noteReducer)
  ],
  exports: [
    NoteFormComponent
  ]
})
export class HomepageModule { }
