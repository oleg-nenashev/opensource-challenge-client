import Application from '../app'
import config from '../config/environment'
import { setApplication } from '@ember/test-helpers'
import { setResolver } from 'ember-mocha'

setApplication(Application.create(config.APP))

setResolver(resolver)
