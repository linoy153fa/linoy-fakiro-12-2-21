(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{77:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(42),c=r.n(a),i=r(30),s=r(11),u=r(28),o=r(104),l=r(103),p=r(105),f=r(106),h=r(101),v=r(1);function b(){return Object(v.jsx)("div",{className:"header-container",children:Object(v.jsx)(l.a,{sx:{flexGrow:1},children:Object(v.jsx)(o.a,{position:"static",color:"transparent",children:Object(v.jsxs)(p.a,{className:"flex",children:[Object(v.jsx)(f.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(v.jsx)(u.b,{to:"/",children:"Herolo-Abra WeatherApp"})}),Object(v.jsxs)("div",{className:"header-btns-container flex",children:[Object(v.jsx)(h.a,{color:"inherit",children:Object(v.jsx)(u.c,{to:"/",className:"navlink",exact:!0,children:"Home"})}),Object(v.jsx)(h.a,{color:"inherit",children:Object(v.jsx)(u.c,{to:"/favorites",className:"navlink",children:"Favorites"})})]})]})})})})}var j,d=r(4),O=r.n(d),x=r(7),m=r(14),y=["title","titleId"];function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function k(e,t){var r=e.title,a=e.titleId,c=g(e,y);return n.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),void 0===r?n.createElement("title",{id:a},"search"):r?n.createElement("title",{id:a},r):null,j||(j=n.createElement("path",{d:"M31.715 28.953c0.381 0.381 0.381 0.999 0 1.381l-1.381 1.381c-0.382 0.381-1 0.381-1.381 0l-9.668-9.668c-0.105-0.105-0.175-0.229-0.222-0.361-1.983 1.449-4.418 2.314-7.063 2.314-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12 0 2.645-0.865 5.080-2.314 7.063 0.132 0.047 0.256 0.116 0.361 0.222l9.668 9.668zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-4.418-3.582-8-8-8z"})))}var N=n.forwardRef(k),E=(r.p,{setSearchRes:function(e){return F.apply(this,arguments)},getCurrWeather:function(e){return C.apply(this,arguments)},getForecast:function(e,t){return I.apply(this,arguments)},getCityLocation:function(e,t){return T.apply(this,arguments)}}),S="ODaGA0qdm0LebCLjA1mV0kJkhShCUaEq";function C(){return(C=Object(x.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(S,"&details=false"),e.abrupt("return",new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",t(c));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",n(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(x.a)(O.a.mark((function e(t,r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(S,"&metric=").concat(r),e.abrupt("return",new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,r){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",t(c));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(x.a)(O.a.mark((function e(r,n){var a,c,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(S,"&q=").concat(t),e.next=4,fetch(a);case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,e.abrupt("return",r(i));case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",n(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(x.a)(O.a.mark((function e(t,r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(S,"&q=").concat(t,"%2C%20").concat(r),e.abrupt("return",new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,r){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",t(c));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={query:function(e){var t=JSON.parse(localStorage.getItem(e))||[];return W=t,t},save:function(e,t,r){var n=JSON.parse(localStorage.getItem(e))||[];if(n.some((function(e){return e.cityKey===t})))return;return(W=n).push({cityKey:t,cityName:r}),localStorage.setItem(e,JSON.stringify(W)),W},checkIfSaved:function(e,t){if((JSON.parse(localStorage.getItem(e))||[]).some((function(e){return e.cityKey===t})))return!0},getCurrWeatherByKey:function(e){return _.apply(this,arguments)},removeCity:function(e,t){return K.apply(this,arguments)}},W=[];function _(){return(_=Object(x.a)(O.a.mark((function e(t){var r,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E.getCurrWeather,n=JSON.parse(localStorage.getItem(t))||[],a=(W=n).map(function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cityKey,a=t.cityName,e.next=3,r(n);case 3:return c=e.sent,e.abrupt("return",{currCityWeather:c,cityKey:n,cityName:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(x.a)(O.a.mark((function e(t,r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem(t))||[],a=(W=n).findIndex((function(e){return e.cityKey===r})),W.splice(a,1),localStorage.setItem(t,JSON.stringify(W)),e.abrupt("return",W);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R={query:function(){return A.apply(this,arguments)},addFav:function(e,t){return D.apply(this,arguments)},checkIfFaved:function(e){return V.apply(this,arguments)},getCurrWeather:function(){return B.apply(this,arguments)},getForecast:function(){return J.apply(this,arguments)},removeFav:function(e){return z.apply(this,arguments)}},P="favoriteCities";function A(){return(A=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=M.query(P),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(x.a)(O.a.mark((function e(t,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.save(P,t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.checkIfSaved(P,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.getCurrWeatherByKey(P));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.getForecastByKey(P));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.removeCity(P,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return function(){var e=Object(x.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getCurrWeather();case 3:r=e.sent,t({type:"GET_CURR_WEATHER",currCityWeather:r}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function U(e){return function(){var t=Object(x.a)(O.a.mark((function t(r){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.checkIfFaved(e);case 3:n=t.sent,r({type:"CHECK_IF_FAV",isFaved:n}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function q(e){return function(){var t=Object(x.a)(O.a.mark((function t(r){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.removeFav(e);case 3:n=t.sent,r({type:"REMOVE_FAVORITE",updatedFavorites:n}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function L(e,t){return function(r){try{r({type:"SET_CURR_KEY",city:{cityKey:e,cityName:t}})}catch(n){}}}var H,Y={debounce:function(e,t){var r=arguments,n=this;return function(){clearTimeout(H),H=setTimeout((function(){e.apply(n,r)}),t)}}};function X(e){var t=e.onSetCityKey,r=Object(i.b)(),a=Object(n.useState)([]),c=Object(m.a)(a,2),s=c[0],u=c[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),p=l[0],f=l[1],h=Object(n.useState)("-invisible"),b=Object(m.a)(h,2),j=b[0],d=b[1],y=function(e,n){r(L(e,n)),f(""),t(e,n)};Object(n.useEffect)((function(){s.length>0&&d(""),""===p&&d("-invisible")}),[p,s,j]);return Object(v.jsxs)("div",{className:"search-container",onBlur:function(){setTimeout((function(){f("")}),200)},children:[Object(v.jsxs)("div",{className:"input-container",children:[Object(v.jsx)(N,{className:"search-icon"}),Object(v.jsx)("input",{type:"text",onChange:function(e){e.preventDefault();var t=e.target.value;try{f(t),Y.debounce(Object(x.a)(O.a.mark((function e(){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.setSearchRes(t);case 2:r=e.sent,n=r.slice(0,5),u(n);case 5:case"end":return e.stop()}}),e)}))),1e3)()}catch(r){}},value:p,placeholder:"Search City"})]}),Object(v.jsx)("div",{className:"search-results".concat(j),children:p&&s.map((function(e){return Object(v.jsx)("div",{className:"search-result",onClick:function(){return y(e.Key,e.LocalizedName)},children:e.LocalizedName},e.Key)}))})]})}var Q,Z=r(107),$=r(109),ee=r(108);function te(e){var t,r=e.imgId,n=e.txt;return Object(v.jsxs)(Z.a,{sx:{maxWidth:200},children:[Object(v.jsx)(ee.a,{component:"img",height:"140",image:(t=r,1===(t=t.toString()).length&&(t="0"+t),"https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png"))}),Object(v.jsxs)($.a,{children:[Object(v.jsx)(f.a,{gutterBottom:!0,variant:"h4",component:"div",color:"black",children:n.txt1}),Object(v.jsx)(f.a,{variant:"subtitle2",color:"black",children:n.txt2}),Object(v.jsx)(f.a,{variant:"subtitle2",color:"black",children:n.txt3})]})]})}function re(){return Object(v.jsx)("div",{className:"error",children:Object(v.jsx)("div",{children:"Error! You Have Riched Maximum API Requests"})})}var ne=["title","titleId"];function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ie(e,t){var r=e.title,a=e.titleId,c=ce(e,ne);return n.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),void 0===r?n.createElement("title",{id:a},"heart"):r?n.createElement("title",{id:a},r):null,Q||(Q=n.createElement("path",{d:"M23 2c-2.404 0-4.331 0.863-6.030 2.563-0.001 0.001-0.002 0.002-0.003 0.003h-0.001l-0.966 1.217-0.966-1.143c-0.001-0.001-0.002-0.002-0.003-0.003h-0.001c-1.7-1.701-3.626-2.637-6.030-2.637s-4.664 0.936-6.364 2.636c-1.699 1.7-2.636 3.96-2.636 6.364 0 2.402 0.935 4.662 2.633 6.361l11.947 12.047c0.375 0.379 0.887 0.592 1.42 0.592s1.045-0.213 1.42-0.592l11.946-12.047c1.698-1.699 2.634-3.958 2.634-6.361s-0.937-4.664-2.636-6.364c-1.7-1.7-3.96-2.636-6.364-2.636v0z"})))}var se,ue=n.forwardRef(ie),oe=(r.p,["title","titleId"]);function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function fe(e,t){var r=e.title,a=e.titleId,c=pe(e,oe);return n.createElement("svg",le({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),void 0===r?n.createElement("title",{id:a},"heart2"):r?n.createElement("title",{id:a},r):null,se||(se=n.createElement("path",{d:"M29.193 5.265c-3.629-3.596-9.432-3.671-13.191-0.288-3.76-3.383-9.561-3.308-13.192 0.288-3.741 3.704-3.741 9.709 0 13.415 1.069 1.059 11.053 10.941 11.053 10.941 1.183 1.172 3.096 1.172 4.278 0 0 0 10.932-10.822 11.053-10.941 3.742-3.706 3.742-9.711-0.001-13.415zM27.768 17.268l-11.053 10.941c-0.393 0.391-1.034 0.391-1.425 0l-11.053-10.941c-2.95-2.92-2.95-7.671 0-10.591 2.844-2.815 7.416-2.914 10.409-0.222l1.356 1.22 1.355-1.22c2.994-2.692 7.566-2.594 10.41 0.222 2.95 2.919 2.95 7.67 0.001 10.591zM9.253 7.501c0.277 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.001c-1.794 0-3.249 1.455-3.249 3.249v0.001c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0c0-2.346 1.901-4.247 4.246-4.249 0.002 0 0.002-0.001 0.004-0.001z"})))}var he=n.forwardRef(fe),ve=(r.p,{getDayName:function(e){var t;switch(e=e.substring(0,e.indexOf("T")),new Date(e).getDay()){case 0:t="Sunday";break;case 1:t="Monday";break;case 2:t="Tuesday";break;case 3:t="Wednesday";break;case 4:t="Thursday";break;case 5:t="Friday";break;case 6:t="Saturday"}return t}});var be="215854";function je(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.favoritesModule})).isFave,r=Object(i.c)((function(e){return e.favoritesModule})).currCity,a=Object(n.useState)(),c=Object(m.a)(a,2),s=c[0],u=c[1],o=Object(n.useState)(),l=Object(m.a)(o,2),p=l[0],h=l[1],b=Object(n.useState)(be),j=Object(m.a)(b,2),d=j[0],y=j[1],w=Object(n.useState)(""),g=Object(m.a)(w,2),k=g[0],N=g[1],S=Object(n.useState)(!0),C=Object(m.a)(S,2),I=C[0],F=(C[1],Object(n.useState)(!1)),T=Object(m.a)(F,2),M=T[0],W=T[1];Object(n.useEffect)((function(){r&&(y(r.cityKey),N(r.cityName)),K(d),U(d)}),[d,I,r]),Object(n.useEffect)((function(){_()}),[]);var _=function(){navigator.geolocation.getCurrentPosition(function(){var e=Object(x.a)(O.a.mark((function e(t){var r,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.coords,n=r.latitude,a=r.longitude,e.prev=1,e.next=4,E.getCityLocation(n,a);case 4:c=e.sent,N(c.LocalizedName),y(c.Key),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),W(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())},K=function(){var e=Object(x.a)(O.a.mark((function e(t){var r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t===be&&N("Tel-Aviv"),e.prev=1,e.next=4,E.getCurrWeather(t);case 4:r=e.sent,u(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),W(!0);case 11:return e.prev=11,e.next=14,E.getForecast(t,I);case 14:n=e.sent,h(n),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(11),W(!0);case 21:case"end":return e.stop()}}),e,null,[[1,8],[11,18]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){return{txt1:ve.getDayName(e.Date),txt2:"Min Temp: ".concat(e.Temperature.Maximum.Value," \xb0").concat(e.Temperature.Maximum.Unit),txt3:"Max Temp: ".concat(e.Temperature.Minimum.Value," \xb0").concat(e.Temperature.Minimum.Unit)}};if(M)return Object(v.jsx)(re,{});if(!s||!p)return Object(v.jsx)("div",{children:" loading... "});var A,D=s[0],V=(1===(A=(A=D.WeatherIcon).toString()).length&&(A="0"+A),"https://developer.accuweather.com/sites/default/files/".concat(A,"-s.png")),B=I?D.Temperature.Metric:D.Temperature.Imperial;return Object(v.jsxs)("div",{className:"weather-page-container",children:[Object(v.jsx)(X,{onSetCityKey:function(e,t){y(e),N(t)},setIsError:W}),Object(v.jsx)("div",{className:"weather-container",children:Object(v.jsxs)(f.a,{variant:"h6",component:"div",sx:{flexGrow:1},align:"center",children:[Object(v.jsxs)("div",{className:"top flex",children:[Object(v.jsxs)("div",{className:"curr-temp flex",children:[Object(v.jsx)("img",{className:"curr-weather-img",src:V,alt:""}),Object(v.jsxs)("div",{className:"info col",children:[Object(v.jsx)("span",{className:"city-name",children:k}),Object(v.jsxs)("span",{children:[B.Value," \xb0",B.Unit]})]})]}),Object(v.jsxs)("button",{className:"fav-toggle flex",onClick:function(){t?e(q(d)):R.addFav(d,k),e(U(d))},style:{backgroundColor:"white"},children:[t&&Object(v.jsx)(ue,{className:"heart-icon"}),!t&&Object(v.jsx)(he,{className:"heart-icon"}),Object(v.jsx)(f.a,{variant:"body1",component:"div",sx:{flexGrow:1},align:"center",children:Object(v.jsx)("span",{className:"btn-text",children:t?"Remove From Favorites":"Add To Favorites"})})]})]}),Object(v.jsx)("h2",{className:"weather-txt",children:D.WeatherText}),Object(v.jsx)("div",{className:"forecast-container",children:p.DailyForecasts.map((function(e){return Object(v.jsx)("div",{className:"daily-forecast",children:Object(v.jsx)(te,{imgId:e.Day.Icon,txt:P(e)})},e.EpochDate)}))})]})})]})}var de=function(){return Object(v.jsx)("div",{className:"no_favs",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"No Favorites City To Show"}),Object(v.jsx)(u.b,{to:"/",children:"Back To Main screen"})]})})};function Oe(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.favoritesModule})).currWeather;Object(n.useEffect)((function(){e(G())}),[e]);var r=function(t,r){t.preventDefault(),e(q(r)),e(G())};if(!t||t.length<1)return Object(v.jsx)(de,{});return Object(v.jsxs)("div",{className:"favorites-page-container",children:[Object(v.jsx)("div",{className:"favorites-title",children:Object(v.jsx)(f.a,{variant:"h6",component:"div",sx:{flexGrow:1},align:"center",color:"black",children:Object(v.jsx)("h1",{children:"My Favorites"})})}),Object(v.jsx)("div",{className:"favorites-container",children:t.map((function(t){return Object(v.jsx)("div",{className:"fav-city-container",children:Object(v.jsx)(u.b,{to:"/",onClick:function(){return r=t.cityKey,n=t.cityName,void e(L(r,n));var r,n},children:Object(v.jsx)(f.a,{variant:"h6",component:"div",sx:{flexGrow:1},align:"center",children:Object(v.jsx)(te,{txt:(n=t,{txt1:n.cityName,txt2:n.currCityWeather[0].WeatherText}),imgId:t.currCityWeather[0].WeatherIcon,btn:r,data:t})})},t.cityKey)},t.cityKey);var n}))})]})}function xe(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(b,{}),Object(v.jsx)("main",{children:Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"/favorites",children:Object(v.jsx)(Oe,{})}),Object(v.jsx)(s.a,{exact:!0,path:"/",children:Object(v.jsx)(je,{})})]})})]})}r(77);var me=r(37),ye=r(59),we=r(26),ge=r(31),ke={favorites:null,isFave:null,currWeather:null,currCity:null};var Ne=Object(me.b)({favoritesModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_CURR_WEATHER":return Object(ge.a)(Object(ge.a)({},e),{},{currWeather:t.currCityWeather});case"REMOVE_FAVORITE":return Object(ge.a)(Object(ge.a)({},e),{},{favorites:t.updatedFavorites});case"SET_CURR_KEY":return Object(ge.a)(Object(ge.a)({},e),{},{currCity:t.city});case"ADD_FAV_CITY":return Object(ge.a)(Object(ge.a)({},e),{},{favorites:[].concat(Object(we.a)(e.favorites),[t.addedFavCity])});case"CHECK_IF_FAV":return Object(ge.a)(Object(ge.a)({},e),{},{isFave:t.isFaved});default:return e}}}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,Se=Object(me.d)(Ne,Ee(Object(me.a)(ye.a)));c.a.render(Object(v.jsx)(i.a,{store:Se,children:Object(v.jsx)(u.a,{children:Object(v.jsx)(xe,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.3345ff46.chunk.js.map