import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | index', function() {
  setupApplicationTest()

  it('can visit /', async function() {
    server.loadFixtures('challenges', 'users', 'contributions')

    await visit('/')

    percySnapshot('/')

    expect(currentURL()).to.equal('/')
  })
})
