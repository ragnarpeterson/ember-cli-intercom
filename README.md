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

Then, once a user has authenticated, you will need to boot intercom. You can inject the `intercom` service provided by this addon into a `route/component/service/whatever` and call the boot method:

```javascript
this.get('intercom').boot({
  name: '[YOUR_USERS_NAME]',
  email: '[YOUR_USERS_EMAIL]',
  created_at: '[YOUR_USERS_SIGNUP_DATE]'
});
```
