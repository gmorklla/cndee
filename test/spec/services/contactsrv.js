'use strict';

describe('Service: contactsrv', function () {

  // load the service's module
  beforeEach(module('cndeeApp'));

  // instantiate service
  var contactsrv;
  beforeEach(inject(function (_contactsrv_) {
    contactsrv = _contactsrv_;
  }));

  it('should do something', function () {
    expect(!!contactsrv).toBe(true);
  });

});
