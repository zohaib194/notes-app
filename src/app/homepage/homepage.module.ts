import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from './note-form/note-form.component';
import { noteReducer } from '../state/store/reducers/note.reducer';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { colorReducer } from '../state/store/reducers/color.reducer';
import { NoteComponent } from './note/note.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NoteFormComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('notes', noteReducer),
    StoreModule.forFeature('colors', colorReducer)
  ],
  exports: [
    NoteComponent
  ]
})
export class HomepageModule { }
