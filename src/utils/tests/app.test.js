import { getAppIconImage } from "../app";
import { APPS_BY_ID } from "../constants";

describe("utils/app", () => {
    const imageMap = {
        1: "app_MVW_icon_low.png",
        2: "app_MVM_icon_low.png",
        6: "app_blackjack_icon_low.png",
        8: "app_konami_icon_low.png",
        100: "app_POP_icon_low.png"
    };

    Object.keys(APPS_BY_ID).forEach(appId => {
        it(`should return correct image names for app id ${appId}`, () => {
            expect(getAppIconImage(appId)).toBe(imageMap[appId]);
        });
    });
});
