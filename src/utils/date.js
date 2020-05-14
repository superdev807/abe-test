export const formatDate = givenDate => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return `${months[givenDate.getMonth()]} ${givenDate.getDate()}, ${givenDate.getFullYear()}`;
};
