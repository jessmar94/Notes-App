(function(exports) {

  function testSingleNoteView() {

    note = new Note("I need a drink")
    var singleNoteView = new SingleNoteView()
    assert.isTrue(singleNoteView.returnHTML() ===
        "<div>I need a drink</div>" )
  }
  testSingleNoteView()
})(this)
