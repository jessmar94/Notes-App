(function(exports) {

  function ViewNoteList(noteList) {
    this.viewNotes = noteList
  }

  ViewNoteList.prototype.outputHtml = function() {
    notesHTML = "<ul>"
    this.viewNotes.returnList().forEach(function(note) {
      notesHTML += ("<li><div>" + note + "</div></li>")
    })

    return notesHTML += "</ul>"

  }

  exports.ViewNoteList = ViewNoteList
})(this)
