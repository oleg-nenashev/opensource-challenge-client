import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | contributor profile', function() {
  setupApplicationTest()

  it('can visit /contributors/2', async function() {
    server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/contributors/2')

    percySnapshot('/contributor/profile')

    expect(currentURL()).to.equal('/contributors/2')
  })
})
