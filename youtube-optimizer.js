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
                var overrayAd = document.querySelector("div.ytp-ad-overlay-close-container > button");
                overrayAd.click();
                console.log('overray ad closed');
            } catch (e) {
                ;
            }
            try {
                var skipButton = document.querySelector(".ytp-ad-skip-button");
                skipButton.click();
                console.log('skipable ad closed');
            } catch (e) {
                ;
            }
        }, 2000
    )
})();

