(function(exports){

  function Note(text) {
    this.text = text
    this.id = ID.generate();
  }

  Note.prototype.returnText = function() {
    return this.text
  }

  exports.Note = Note;
})(this);
