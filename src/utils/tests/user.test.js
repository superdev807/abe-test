import { getUserFullname } from "../user";

describe("utils/user", () => {
    it(`should capitalize name`, () => {
        expect(getUserFullname("good", "test")).toBe("Good Test");
    });

    it(`should return either first or last name if only one is given`, () => {
        expect(getUserFullname(undefined, "last")).toBe("Last");
        expect(getUserFullname("first", null)).toBe("First");
    });

    it(`should return null if no name is given`, () => {
        expect(getUserFullname(undefined, undefined)).toBeNull();
    });
});
