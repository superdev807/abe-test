import { APPS_BY_NAME } from "~/utils/constants";

export const getAppIconImage = appId => {
    appId = parseInt(appId, 10);
    switch (appId) {
        case APPS_BY_NAME.MV_WEB.id:
            return "app_MVW_icon_low.png";
        case APPS_BY_NAME.MV_MOBILE.id:
            return "app_MVM_icon_low.png";
        case APPS_BY_NAME.MV_BLACKJACK.id:
            return "app_blackjack_icon_low.png";
        case APPS_BY_NAME.KONAMI.id:
            return "app_konami_icon_low.png";
        case APPS_BY_NAME.POP_SLOTS.id:
            return "app_POP_icon_low.png";
    }
};

export const getChipImage = appId => {
    appId = parseInt(appId, 10);
    switch (appId) {
        case APPS_BY_NAME.MV_WEB.id:
            return "Chip_MVW.png";
        case APPS_BY_NAME.MV_MOBILE.id:
            return "Chip_MVM.png";
        case APPS_BY_NAME.MV_BLACKJACK.id:
            return "Chip_Blackjack.png";
        case APPS_BY_NAME.KONAMI.id:
            return "Chip_Konami.png";
        case APPS_BY_NAME.POP_SLOTS.id:
            return "Chip_POP.png";
    }
};
