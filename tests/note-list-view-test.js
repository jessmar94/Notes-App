(function(exports) {

  function testViewMultipleNotes() {

    ID.reset();

    var noteList = new NoteList()
    noteList.newNote("Note")
    noteList.newNote("Note 2")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div><a href=#notes/0>Note</a></div></li><li><div><a href=#notes/1>Note 2</a></div></li></ul>"
  }

  function testViewOneNote() {

    ID.reset();

    var noteList = new NoteList()
    noteList.newNote("Note")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div><a href=#notes/0>Note</a></div></li><li></ul>"
  }

  function testViewNoNotes() {

    var noteList = new NoteList()

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div></div></li></ul>"
  }

  function testLimitCharacters() {

    ID.reset();

    var noteList = new NoteList()
    noteList.newNote("Favourite food: pesto")

    var viewNoteList = new ViewNoteList(noteList)
    assert.isTrue(viewNoteList.outputHtml()) === "<ul><li><div><a href=#notes/0>Favourite food: pes...</a></div></li></ul>"
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
  testNoteURL();
})(this)
