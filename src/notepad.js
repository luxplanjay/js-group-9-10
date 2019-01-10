'use strict';

/*
  Note Schema
    id: integer
    title: string
    body: string
    priority: integer [0-2]
*/

const priorityTypes = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

// Notepad Model
const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  saveNote(note) {
    this.notes.push(note);
  },
  findNoteById(id) {
    for (const note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  },
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];

      if (note.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  },
  getNotesWithFilter(filter = '') {},
};
