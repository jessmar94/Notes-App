(function(exports) {

  function NoteController(viewNoteList) {
    var viewNoteList = viewNoteList
    this.viewNoteList = viewNoteList;
    this.viewHTML();

    makeUrlChangeShowNoteForCurrentPage();

    addNote();

    function makeUrlChangeShowNoteForCurrentPage() {
      window.addEventListener("hashchange", showNoteCurrentPage);
    };

    function showNoteCurrentPage() {
      showNote(getNoteFromUrl(window.location));
    };

    function getNoteFromUrl(link) {
      return link.hash.split("#notes/")[1];
    };

    function showNote(id) {
      console.log(this)
      document
        .getElementById('app')
        .innerHTML = viewNoteList.getNoteByID(id).text;
      // return element.innerHTML = this.viewNoteList.viewNotes.notes[id].text;
    };

    function addNote() {
      document
        .getElementById("text")
        .addEventListener("submit", function(submit) {
          submit.preventDefault();
          console.log(submit)

        })
    }

  }

  NoteController.prototype.viewHTML = function( doc = document ) {
    var element = doc.getElementById('app');
    return element.innerHTML = this.viewNoteList.outputHtml();
  }

  exports.NoteController = NoteController;
})(this);
