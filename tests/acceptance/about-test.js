import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | about', function() {
  setupApplicationTest()

  it('can visit /about', async function() {
    await visit('/about')

    percySnapshot('/about')

    expect(currentURL()).to.equal('/about')
  })
})
