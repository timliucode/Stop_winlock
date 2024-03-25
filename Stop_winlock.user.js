// ==UserScript==
// @name         防止winlock
// @version      0.1
// @description  阻止視窗鎖定功能
// @source       https://github.com/timliucode/Stop_winlock
// @author       TimLiuCode
// @match        *://e-learning.lhu.edu.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 覆蓋init_winlock函數為空函數
    window.init_winlock = function() {};

    // 或直接移除winlock.js
    var winlockScript = document.querySelector('script[src$="winlock.js"]');
    if(winlockScript) winlockScript.remove();
})();