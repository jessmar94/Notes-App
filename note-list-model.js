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
    let noteObject = new Note(text);
    this.addNote(noteObject);
  };

  exports.NoteList = NoteList;
})(this);
