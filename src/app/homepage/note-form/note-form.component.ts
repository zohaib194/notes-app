import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/state/models/note.models';
import { getNotes } from 'src/app/state/selectors/note.selector';
import { CreateNote, DeleteNote, NoteActionTypes } from 'src/app/state/store/actions/note.actions';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  notesData: any;

  noteForm: FormGroup;

  colors: string[] = ['Yellow', 'Blue', 'Green'];
  selectedColor: string = 'Yellow';

  constructor(private store: Store<{ notes: Note[] }>,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      noteText: new FormControl("", Validators.required)
    });

    this.store.select(getNotes).subscribe(data => {
      if(data) {
        this.notesData = data;
      }
      this.changeDetector.detectChanges();
    })
  }

  addNote(): void {
    const note: Note = {
      id: this.notesData.notes?.length + 1,
      data: this.noteText?.value
    };

    if (note.data === "") {
      return;
    }

    this.noteForm.reset();
    this.store.dispatch(new CreateNote(note));
  }

  removeNote(note: Note): void {
    this.store.dispatch(new DeleteNote(note));
  }
  
  onColorChange(event: any): void {
    console.log(event.target.value);
    this.selectedColor = event.target.value;
  }

  get noteText() {
    return this.noteForm.get('noteText');
  }

}
