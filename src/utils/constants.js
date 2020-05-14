export const RESTART_ON_REMOUNT = "@@saga-injector/restart-on-remount";
export const DAEMON = "@@saga-injector/daemon";
export const ONCE_TILL_UNMOUNT = "@@saga-injector/once-till-unmount";

// Breakpoints duplicating material-ui breakpoints (https://material-ui.com/customization/breakpoints/)
export const BREAKPOINTS = {
    XS: 0,
    SM: 480,
    MD: 768,
    LG: 992,
    XL: 1410
};

export const APPS_BY_NAME = Object.freeze({
    MV_WEB: { id: 1, name: "myVEGAS on Facebook", isApp: true, color: "#58d3e1" },
    MV_MOBILE: { id: 2, name: "myVEGAS Slots", isApp: true, color: "#0ea8f0" },
    MV_BLACKJACK: { id: 6, name: "myVEGAS Blackjack", isApp: true, color: "#885fd2" },
    KONAMI: { id: 8, name: "my KONAMI Slots", isApp: true, color: "#e2536b" },
    POP_SLOTS: { id: 100, name: "POP! Slots", isApp: true, color: "#f0846a" }
});

export const APPS_BY_ID = Object.freeze({
    1: { GameId: 1, GameName: "myVEGAS on Facebook", offerName: "mvw" },
    2: { GameId: 2, GameName: "myVEGAS Slots", offerName: "mvmx" },
    // 6: { GameId: 6, GameName: "myVEGAS Blackjack" }, // TODO: Blackjack is not for MVP
    8: { GameId: 8, GameName: "my KONAMI Slots", offerName: "konami" },
    100: { GameId: 100, GameName: "POP! Slots", offerName: "pop" }
});

export const CHIP_BUNDLE_LEVELS = Object.freeze({
    1: "white",
    2: "bronze",
    3: "silver",
    4: "gold",
    5: "platinum",
    6: "platinum_gold"
});

export const STORAGE = Object.freeze({
    PATH_ORIGIN: "loyalty-path-origin",
    FAVORITE_APP_ID: "loyalty-favorite-app-id"
});
