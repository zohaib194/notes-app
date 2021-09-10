import { ChangeDetectorRef, Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/state/store/models/note.model';
import { getNotesData } from 'src/app/state/store/selectors/note.selector';
import { CreateNote, DeleteNote } from 'src/app/state/store/actions/note.action';
import { getColorData } from 'src/app/state/store/selectors/color.selector';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export default class NoteFormComponent implements OnInit, OnChanges{
  @Input()
  saveNote: boolean;

  @Output()
  public noteSaved: EventEmitter<any> = new EventEmitter();

  notesData: any;
  noteForm: FormGroup;
  selectedColor: string;

  constructor(private store: Store<any>,
              private changeDetector: ChangeDetectorRef) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.saveNote && changes.saveNote.currentValue === true) {
      this.addNote()
    }
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      noteText: new FormControl("", Validators.required)
    });

    this.store.select(getNotesData).subscribe(data => {
      if (data) {
        this.notesData = data;
      }
      this.changeDetector.detectChanges();
    });

    this.store.select(getColorData).subscribe(data => {
      if (data) {
        this.selectedColor = data.color;
      }
      this.changeDetector.detectChanges();
    });
  }

  addNote(): void {
    const note: Note = {
      id: (this.notesData && this.notesData.notes) ? this.notesData.notes?.length + 1 : 1,
      data: this.noteText?.value,
      color: this.selectedColor,
      textColor: (this.selectedColor == "Yellow") ? "Black" : "White"
    };

    if (note.data === null || note.data === "") {
      this.noteText?.setErrors({
        invalid: true,
        message: 'Note text is required!'
      })
      return;
    }

    setTimeout(() => {
      this.noteSaved.emit();
    }, 1000);
    this.noteForm.reset();
    this.store.dispatch(new CreateNote(note));
  }

  removeNote(note: Note): void {
    this.store.dispatch(new DeleteNote(note));
  }

  get noteText() {
    return this.noteForm.get('noteText');
  }

}
