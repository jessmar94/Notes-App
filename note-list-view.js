(function(exports) {

  function ViewNoteList(noteList) {
    this.viewNotes = noteList
  }

  ViewNoteList.prototype.outputHtml = function() {
    notesHTML = "<ul>"
    this.viewNotes.returnList().forEach(function(note) {
      notesHTML += ("<li><div><a href=#notes/" + note.id + ">" + note.text.substr(0, 19) + '...' + "</a></div></li>")
    })
    return notesHTML += "</ul>"

  }

  exports.ViewNoteList = ViewNoteList
})(this)
