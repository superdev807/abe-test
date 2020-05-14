import config from "./config";
import Auth0 from "auth0-js";

class Auth {
    auth0 = new Auth0.WebAuth(config);

    // loginCallback = () => {};
    // logoutCallback = () => {};

    // userProfile = null;
    // authFlag = "isLoggedIn";
    // authStatus = this.isAuthenticated() ? "init_with_auth_flag" : "init_no_auth_flag";
    // idToken = null;
    // idTokenPayload = null;
    // accessToken;

    // localLogin(authResult) {
    //     localStorage.setItem(this.authFlag, true);
    //     this.idToken = authResult.idToken;
    //     this.userProfile = authResult.idTokenPayload;
    //     this.accessToken = authResult.accessToken;
    //     this.loginCallback({ loggedIn: true });
    // }

    // localLogout() {
    //     this.logoutCallback({ loggedIn: false });
    // }

    // getAccessToken() {
    //     return this.accessToken;
    // }

    // isAuthenticated() {
    //     return localStorage.getItem(this.authFlag) === "true";
    // }

    login = ({ email, password }, errorCallback) => {
        this.auth0.login({ realm: "LoyaltyWeb", email, password }, err => {
            if (err) {
                errorCallback && errorCallback();
                window.location = `${process.env.AUTH_CONFIG_REDIRECT_URI}/login#error=${encodeURIComponent(err.description)}`;
                window.location.reload();
            }
        });
    };

    async logout() {
        // this function doesn't take callback, so do it in LogoutPage
        await this.auth0.logout({
            returnTo: `${process.env.AUTH_CONFIG_REDIRECT_URI}/logout`,
            clientID: process.env.AUTH_CONFIG_CLIENT_ID
        });
    }

    getAuth() {
        return this.auth0;
    }
}

const auth = new Auth();

export const authLogin = auth.login;
export default auth;
