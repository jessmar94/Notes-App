(function(exports) {

  function testReturnNoteList() {

    var note = new Note("This is a note")
    var note2 = new Note("This is a note 2")
    var noteList = new NoteList()

    noteList.addNote(note)
    noteList.addNote(note2)

    assert.isTrue(noteList.notes[0] === note )

  }
  testReturnNoteList();
})(this);
