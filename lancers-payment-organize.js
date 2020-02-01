// ==UserScript==
// @name         lancers-payment-organize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easy to confirm payment amount
// @author       shukapin
// @match        https://www.lancers.jp/mypage/payment?ref=side_menu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var table = document.getElementsByTagName('tbody')[0];
    var tr = table.getElementsByTagName('tr');

    var preText="";

    for (var i = 0; i < tr.length; i++ ){
        var title = tr[i].getElementsByTagName('td')[2].innerText.split(" ")[0];

        if (title == preText) {
            var income = tr[i].getElementsByTagName('td')[3].innerText.replace("¥","").replace(",", "");
            var preOutcome = tr[i-1].getElementsByTagName('td')[4].innerText.replace("¥","").replace(",", "");
            var amount = Number(income) - Number(preOutcome);
            tr[i-1].getElementsByTagName('td')[4].innerText="---"
            tr[i].getElementsByTagName('td')[3].innerText=String(amount);
        }
        console.log(title);
        console.log("入金: "+income + ", 出金: " + preOutcome + "差し引き")

        //var title = table[i].getElementsByClassName('message-detail').innerText;
       // console.log(title);
            preText=title;
    }
})();