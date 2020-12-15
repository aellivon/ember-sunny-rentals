import Application from 'sunny-ember-rentals/app';
import config from 'sunny-ember-rentals/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
