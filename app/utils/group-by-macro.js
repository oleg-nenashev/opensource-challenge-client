// BASED ON https://github.com/HeroicEric/ember-group-by
import { A as emberArray } from '@ember/array';

import { get, computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default function groupBy(collection, property) {
  const dependentKey = `${collection}.@each.${property}`

  return computed(dependentKey, function() {
    let groups = emberArray()
    let items = get(this, collection)

    items.forEach(item => {
      let value = get(item, property)
      let group = groups.findBy('value', value)

      if (isPresent(group)) {
        get(group, 'items').push(item)
      } else {
        group = { property: property, value: value, items: [item] }
        groups.push(group)
      }
    })

    return groups
  }).readOnly()
}
