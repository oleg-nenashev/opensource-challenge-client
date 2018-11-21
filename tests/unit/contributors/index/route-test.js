import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | contributors/index', function() {
  setupTest()

  it('exists', function() {
    let route = this.owner.lookup('route:contributors/index')
    expect(route).to.be.ok
  })
})
