/* jshint expr:true */
import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('contribution Ability', function() {
  setupTest()

  // Replace this with your real tests.
  it('exists', function() {
    var ability = this.owner.lookup('ability:contribution')
    expect(ability).to.be.ok
  })
})
