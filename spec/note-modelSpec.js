describe('Note', function() {
  var note = new Note()
  describe('#create', function() {
    it('creates a new Note object', function() {
      note.create("some text inside the note")
      expect(note.text).toEq("some text inside the note")
    })
  })
})
