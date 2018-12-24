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

// Notebook Model
const notebook = {
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

// console.log(notebook.getNotes());

notebook.saveNote({
  id: 1,
  title: 'Aenean vulputate HTML',
  body: 'Nunc nulla. Phasellus ullamcorper ipsum rutrum nunc.',
  priority: priorityTypes.LOW,
});

notebook.saveNote({
  id: 2,
  title: 'Cras sagittis JavaScript',
  body: 'Pellentesque auctor neque nec urna. Cras varius.',
  priority: priorityTypes.NORMAL,
});

notebook.saveNote({
  id: 3,
  title: 'Cras ultricies CSS',
  body:
    'Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Praesent nec nisl a purus blandit viverra.',
  priority: priorityTypes.HIGH,
});

// console.log(notebook.getNotes());

// console.log(notebook.findNoteById(2));

// notebook.deleteNote(3);

// console.log(notebook.getNotes());

console.log(notebook.getNotes());
notebook.getNotesWithFilter('html');
