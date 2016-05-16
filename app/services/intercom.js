import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  boot(params) {
    params['app_id'] = config['ember-cli-intercom'].appId;
    Intercom('boot', params);
  },

  update(params) {
    Intercom('update', params);
  }
});
