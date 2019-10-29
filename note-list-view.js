(function(exports) {

  function ViewNoteList(noteList) {
    notesHTML = "<ul>"
    noteList.notes.forEach(function(note) {
      notesHTML += ("<li>" + note.text + "</li>")
    })
    return notesHTML += "</ul>"
  }

  exports.ViewNoteList = ViewNoteList
})(this)
