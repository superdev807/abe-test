const { defaults } = require("jest-config");

module.exports = {
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/**/*.test.{js,jsx}",
        "!src/index.js",
        "!src/styles/global-styles.js",
        "!src/*/*/Loadable.{js,jsx}",
        "!src/containers/App/index.js",
        "!src/config/*.*",
        "!src/utils/*.*"
    ],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 75,
            functions: 80,
            lines: 80
        }
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions, "scss"],
    moduleDirectories: ["node_modules", "src"],

    moduleNameMapper: {
        ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/testing/mocks/cssModule.js",

        ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/testing/mocks/image.js",
        "^~\\/(.*)$": "<rootDir>/src/$1"
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-stub"
    },
    setupFilesAfterEnv: ["<rootDir>/testing/test-bundler.js"],
    setupFiles: ["<rootDir>/testing/dotenvModuleForTest.js"],
    testRegex: "tests/.*\\.test\\.js$",
    snapshotSerializers: []
};
