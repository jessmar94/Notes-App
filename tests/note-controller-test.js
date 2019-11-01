(function(expects) {

  function testNoteController() {

    let elementDouble = {
      innerHTML: "double"
    }

    let documentDouble = {
      getElementById: function() {
        return elementDouble;
      }
    }
    ID.reset();
    var list = new NoteList();
    list.newNote("Favourite food: pesto");
    var view = new ViewNoteList(list);

    var noteController = new NoteController(view)

    assert.isTrue(noteController.viewHTML(documentDouble) ===
      "<ul><li><div><a href=#notes/0>Favourite food: pes...</a></div></li></ul>" )
  }

  function testLoadContent() {

    let elementDouble = {
      innerHTML: "double"
    }

    let documentDouble = {
      getElementById: function() {
        return elementDouble;
      }
    }

    ID.reset();
    var list = new NoteList();
    list.newNote("Favourite food: pesto");
    var view = new ViewNoteList(list);

    var noteController = new NoteController(view)

    assert.isTrue(showNoteCurrentPage() === "Favourite food: pes...")

  }

  testNoteController();
  testLoadContent();
})(this);
