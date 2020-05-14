export const getQueryParamByName = (name, url = null) => {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const getHashByName = (name, url = null) => {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?#]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const getPathname = (index = 0) => {
    let pathArray = window.location.pathname.split("/");
    const paths = pathArray.splice(1, pathArray.length - 1);
    return paths[index];
};

export const isIOS =
    (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream;
