import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  saveNote: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSaveNoteButton(): void {
    this.saveNote = !this.saveNote;
  }
}
