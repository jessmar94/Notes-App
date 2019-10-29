(function(exports) {

  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note)
  }

  NoteList.prototype.returnList = function() {
    // this.notes.forEach(function(note){
    //   console.log(note)
    return this.notes
  }

  exports.NoteList = NoteList;
})(this)
