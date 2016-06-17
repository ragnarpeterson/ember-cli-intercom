import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  boot(params) {
    params['app_id'] = config['ember-cli-intercom'].appId;
    Intercom('boot', params);
  },

  update(params) {
    Intercom('update', params);
  },

  shutdown() {
    Intercom('shutdown');
  },

  hide() {
    Intercom('hide');
  },

  show() {
    Intercom('show');
  },

  showMessages() {
    Intercom('showMessages');
  }

  showNewMessage(text) {
    if (text) {
      Intercom('showNewMessage', text);
    } else {
      Intercom('showNewMessage');
    }
  }
});
