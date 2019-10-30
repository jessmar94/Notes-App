(function(exports) {

  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.viewNoteList = new ViewNoteList(noteList);
  }

  NoteController.prototype.viewHTML = function( doc = document ) {
    var element = doc.getElementById('app');
    element.innerHTML = this.viewNoteList.outputHtml();
  }

  exports.NoteController = NoteController;
})(this);

// var noteList = new NoteList()
// noteList.newNote("Favourite drink: gin and tonic");
// noteController = new NoteController(noteList);
// noteController.viewHTML();
