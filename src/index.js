import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import FontFaceObserver from "fontfaceobserver";

import App from "~/containers/App";
import history from "~/utils/history";
import muiTheme from "~/config/muiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import "~/utils/polyfill";
import "~/styles/global-styles";
import "sanitize.css/sanitize.css";
// Load the favicon file
import "!file-loader?name=[name].[ext]!../assets/favicon.ico";

// Observe loading of Montserrat
const montserratObserver = new FontFaceObserver("Montserrat", {});

// When Montserrat is loaded, add a font-family using Montserrat to the body
montserratObserver.load().then(() => {
    document.body.classList.add("fontLoaded");
});

// Create redux store with historys
render(
    <StylesProvider>
        <ThemeProvider theme={muiTheme}>
            <Router history={history}>
                <App />
            </Router>
        </ThemeProvider>
    </StylesProvider>,
    document.getElementById("app")
);
