import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | about', function(hooks) {
  setupMirage(setupApplicationTest(hooks))

  it('can visit /about', async function() {
    await visit('/about')

    percySnapshot('/about')

    expect(currentURL()).to.equal('/about')
  })
})
