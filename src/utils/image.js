import { IMGIX_AUTO_FORMAT_COMPRESS } from "~/config/imgix";

// must be used inside the body of a function component for the hook (useSelector) to work
export const getImgSrc = (imgDirectory, useSmall = false, smallHeight = 24) => {
    let imgSrc = `${process.env.LOYWEB_IMGIX}${imgDirectory}?${IMGIX_AUTO_FORMAT_COMPRESS}`;
    if (useSmall) {
        imgSrc += `&h=${smallHeight}`;
    }

    return imgSrc;
};

export const getImgFromBlob = blobArray => {
    const blob = new Blob([blobArray]);
    return URL.createObjectURL(blob);
};
