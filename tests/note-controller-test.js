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

    var noteController = new NoteController(list)

    assert.isTrue(noteController.viewHTML(documentDouble) ===
      "<ul><li><div><a href=#notes/0>Favourite food: pes...</a></div></li></ul>" )
  }

  testNoteController();
})(this);
