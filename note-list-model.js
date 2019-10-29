(function(exports) {

  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note)
  }

  NoteList.prototype.returnList = function() {
    return this.notes
  }

  NoteList.prototype.newNote = function(text) {
    let newNote = new Note(text);
    this.notes.push(newNote)
  };

  exports.NoteList = NoteList;
})(this)
