(this["webpackJsonpasantiagot.github.io"]=this["webpackJsonpasantiagot.github.io"]||[]).push([[0],[,function(e,t,a){"use strict";var n={contact:{name:"Antonio Santiago",currentRole:"Frontend Developer",age:25,location:"Zapopan, Jalisco",company:"Oracle",image:"/images/me.png"},accounts:{github:"https://github.com/asantiagot",linkedin:"https://www.linkedin.com/in/asantiagot/"},projects:{myPortfolio:{name:"Generic Portfolio Generator",summary:"A super easy generator that uses a JSON file to create your portfolio",thumbnail:"images/myPortfolio.png"}},about:{bio:"From Mexico City. My main hobbies are videogames, tennis and coding. I studied Computer Engineering at UNAM, and I joined the Software Engineering industry since 2016."},trajectory:{role_1:{company:"Centro de Investigaciones de Dise\xf1o Industrial",role:"Web UI Developer",description:"Developed the whole UI of an Academic Platform, in conjunction with the Design team of the Faculty",date:{start:new Date("May 2015"),end:new Date("January 2016")}},role_2:{company:"Oracle",role:"Applications Developer",description:"Payables Team. Cloud application.",date:{start:new Date("February 2016"),end:new Date("July 2018")}},role_3:{company:"Oracle",role:"Senior Applications Developer",description:"More freedom when working on projects",date:{start:new Date("July 2018")}}}};t.a=n},,,function(e,t,a){"use strict";(function(e){var n=a(0),c=a.n(n),o=a(5),r=a(1);a(13);function i(e){var t="fab fa-".concat(e.name);return c.a.createElement("a",{href:e.url},c.a.createElement("i",{className:t}))}function l(e){var t=Object.keys(e.accounts);return c.a.createElement("section",{className:"accountBar"},t.map((function(t,a){return c.a.createElement(i,{name:t,key:a,url:e.accounts[t]})})))}function s(e){return c.a.createElement("section",{className:"description"},c.a.createElement("h1",null,e.contact.name),c.a.createElement("h2",null,e.contact.currentRole),c.a.createElement(l,{accounts:e.accounts}))}function m(e){return c.a.createElement("section",{className:"contact"},c.a.createElement(s,{contact:e.contact,accounts:e.accounts}))}function u(e){var t={dateStyle:"short",weekday:"long",year:"numeric",month:"long"},a="".concat(e.startDate.toLocaleDateString("en-US",t))+(e.endDate?" - ".concat(e.endDate.toLocaleDateString("en-US",t)):" - today");return c.a.createElement("section",{className:"trajectoryItem"},c.a.createElement("div",{className:"trajectoryHeading"},c.a.createElement("h3",{className:"company"},e.company),c.a.createElement("h3",null,"(".concat(a,")"))),c.a.createElement("h4",{className:"role"},e.role),c.a.createElement("p",null,e.description))}function p(e){var t=Object.keys(e.trajectory);return t.reverse(),c.a.createElement("section",{className:"trajectory"},c.a.createElement("h2",null,"Trajectory"),t.map((function(t,a){return c.a.createElement(u,{exp:t,key:a,company:e.trajectory[t].company,role:e.trajectory[t].role,description:e.trajectory[t].description,startDate:e.trajectory[t].date.start,endDate:e.trajectory[t].date.end})})))}function y(e){return c.a.createElement("main",null,c.a.createElement(m,{contact:e.content.contact,accounts:e.content.accounts}),c.a.createElement(p,{trajectory:e.content.trajectory}))}t.a=Object(o.hot)(e)((function(){return Object.keys(r.a),c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{content:r.a}))}))}).call(this,a(12)(e))},,function(e,t,a){e.exports=a(7)},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),i=a(4);r.a.render(c.a.createElement(i.a,null),document.getElementById("root"))},,,,,,function(e,t,a){}],[[6,1,2]]]);
//# sourceMappingURL=main.0c866485.chunk.js.map