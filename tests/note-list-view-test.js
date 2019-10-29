(function(exports) {

  function testViewMultipleNotes() {

    var noteList = new NoteList()
    noteList.newNote("Note")
    noteList.newNote("Note 2")

    assert.isTrue(ViewNoteList(noteList)) === "<ul><li>Note</li><li>Note 2</li></ul>"
  }

  function testViewOneNote() {
    var noteList = new NoteList()
    noteList.newNote("Note")

    assert.isTrue(ViewNoteList(noteList)) == "<ul><li>Note</li></ul>"
  }

  function testViewNoNotes() {
    var noteList = new NoteList()

    assert.isTrue(ViewNoteList(noteList)) == "<ul><li></li></ul>"
  }

  testViewMultipleNotes()
  testViewOneNote()
  testViewNoNotes()
})(this)
