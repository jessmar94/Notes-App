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

    noteController.viewHTML(documentDouble)

    assert.isTrue(documentDouble.getElementById('app').innerHTML ===
      "<ul><li><div>Favourite food: pesto</div></li></ul>" )
  }

  testNoteController();
})(this);