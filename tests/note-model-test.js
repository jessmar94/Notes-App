(function(exports) {

  function testNoteReturnsText() {
    var note = new Note("This is a note")

    assert.isTrue(note.returnText() === note.text)
  }

  function testNoteID() {

    ID.reset(); 

    var note = new Note("This is a note")

    assert.isTrue(note.id === 0)

  }

  testNoteReturnsText();
  testNoteID();
})(this);
