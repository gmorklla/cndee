'use strict';

describe('Service: testTitle', function () {

  // load the service's module
  beforeEach(module('cndeeApp'));

  // instantiate service
  var testTitle;
  beforeEach(inject(function (_testTitle_) {
    testTitle = _testTitle_;
  }));

  it('should do something', function () {
    expect(!!testTitle).toBe(true);
  });

});
