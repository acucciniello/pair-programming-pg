var chai = require('chai')
var assert = chai.assert

exports.chai = chai
exports.assert = assert

// Function to handle Taking in a test from a path
// name(in) = name for the set of tests to be used in describe()
// path(in) = path to the file of the test you would like to import
exports.importTest = function importTest (name, path) {
  describe(name, function () {
    require(path)
  })
}
