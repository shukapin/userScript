// ==UserScript==
// @name         copy-kindle-highlight
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Shukapin
// @match        https://read.amazon.co.jp/notebook
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var headerField = document.getElementById('kp-notebook-head').firstElementChild;

    // Create Button
    var createMemoButton = document.createElement('button');
    createMemoButton.type = 'button';
    createMemoButton.textContent = 'Create MEMO';
    headerField.insertBefore( createMemoButton, headerField.firstChild);

    createMemoButton.onclick= function() {
        var outputText = "";

        var title = document.getElementsByTagName("h3")[0].innerText;
        var author =  document.getElementsByTagName("h3")[0].nextElementSibling.innerText;
        outputText += "# " + title + " （" + author + "）\n";

        var highlight = document.getElementsByClassName("kp-notebook-highlight");
        for ( var i=0; i < highlight.length; i++) {
            console.log(highlight[i].innerText);
            outputText += "- " + highlight[i].innerText + "\n";
        }

        // Create text area
        var outputArea = document.createElement('textarea');
        outputArea.value = outputText;
        headerField.insertBefore(outputArea, headerField.firstChild);
    };
})();