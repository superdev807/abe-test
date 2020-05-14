import { CHIP_BUNDLE_LEVELS } from "~/utils/constants";
import { getImgSrc } from "~/utils/image";

export const getBundleImageUrl = bundleAssetToUse => {
    const chipBundleName = bundleAssetToUse ? CHIP_BUNDLE_LEVELS[bundleAssetToUse] : "none";

    return getImgSrc(`chip-bundles/${chipBundleName}_bundle.png`);
};

export const getBooster = (chipBundle, gameId) => {
    const { currentChipAmount, originalChipAmount, extraValuePercentage } = chipBundle;
    let booster = null;

    if (currentChipAmount && originalChipAmount) {
        switch (gameId) {
            case 2:
                const percent =
                    Math.floor((chipBundle.currentChipAmount - chipBundle.originalChipAmount) / chipBundle.originalChipAmount) * 100;
                booster = `${percent.toLocaleString()}%`;
                break;
            case 100:
                booster = extraValuePercentage ? `${extraValuePercentage}%` : null;
                break;
            default:
                booster = `${Math.floor(currentChipAmount / originalChipAmount)}X`;
                break;
        }
    }
    return booster;
};

export const getBonusString = chipBundle => {
    const bonusArray = [];
    if (chipBundle.loyaltyAmount) {
        bonusArray.push(`Loyalty Points ${chipBundle.loyaltyAmount.toLocaleString()}`);
    }
    if (chipBundle.myVipAmount) {
        bonusArray.push(`myVIP ${chipBundle.myVipAmount.toLocaleString()}`);
    }
    return bonusArray.join(", ");
};
