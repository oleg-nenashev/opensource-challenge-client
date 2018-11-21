import { currentURL, visit } from '@ember/test-helpers'
import { afterEach, beforeEach, describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { expect } from 'chai'
import {
  authenticateSession,
  invalidateSession,
} from 'opensource-challenge-client/tests/helpers/ember-simple-auth'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | post contribution', function() {
  setupApplicationTest()

  it('can redirects to login', async function() {
    await visit('/post-contribution')

    expect(currentURL()).to.equal('/login')
  })

  describe('Logged in', function() {
    beforeEach(async function() {
      server.loadFixtures('users')

      await authenticateSession({
        access_token: 'userid:1',
      })
    })

    afterEach(async function() {
      await invalidateSession()
    })

    it('can visit /post-contribution', async function() {
      server.loadFixtures('challenges')
      await visit('/post-contribution')

      percySnapshot('/post-contribution')

      expect(currentURL()).to.equal('/post-contribution')
    })
  })
})
