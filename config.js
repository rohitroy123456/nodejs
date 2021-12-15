const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Read environment variables from "testenv". Override environment vars if they are already set. https://www.npmjs.com/package/dotenv
const TESTENV = path.resolve(__dirname, 'testenv');
if (fs.existsSync(TESTENV)) {
  const envConfig = dotenv.parse(fs.readFileSync(TESTENV));
  Object.keys(envConfig).forEach((k) => {
    process.env[k] = envConfig[k];
  });
}

var ISSUER = process.env.ISSUER || 'https://dev-15285432.okta.com';
var CLIENT_ID = process.env.CLIENT_ID || '0oa3b38muyxR2D2375d7';
var CLIENT_SECRET = process.env.CLIENT_SECRET || 'RzlE1MLe4BW1OhzBD71WgG-4wc8hmnriYRrDYs1g';
var SPA_CLIENT_ID = process.env.SPA_CLIENT_ID || '0oa3b328s8NiXl8BL5d7';
var OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK ? true : false;

module.exports = {
  webServer: {
    port: 8080,
    oidc: {
      clientId: '0oa3b38muyxR2D2375d7',
      clientSecret: 'RzlE1MLe4BW1OhzBD71WgG-4wc8hmnriYRrDYs1g',
      issuer: 'https://dev-15285432.okta.com',
      appBaseUrl: 'http://localhost:3000/authorization-code/callback',
      scope: 'openid profile email',
      testing: {
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
      }
    },
  },
  resourceServer: {
    port: 8000,
    oidc: {
      clientId: '0oa3b328s8NiXl8BL5d7',
      issuer: 'https://dev-15285432.okta.com',
      testing: {
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
      }
    },
    assertClaims: {
      aud: 'api://default',
      cid: '0oa3b328s8NiXl8BL5d7'
    }
  }	
};
console.log('hello');
