(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),s=(a(5),a(1)),l=a.n(s),o=a(3),u=a(2),m=a(7),p=a.n(m),f="c1d76c16b6fa1b8992f3ef5524dcbf03",h="https://api.openweathermap.org/data/2.5/";function d(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),s=Object(u.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)("Aarhus"),g=Object(u.a)(d,2),v=g[0],b=g[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200!==(a=e.sent).status){e.next=9;break}return e.t0=c,e.next=7,a.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200!==(a=e.sent).status){e.next=9;break}return e.t0=p,e.next=7,a.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()("".concat(h,"forecast?q=").concat(v,"&appid=").concat(f)),e("".concat(h,"weather?q=").concat(v,"&appid=").concat(f))}),[v]),r.a.createElement(r.a.Fragment,null,void 0!==m?r.a.createElement("div",{className:"weather-main"},r.a.createElement(E,{weather:a,location:v,setLocation:b}),r.a.createElement(w,{forecast:m,weather:a})):null)}function E(e){var t=e.weather,a=e.location,n=e.setLocation,c=t.weather[0].description,i=t.main.temp,s=t.weather[0].icon,l="http://openweathermap.org/img/wn/".concat(s,"@2x.png");return r.a.createElement("div",{className:"weather-left"},r.a.createElement("div",{className:"location-search"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),n(e.target.elements.location.value)}(e)}},r.a.createElement("input",{type:"text",placeholder:"Search for places...",name:"location"}),r.a.createElement("input",{type:"submit",value:"Fetch"}))),r.a.createElement("img",{className:"weather-left-icon",src:l,alt:"Weather icon"}),r.a.createElement("div",{className:"weather-left-details"},r.a.createElement("h1",null,(i-273.15).toFixed(1)," C"),r.a.createElement("hr",null),r.a.createElement("b",null,c+" - "),r.a.createElement("span",null,a)),r.a.createElement("img",{className:"weather-left-image",src:p.a,alt:"City"}))}function w(e){var t=e.forecast,a=e.weather,n=t.list.filter((function(e,t){return t%8===0})),c=new Date(1e3*a.sys.sunrise),i=new Date(1e3*a.sys.sunset),s="".concat(c.getUTCHours(),":").concat(c.getUTCMinutes()),l="".concat(i.getUTCHours(),":").concat(i.getUTCMinutes()),o=a.wind.speed,u=a.wind.deg,m=a.main.temp_max,p=a.main.temp_min;return r.a.createElement("div",{className:"weather-right"},r.a.createElement("div",{className:"weather-right-upper-row"},n.map((function(e,t){return r.a.createElement(g,{key:t,day:e.dt_txt.substring(5,10),icon:e.weather[0].icon,temp:e.main.temp})}))),r.a.createElement("h1",null,"Today's hightlights"),r.a.createElement("div",{className:"weather-right-lower-row"},r.a.createElement(v,{title:"Sunrise/Sunset",first:s,second:l}),r.a.createElement(v,{title:"Windspeed",first:o+" m/s",second:u+" deg"}),r.a.createElement(v,{title:"Max/Min temperature",first:(m-273.15).toFixed(1)+" C",second:(p-273.15).toFixed(1)+" C"})))}function g(e){var t=e.day,a=e.icon,n=e.temp;return r.a.createElement("div",{className:"small-card"},r.a.createElement("b",null,t),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a,".png"),alt:"Weather icon"}),r.a.createElement("b",null,(n-273.15).toFixed(1)," C"))}function v(e){var t=e.title,a=e.first,n=e.second;return r.a.createElement("div",{className:"big-card"},r.a.createElement("b",null,t),r.a.createElement("b",null,a),r.a.createElement("b",null,n))}var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},5:function(e,t,a){},7:function(e,t,a){e.exports=a.p+"static/media/city.a26609a9.jpg"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.74c9ae5a.chunk.js.map