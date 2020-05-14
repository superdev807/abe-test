// This used to be .babelrc. It has to be babel.config.js in order for Jest to work.
// Jest does not like the { modules: false } for @babel/preset-env.
// So, we need a different preset for the test env.
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false
            }
        ],
        "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"],
    env: {
        production: {
            only: ["web"],
            plugins: [
                "lodash",
                "transform-react-remove-prop-types",
                "@babel/plugin-transform-react-inline-elements",
                "@babel/plugin-transform-react-constant-elements"
            ]
        },
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs", "dynamic-import-node"]
        }
    }
};
