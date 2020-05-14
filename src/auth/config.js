export default {
    domain: process.env.AUTH_CONFIG_DOMAIN,
    clientID: process.env.AUTH_CONFIG_CLIENT_ID,
    responseType: "token id_token",
    redirectUri: process.env.AUTH_CONFIG_REDIRECT_URI,
    audience: process.env.AUTH_CONFIG_AUDIENCE
};
