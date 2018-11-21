import { currentURL, visit } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import { setupApplicationTest } from 'ember-mocha'
import { expect } from 'chai'
import { percySnapshot } from 'ember-percy'

describe('Acceptance | login', function() {
  setupApplicationTest()

  it('can visit /login', async function() {
    await visit('/login')

    percySnapshot('/login')

    expect(currentURL()).to.equal('/login')
  })
})
