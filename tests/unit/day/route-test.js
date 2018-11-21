import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | day', function() {
  setupTest()

  it('exists', function() {
    let route = this.owner.lookup('route:day')
    expect(route).to.be.ok
  })
})
