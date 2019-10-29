(function(exports) {

  function testNoteReturnsText() {
    var note = new Note("This is a note")

    assert.isTrue(note.returnText() === note.text)
  }
  testNoteReturnsText();
})(this)
