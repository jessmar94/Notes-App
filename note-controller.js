(function(exports) {

  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    noteList.newNote("Favourite drink: seltzer");
    this.viewNoteList = new ViewNoteList(noteList);
  }

  NoteController.prototype.viewHTML = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.viewNoteList.outputHtml();
  }

  exports.NoteController = NoteController;
})(this);
//
noteController = new NoteController();
noteController.viewHTML();
