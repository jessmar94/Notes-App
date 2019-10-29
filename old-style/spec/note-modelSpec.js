describe('Note', function() {

  describe('returnNote', function() {

    it('returns the note text', function() {
      var note = new Note("This is a note")
      expect(note.returnNote()).toEq("This is a note")
    })
  })
})
