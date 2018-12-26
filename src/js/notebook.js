'use strict';

/*
  Note Schema

    id: integer | string
    title: string
    body: string
    priority: integer [0-2]
*/

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

// Model
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
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);

    if (!note) return;

    note.priority = priority;
  },
  filterNotes(query = '') {
    const filteredNotes = [];

    for (const note of this.notes) {
      const { title, body } = note;
      const noteContent = `${title} ${body}`;
      const hasQuery = noteContent.toLowerCase().includes(query.toLowerCase());

      if (hasQuery) {
        filteredNotes.push(note);
      }
    }

    return filteredNotes;
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
  // Дестуктуризируем второй параметр
  updateNoteContent(id, { field, value }) {
    const note = this.findNoteById(id);

    if (!note) return;

    note[field] = value;
  },
};

notebook.saveNote({
  id: 1,
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: PRIORITY_TYPES.HIGH,
});

notebook.saveNote({
  id: 2,
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: PRIORITY_TYPES.NORMAL,
});

notebook.saveNote({
  id: 3,
  title: 'Get comfy with Frontend Frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notebook.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

// Смотрю что у меня в заметках
console.log('Все текущие заметки: ', notebook.getNotes());

// Зима уже близко, пора поднять приоритет на покупку одежды
notebook.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// Смотрю что у меня в заметках
console.log(
  'Заметки после обновления приоритета для id 4: ',
  notebook.getNotes(),
);

// Решил что фреймворки отложу немного, понижаю приоритет
notebook.updateNotePriority(3, PRIORITY_TYPES.LOW);
// Смотрю что у меня в заметках
console.log(
  'Заметки после обновления приоритета для id 3: ',
  notebook.getNotes(),
);

// Решил отфильтровать заметки по слову html
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notebook.filterNotes('html'),
);

// Решил отфильтровать заметки по слову javascript
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notebook.filterNotes('javascript'),
);

// Повторил HTML и CSS, удаляю запись по id
notebook.deleteNote(2);
// Смотрю что у меня в заметках
console.log('Заметки после удаления с id 2: ', notebook.getNotes());

// Обновим заметку с id 3
notebook.updateNoteContent(3, {
  field: 'title',
  value: 'Get comfy with React.js',
});

// Смотрю что у меня в заметках
console.log('Заметки после обновления с id 3: ', notebook.getNotes());
