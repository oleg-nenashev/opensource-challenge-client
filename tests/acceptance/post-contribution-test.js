import { currentURL, visit } from '@ember/test-helpers'
import { afterEach, beforeEach, describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage'
import { expect } from 'chai'
import {
  authenticateSession,
  invalidateSession,
} from 'ember-simple-auth/test-support'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | post contribution', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('should redirect to login', async function() {
    await visit('/post-contribution')

    expect(currentURL()).to.equal('/login')
  })

  describe('Logged in', function() {
    beforeEach(async function() {
      this.server.loadFixtures('users')

      await authenticateSession({
        access_token: 'userid:1',
      })
    })

    afterEach(async function() {
      await invalidateSession()
    })

    it('can visit /post-contribution', async function() {
      this.server.loadFixtures('challenges')
      await visit('/post-contribution')

      percySnapshot('/post-contribution')

      expect(currentURL()).to.equal('/post-contribution')
    })
  })
})
