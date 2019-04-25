interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'YJdMJQJ0V54VWuP4gILPkHihewG1VYaD',
  domain: 'dev-8z4hqo4c.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
