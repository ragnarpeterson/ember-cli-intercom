# ember-cli-intercom

Easily add Intercom to your app.

## Installation

```bash
# From within your ember-cli project
ember install ember-cli-intercom
```

## Usage

First you'll need to configure your Intercom App ID:

```javascript
// config/environment.js

ENV['ember-cli-intercom'] = {
  appId: '[YOUR_APP_ID]'
};
```

You can set `appId` to `null` in environments where you do not want Intercom to load.

Then, once a user has authenticated, you will need to boot intercom. You can inject the `intercom` service provided by this addon into a `route/component/service/whatever` and call the boot method:

```javascript
this.get('intercom').boot({
  name: '[YOUR_USERS_NAME]',
  email: '[YOUR_USERS_EMAIL]',
  created_at: '[YOUR_USERS_SIGNUP_DATE]'
});
```

## API

This service exposes some of the [Intercom available API](https://docs.intercom.io/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/the-intercom-javascript-api).

* `Intercom('boot')`

  ```javascript
    this.get('intercom').boot({});
  ```

* `Intercom('shutdown')`

  ```javascript
    this.get('intercom').shutdown();
  ```

* `Intercom('hide')`

  ```javascript
    this.get('intercom').hide();
  ```

* `Intercom('show')`

  ```javascript
    this.get('intercom').show();
  ```

* `Intercom('showMessages')`

  ```javascript
    this.get('intercom').showMessages();
  ```

* `Intercom('showNewMessage', 'pre-populated content')`

  You can use this either with or without the text parameter.

  ```javascript
    this.get('intercom').showNewMessage('My text');
  this.get('intercom').showNewMessage();
  ```
  
* `Intercom('trackEvent')`

  ```javascript
    this.get('intercom').trackEvent('event-name', { meta: data });
  ```
