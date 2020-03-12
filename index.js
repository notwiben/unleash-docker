'use strict';

const unleash = require('unleash-server');
// const unleash = require('../lib/server-impl.js');

const enableGoogleOauth = require('./google-auth-hook');

unleash
    .start({
        databaseUrl: process.env.DATABASE_URL,
        secret: process.env.SESSION_SECRET,
        adminAuthentication: 'custom',
        preRouterHook: enableGoogleOauth,
    })
    .then(server => {
        console.log(
            `Unleash started on http://localhost:${server.app.get('port')}`
        );
    });