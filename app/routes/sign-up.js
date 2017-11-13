import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  actions: {
    async onSignUp(email, password) {
      let user = this.store.createRecord('user', { email, password });

      await user.save();

      let session = this.get('session');

      await session.authenticate('authenticator:oauth2', email, password);
    }
  }
});
