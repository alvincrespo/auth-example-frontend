import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'auth-example-frontend/config/environment';

const host = config.apiUrl || '';
const namespace = config.apiNamespace;
const serverTokenEndpoint = [ host, namespace, 'token' ];

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: serverTokenEndpoint.join('/')
});