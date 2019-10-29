(function(exports) {

  function testViewMultipleNotes() {

    var noteList = new NoteList()
    noteList.addNote("Note")
    noteList.addNote("Note 2")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div>Note</div></li><li><div>Note 2</div></li></ul>"
  }

  function testViewOneNote() {

    var noteList = new NoteList()
    noteList.addNote("Note")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div>Note</div></li><li></ul>"
  }

  function testViewNoNotes() {

    var noteList = new NoteList()
    noteList.addNote("Note")
    noteList.addNote("Note 2")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div></div></li></ul>"
  }

  testViewMultipleNotes();
  testViewOneNote();
  testViewNoNotes();
})(this)
