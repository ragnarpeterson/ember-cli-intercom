import Service from '@ember/service';
import config from '../config/environment';

export default Service.extend({
  boot(params) {
    params['app_id'] = config['ember-cli-intercom'].appId;

    if (params['app_id']) {
      Intercom('boot', params);
    }
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
  },

  showNewMessage(text) {
    if (text) {
      Intercom('showNewMessage', text);
    } else {
      Intercom('showNewMessage');
    }
  },

  trackEvent(eventName, params) {
    Intercom('trackEvent', eventName, params);
  }
});
