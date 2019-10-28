var describeBlocks = [];
let itBlocks;

function describe(description, func) {

  itBlocks = [];

  func();

  describeBlocks.push({
    "description": description,
    "function": func,
    "examples": itBlocks
  });

}

function it(description, func) {
  itBlocks.push({
    "description": description,
    "function": func
  });
}
