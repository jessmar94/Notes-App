(function(exports) {

  function testViewMultipleNotes() {

    var noteList = new NoteList()
    noteList.newNote("Note")
    noteList.newNote("Note 2")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div>Note</div></li><li><div>Note 2</div></li></ul>"
  }

  function testViewOneNote() {

    var noteList = new NoteList()
    noteList.newNote("Note")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div>Note</div></li><li></ul>"
  }

  function testViewNoNotes() {

    var noteList = new NoteList()

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div></div></li></ul>"
  }

  function testLimitCharacters() {

    var noteList = new NoteList()
    noteList.newNote("Favourite food: pesto")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div>Favourite food: pes...</div></li></ul>"
  }

  function testNoteURL() {
    ID.reset();
    var noteList = new NoteList()
    noteList.newNote("Favourite food: pesto")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div><a href=#notes/0>Favourite food: pes...</a></div></li></ul>"
  }

  testViewMultipleNotes();
  testViewOneNote();
  testViewNoNotes();
  testLimitCharacters();
})(this)
