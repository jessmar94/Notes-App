(function(exports) {

  function ViewNoteList(noteList) {
    this.noteList = noteList
  }

  ViewNoteList.prototype.outputHtml = function() {
    notesHTML = "<ul>"
    this.noteList.returnList().forEach(function(note) {
      notesHTML += ("<li><div><a href=#notes/" + note.id + ">" + note.text.substr(0, 19) + '...' + "</a></div></li>")
    })
    return notesHTML += "</ul>"
  }

  ViewNoteList.prototype.getNoteByID = function(id) {
    return this.noteList.returnList()[id]
  }

  exports.ViewNoteList = ViewNoteList
})(this)
