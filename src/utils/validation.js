export const validatePassword = password => {
    const isLong = password && password.length >= 8;
    const hasSpecialChars = password.match(/[!@#$%^&*]/g);
    const hasBothCases = password.match(/[a-z]/g) && password.match(/[A-Z]/g);
    const hasNumber = password.match(/[0-9]/g);

    return { isLong, hasSpecialChars, hasBothCases, hasNumber };
};

export const validate = (item, text) => {
    if (!text) {
        return false;
    }

    const filterText = text.toString().trim();
    if (!filterText.length) {
        return false;
    }
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    switch (item) {
        case "email":
            return emailRegExp.test(filterText);
        case "phone":
            return phoneRegExp.test(filterText);
        default:
            break;
    }
    return true;
};

export const validateAddress = address => {
    if (!address || !address.address1 || !address.city || !address.state || !address.zipCode || !address.country) {
        return false;
    }
    return true;
};
