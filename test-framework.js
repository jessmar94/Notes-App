function describe(description, func) {
  func()
}

function it(description, func) {
  func()
}

function expect(arg) {
  return new Expect(arg)
}

function Expect(arg) {
  this.arg = arg
  return this.arg
}

Expect.prototype.toEq = function(arg) {
  if (this.arg === arg) {
    console.log("test passed")
  } else {
    console.log("test failed")
  }
}
