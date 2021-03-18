"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("fs"),r=require("readline"),n=require("events"),o=(e=require("camelcase-keys"))&&"object"==typeof e&&"default"in e?e.default:e;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function i(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var u=Math.PI/180,c=function(e){return e*u},s=function(e,t){var r=c(t-e),n=Math.sin(r/2);return n*n},l=function(e,o){return i(void 0,void 0,void 0,(function(){var i,u;return a(this,(function(a){switch(a.label){case 0:if(!t.existsSync(e))throw new Error("[utils/reader/consumeFilePath] Invalid file path");return i=t.createReadStream(e,"utf8"),(u=r.createInterface({input:i})).on("line",o),[4,n.once(u,"close")];case 1:return a.sent(),[2]}}))}))};exports.getCustomersWithinDistance=function(e,t,r,n,u){return void 0===u&&(u=6371),i(void 0,void 0,void 0,(function(){var i;return a(this,(function(a){switch(a.label){case 0:return i=[],[4,l(e,(function(e){var a=function(e){var t=JSON.parse(e);return o(t)}(e);(function(e,t,r,n,o){if(!e||t===n&&r===o)return 0;var i=c(t),a=c(n),u=s(t,n),l=s(r,o),f=Math.sqrt(u+Math.cos(i)*Math.cos(a)*l);return 2*e*Math.asin(f)})(u,t,r,a.latitude,a.longitude)<n&&i.push(a)}))];case 1:return a.sent(),i.length?(function(e,t){if(!Array.isArray(e)||!t)throw new Error("[utils/insertionSortByObjectProp] Invalid parameters provided");var r;for(r=0;r<e.length;++r){var n=e[r];if("object"==typeof e[r]&&e[r]&&"number"!=typeof e[r][t]&&"string"!=typeof e[r][t])throw new Error("[utils/insertionSortByObjectProp] Invalid array item provided");var o=void 0;for(o=r-1;o>=0&&e[o][t]>n[t];--o)e[o+1]=e[o];e[o+1]=n}}(i,"userId"),[2,i]):[2,i]}}))}))};