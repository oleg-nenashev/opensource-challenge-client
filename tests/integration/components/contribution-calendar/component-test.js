import EmberObject from '@ember/object';
import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | contribution calendar', function() {
  setupComponentTest('contribution-calendar', {
    integration: true,
  })

  it('renders', function() {
    this.set(
      'challenge',
      EmberObject.create({
        startsOn: '2016-12-01',
        endsOn: '2016-12-24',
        contributions: [],
      }),
    )
    this.render(hbs`{{contribution-calendar challenge=challenge}}`)
    expect(this.$()).to.exist
  })
})
