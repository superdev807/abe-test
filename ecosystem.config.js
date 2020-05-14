module.exports = {
    name: "abe-web",
    script: "serve",
    autorestart: true,
    env: {
        PM2_SERVE_PATH: "./build",
        PM2_SERVE_SPA: "true",
        PM2_SERVE_PORT: 9004
    }
};
