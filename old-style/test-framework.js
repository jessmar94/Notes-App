function describe(description, func) {
  func()
}

function it(description, func) {
  func()
}

function expect(subject) {
  return new Expect(subject)
}

function Expect(subject) {
  this.subject = subject
  return this.subject
}

Expect.prototype.toEq = function(matcher) {
  if (matcher != this.subject) {
    throw new Error('Expected ${this.subject} to equal ${matcher}')
  } else {
    console.log("Test passed")
  }
  // if (this.arg === arg) {
  //   console.log("test passed")
  // } else {
  //   console.log("test failed")
  // }
}
