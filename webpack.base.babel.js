const path = require("path");
const webpack = require("webpack");

module.exports = options => ({
    mode: options.mode,
    entry: options.entry,
    output: Object.assign(
        {
            path: path.resolve(__dirname, "build"),
            publicPath: "/"
        },
        options.output
    ), // Merge with env dependent settings
    optimization: options.optimization,
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                // Preprocess our own .css files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                // for a list of loaders, see https://webpack.js.org/loaders/#styling
                test: /\.s[a|c]ss$/i,
                exclude: /\.module\.(scss|sass)$|node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                // For CSS and SCSS modules
                test: /\.module\.scss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // define environment variables as Sass variables:
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, "src/styles")]
                            }
                        }
                    }
                ]
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css$/,
                include: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: "file-loader"
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // Inline files smaller than 10 kB
                            limit: 10 * 1024
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                enabled: false
                                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                                // Try enabling it in your environment by switching the config to:
                                // enabled: true,
                                // progressive: true,
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    },
    plugins: options.plugins.concat([
        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; Terser will automatically
        // drop any unreachable code.
        new webpack.EnvironmentPlugin({
            NODE_ENV: options.mode
        })
    ]),
    resolve: {
        modules: ["node_modules", "app"],
        extensions: [".js", ".jsx", ".react.js", ".scss"],
        mainFields: ["browser", "jsnext:main", "main"],
        alias: {
            "~": path.resolve(__dirname, "src/")
        }
    },
    devtool: options.devtool,
    target: "web", // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
    devServer: {
        inline: true,
        port: 8100,
        host: "localtest.me",
        historyApiFallback: {
            index: "/"
        },
        disableHostCheck: true,
        https: true
    }
});
