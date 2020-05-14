import { createMuiTheme } from "@material-ui/core/styles";
import { COLORS } from "~/config/colors";

const muiTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 992,
            xl: 1410
        }
    },
    palette: {
        primary: {
            main: COLORS.PS_ORANGE //TODO: this is not final - use the real main color,
        },
        pink: {
            main: COLORS.MAIN, //TODO: this is not final - use the real main color,
            light: COLORS.MAIN_LIGHT
        },
        orange: {
            main: COLORS.PS_ORANGE,
            dark: COLORS.PS_ORANGE_DARK
        },
        text: {
            primary: "#2b2b2b",
            secondary: "#696a93"
        }
    },
    typography: {
        fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", "sans-serif"`,
        h6: {
            fontSize: "1.3125rem"
        }
    }
});

export default muiTheme;
