(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.weather-box {\n  width: 90%;\n  margin: 0 auto;\n  padding: 0 1rem 1rem;\n}\n\n.loading {\n  position: relative;\n  left: 50%;\n  width: 24rem;\n  height: auto;\n  margin: 0 0 -5rem -12rem;\n  z-index: -1;\n}\n\n.error {\n  margin-top: 4rem;\n  text-align: center;\n}\n\n.country {\n  color: #a1adce;\n  font-size: 80%;\n}\n\n.weather-header {\n  text-align: center;\n  background: linear-gradient(to top left, #4470ff, #7c9dff);\n  color: #fff;\n  padding: 2rem 0 0;\n  border-radius: 10px;\n}\n\n.toggle {\n  margin-top: -1.4rem;\n}\n\n#toggle {\n  text-decoration: none;\n  color: #fff;\n}\n\n.temp {\n  font-size: 3rem;\n  font-weight: 700;\n  letter-spacing: 4px;\n  margin: 2rem 0;\n}\n\n.weather-info {\n  display: flex;\n  flex-wrap: wrap;\n  height: 7rem;\n}\n\n.info-item {\n  padding-top: 0.6rem;\n  width: 50%;\n  margin: 0;\n  border-top: solid 1px #fff;\n  border-right: solid 1px #fff;\n  font-weight: 500;\n}\n\n.search-bar {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2.5rem;\n  text-align: center;\n}\n\ninput {\n  width: 8rem;\n  border: 1px solid #4470ff;\n  border-radius: 3px;\n  padding: 5px;\n  margin-bottom: 1rem;\n}\n\n#search {\n  background-color: #4470ff;\n  border: none;\n  padding: 6px;\n  border-radius: 6px;\n  color: #fff;\n}\n\n#current {\n  text-decoration: none;\n  color: #4470ff;\n}\n\n#search:hover {\n  cursor: pointer;\n  box-shadow: 0 0 8px slategray;\n}\n\n#toggle:hover,\n#current:hover {\n  text-decoration: underline;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=p||(p=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(28);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=async e=>{try{const n=await fetch(e);return await n.json()}catch(e){return!1}},i=(e,n,t)=>{let r;return"current"===e?r=`lat=${n}&lon=${t}`:"city"===e&&(r=void 0===t&&void 0===n?"":void 0===t?`q=${n}`:void 0===n?`q=${t}`:`q=${n},${t}`),`https://api.openweathermap.org/data/2.5/weather?units=metric&${r}&APPID=a0edeea572208c67bc7b570ed1990f65`},a=(e,n)=>{let t;return"Fahrenheit"===e?t=(1.8*parseFloat(n)+32).toFixed(2):"Celsius"===e&&(t=((parseFloat(n)-32)*(5/9)).toFixed(2)),t},c=async e=>{const n=document.querySelector(".weather-box");n.innerHTML='\n  <img class="loading" \n  src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/8ee212dac057d412972e0c8cc164deee.gif?w=545&h=409" />\n  ';const t=await e;if(t&&t.cod<400){const{name:e,sys:{country:r},weather:[{description:o,icon:i}],main:{temp:c,humidity:s,pressure:d,feels_like:l},wind:{speed:u}}=t;n.innerHTML=`\n    <h1>${e}, <span class="country">${r}</span></h1>\n    <div class="weather-header">\n    <img src="http://openweathermap.org/img/wn/${i}@2x.png"/>\n    <h2>${o[0].toUpperCase()}${o.slice(1)}</h2>\n    <p class="temp">${c}°</p>\n    <p class="toggle"><a href="#" id="toggle">Change to Fahrenheit</a></p>\n      <div class="weather-info">\n      <p class="info-item">Wind <br/> ${u} m/s</p>\n        <p class="info-item">Feels like <br/> <span id="feels-like">${l}°</span></p>\n        <p class="info-item">Humidity <br/> ${s}%</p>\n        <p class="info-item">Pressure <br/> ${d} hPa</p>\n        </div>\n        </div>\n        `,(()=>{const e=document.getElementById("toggle");e.addEventListener("click",(()=>{const n=e.innerText.split(" ")[2],t=document.querySelector(".temp"),r=document.getElementById("feels-like");t.innerText=`${a(n,t.innerText)}°`,r.innerText=`${a(n,r.innerText)}°`,e.innerText="Fahrenheit"===n?"Change to Celsius":"Change to Fahrenheit"}))})()}else n.innerHTML='\n    <h4 class="error">Couldn\'t get the weather for that location. Please try again later.</h4>\n    '},s=document.getElementById("search"),d=document.getElementById("current");s.addEventListener("click",(()=>{const e=[...document.querySelectorAll("input")].map((e=>e.value));c(o(i("city",e)))})),d.addEventListener("click",(()=>{navigator.geolocation.getCurrentPosition((e=>{const n=[e.coords.latitude,e.coords.longitude];c(o(i("current",...n)))}))}))})()})();