export const getUserFullname = (firstName, lastName) => {
    const capitalizedFN = firstName ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : null;
    const capitalizedLN = lastName ? lastName.charAt(0).toUpperCase() + lastName.slice(1) : null;

    if (capitalizedFN && capitalizedLN) {
        return `${capitalizedFN} ${capitalizedLN}`;
    }

    return capitalizedFN || capitalizedLN;
};
