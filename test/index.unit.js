'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export qtepcore-lib', function() {
    var qtepcore = require('../');
    should.exist(qtepcore.lib);
    should.exist(qtepcore.lib.Transaction);
    should.exist(qtepcore.lib.Block);
  });
});
