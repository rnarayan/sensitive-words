'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//https://egghead.io/lessons/javascript-set-up-compilation-of-source-code-using-babel-with-npm-scripts

var sensitiveWords = exports.sensitiveWords = function sensitiveWords(content, words) {
    return content.replace(new RegExp(words.join('|'), 'ig'), '*****');
};