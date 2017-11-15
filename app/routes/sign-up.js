import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const AUTHENTICATOR = 'authenticator:oauth2';

export default Route.extend({
  session: service(),

  actions: {
    async onSignUp(email, password) {
      let attrs = { email, password };
      let user = this.store.createRecord('user', attrs);

      await user.save();

      let session = this.get('session');

      await session.authenticate(AUTHENTICATOR, email, password);
    }
  }
});
