(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(18),i=n.n(c),s=(n(24),n(25),n(6)),o=n.n(s),m=n(9),u=n(19),l=n(8),d=n(7),p=n.n(d),h=(n(45),n.p+"static/media/sunny.4448adac.gif"),f=n.p+"static/media/ranny.b3b51090.gif",j=n(0),N=function(){var e="CWB-52F9DCE3-BDF3-49E6-81A5-32A4AFDC7460",t=Object(a.useState)({locationName:"NaN",temp:"0",humd:"0",chanceOfRain:"0",description:"NaN",maxT:"",minT:"",hour:"00",min:"00"}),n=Object(l.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetch"),t=s(),n=d(),e.next=5,Promise.all([t,n]);case 5:a=e.sent,r=Object(l.a)(a,2),i=r[0],u=r[1],"NaN"===i.temp&&(i.temp="".concat(u.minT,"~").concat(u.maxT)),c(Object(m.a)(Object(m.a)({},i),u));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var t="https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=".concat(e);return p.a.get(t).then((function(e){var t=e.data.records.location.find((function(e){return"\u6de1\u6c34"===e.locationName})),n=parseFloat(t.weatherElement.find((function(e){return"TEMP"===e.elementName})).elementValue),a=100*parseFloat(t.weatherElement.find((function(e){return"HUMD"===e.elementName})).elementValue),r=t.time.obsTime.split(" ")[1];return{locationName:"\u6de1\u6c34",temp:n=n<-50?"NaN":n,humd:a=a<-50?"NaN":a,hour:r.split(":")[0],min:r.split(":")[1]}}))},d=function(){var t="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=".concat(e);return p.a.get(t).then((function(e){var t=e.data.records.location.find((function(e){return"\u65b0\u5317\u5e02"===e.locationName}));return{description:t.weatherElement.find((function(e){return"Wx"===e.elementName})).time[0].parameter.parameterName,chanceOfRain:t.weatherElement.find((function(e){return"PoP"===e.elementName})).time[0].parameter.parameterName,maxT:t.weatherElement.find((function(e){return"MaxT"===e.elementName})).time[0].parameter.parameterName,minT:t.weatherElement.find((function(e){return"MinT"===e.elementName})).time[0].parameter.parameterName}}))};return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("h3",{children:r.locationName}),Object(j.jsx)("div",{children:r.description}),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("div",{className:"temp",children:[r.temp,Object(j.jsx)("span",{children:"\xb0C"})]}),Object(j.jsx)("img",{src:function(){var e=r.description,t=r.chanceOfRain;return!!(e.includes("\u96e8")||parseInt(t)>80)}()?f:h,alt:"weather icon",className:"weatherIcon"})]}),Object(j.jsxs)("div",{className:"weatherElement",children:[Object(j.jsxs)("div",{children:["\u76f8\u5c0d\u6ebc\u5ea6: ",r.humd,"%"]}),Object(j.jsxs)("div",{children:["\u964d\u96e8\u6a5f\u7387: ",r.chanceOfRain,"%"]})]}),Object(j.jsx)("div",{className:"refresh",children:Object(j.jsxs)("span",{children:["\u6700\u5f8c\u89c0\u6e2c\u6642\u9593: ",r.hour,":",r.min]})})]})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(N,{})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.43b7dad0.chunk.js.map