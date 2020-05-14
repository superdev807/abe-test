import { CHIP_BUNDLE_LEVELS } from "~/utils/constants";

export default Object.freeze([
    {
        low: 0,
        high: 10000000,
        bundleAssetToUse: CHIP_BUNDLE_LEVELS[1]
    },
    {
        low: 10000001,
        high: 20000000,
        bundleAssetToUse: CHIP_BUNDLE_LEVELS[2]
    },
    {
        low: 20000001,
        high: 30000000,
        bundleAssetToUse: CHIP_BUNDLE_LEVELS[3]
    },
    {
        low: 30000001,
        high: 50000000,
        bundleAssetToUse: CHIP_BUNDLE_LEVELS[4]
    },
    {
        low: 50000001,
        high: 100000000,
        bundleAssetToUse: CHIP_BUNDLE_LEVELS[5]
    },
    {
        low: 100000001,
        high: 9999999999,
        bundleAssetToUse: CHIP_BUNDLE_LEVELS[6]
    }
]);
