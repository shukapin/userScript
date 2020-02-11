// ==UserScript==
// @name         youtube-skip-comercial
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip comercial
// @author       Shukapin
// @match       https://www.youtube.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(
        function () {
            try {
                const adOverlayClose = document.getElementsByClassName("ytp-ad-overlay-close-container");
                adOverlayClose[0].click();
            } catch (e) {
                ;
            }
            try {
                const adSkipButton = document.getElementsByClassName("ytp-adSkipButton-container");
                adSkipButton[0].click();
            } catch (e) {
                ;
            }
        }, 1000
    )
})();
