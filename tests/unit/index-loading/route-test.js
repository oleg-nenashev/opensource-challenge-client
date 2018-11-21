import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | index loading', function() {
  setupTest()

  it('exists', function() {
    let route = this.owner.lookup('route:index-loading')
    expect(route).to.be.ok
  })
})
