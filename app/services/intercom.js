/* global Intercom */
import Service from '@ember/service';
import config from '../config/environment';

export default Service.extend({

  disabled: false,

  boot(params) {
    params['app_id'] = config['ember-cli-intercom'] && config['ember-cli-intercom'].appId;

    this.intercomApi('boot', params);
  },

  intercomApi(...args) {
    if (typeof Intercom !== 'undefined' && !this.get('disabled')) {
      Intercom(...args);
    }
  },

  update(params) {
    this.intercomApi('update', params);
  },

  shutdown() {
    this.intercomApi('shutdown');
  },

  hide() {
    this.intercomApi('hide');
  },

  show() {
    this.intercomApi('show');
  },

  showMessages() {
    this.intercomApi('showMessages');
  },

  showNewMessage(text) {
    if (text) {
      this.intercomApi('showNewMessage', text);
    } else {
      this.intercomApi('showNewMessage');
    }
  },

  trackEvent(eventName, params) {
    this.intercomApi('trackEvent', eventName, params);
  }
});
