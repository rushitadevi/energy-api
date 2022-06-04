"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const getAuthorizationConfig = (params = null, cookie) => {
    const config = {};
    config.headers = {
        // Cookie: cookie,
        cookie: cookie ? cookie : '',
        'Access-Control-Expose-Headers': '*',
    };
    if (params)
        config.params = params;
    config.timeout = 60000 * 5; // 5 mins
    console.log(config, 'config');
    return config;
};
exports.default = { getAuthorizationConfig };
