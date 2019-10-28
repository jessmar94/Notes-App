describe('Note', function() {

  describe('create', function() {
    it('creates a new Note object', function() {
      expect(Note.create).toBeInstanceOf(Note)
    })
  })
})
