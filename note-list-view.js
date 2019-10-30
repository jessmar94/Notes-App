(function(exports) {

  function ViewNoteList(noteList) {
    this.viewNotes = noteList
  }

  ViewNoteList.prototype.outputHtml = function() {
    notesHTML = "<ul>"
    this.viewNotes.returnList().forEach(function(note) {
      notesHTML += ("<li><div>" + note.text.substr(0, 19) + '...' + "</div></li>")
    })
    return notesHTML += "</ul>"

  }

  exports.ViewNoteList = ViewNoteList
})(this)
