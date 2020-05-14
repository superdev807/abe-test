window.requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

window.cancelAnimFrame = function(requestID) {
    return window.cancelAnimationFrame
        ? window.cancelAnimationFrame(requestID)
        : window.webkitCancelAnimationFrame
        ? window.webkitCancelAnimationFrame(requestID)
        : window.webkitCancelRequestAnimationFrame
        ? window.webkitCancelRequestAnimationFrame(requestID) /* Support for legacy API */
        : window.mozCancelRequestAnimationFrame
        ? window.mozCancelRequestAnimationFrame(requestID)
        : window.oCancelRequestAnimationFrame
        ? window.oCancelRequestAnimationFrame(requestID)
        : window.msCancelRequestAnimationFrame
        ? window.msCancelRequestAnimationFrame(requestID)
        : clearTimeout(requestID);
};
