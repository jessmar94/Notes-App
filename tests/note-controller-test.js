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

    var list = new NoteList();
    list.newNote("Favourite food: pesto");
    
    var noteController = new NoteController(list)

    assert.isTrue(noteController.viewHTML(documentDouble) ===
      "<ul><li><div>Favourite food: pes...</div></li></ul>" )
  }

  testNoteController();
})(this);
