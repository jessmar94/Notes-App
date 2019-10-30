(function(exports) {

  function NoteController(noteList = new NoteList()) {
    this.viewNoteList = new ViewNoteList(noteList);
  }

  NoteController.prototype.viewHTML = function( doc = document ) {
    var element = doc.getElementById('app');
    element.innerHTML = this.viewNoteList.outputHtml();
  }

  exports.NoteController = NoteController;
})(this);

// this.noteList = noteList;
// noteList.newNote();
// noteController = new NoteController();
// noteController.viewHTML();
