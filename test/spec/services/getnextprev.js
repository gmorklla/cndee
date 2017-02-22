'use strict';

describe('Service: getnextprev', function () {

  // load the service's module
  beforeEach(module('cndeeApp'));

  // instantiate service
  var getnextprev;
  beforeEach(inject(function (_getnextprev_) {
    getnextprev = _getnextprev_;
  }));

  it('should do something', function () {
    expect(!!getnextprev).toBe(true);
  });

});
