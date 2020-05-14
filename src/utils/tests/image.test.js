import { IMGIX_AUTO_FORMAT_COMPRESS } from "~/config/imgix";
import { getImgSrc } from "../image";

describe("utils/image", () => {
    const imgDirectory = "test";

    it(`should return correct image url`, () => {
        expect(getImgSrc(imgDirectory)).toBe(`${process.env.LOYWEB_IMGIX}test?${IMGIX_AUTO_FORMAT_COMPRESS}`);
    });

    it(`should return correct image url with correct height param for small screen`, () => {
        expect(getImgSrc(imgDirectory, true, 20)).toBe(`${process.env.LOYWEB_IMGIX}test?${IMGIX_AUTO_FORMAT_COMPRESS}&h=20`);
    });
});
