import Ember from 'ember'

export function initialize() {
  Ember.Router.reopen({
    intercom: Ember.inject.service(),

    notifyIntercom: Ember.on('didTransition', function () {
      this.get('intercom').update();
    })
  });
}

export default {
  name: 'router',
  initialize: initialize
};
