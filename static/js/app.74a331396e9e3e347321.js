webpackJsonp([1],Array(40).concat([function(e,t,a){a(126);var n=a(1)(a(81),a(144),"data-v-2ee2d0a8",null);e.exports=n.exports},function(e,t,a){a(123);var n=a(1)(a(82),a(141),"data-v-0076ebc2",null);e.exports=n.exports},function(e,t,a){a(129);var n=a(1)(a(83),a(147),"data-v-81bf0be4",null);e.exports=n.exports},function(e,t,a){a(124);var n=a(1)(a(88),a(142),"data-v-0699057e",null);e.exports=n.exports},,function(e,t,a){"use strict";var n=a(13),s=a(150),i=a(152),r=a.n(i),o=a(138),c=a.n(o),l=a(140),d=a.n(l),p=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:c.a},{path:"/projects",name:"Projects",component:d.a}]});n.a.use(s.a),n.a.use(r.a,{appName:"christophstach.github.io",trackingId:"UA-9043429-10",appVersion:"1.0.0",vueRouter:p}),t.a=p},function(e,t,a){"use strict";var n=a(13),s=a(4),i=a(74),r=a(73),o=a(79),c=a(78),l=a(77),d=a(76),p=a(75);n.a.use(s.b);var u={workExperience:c.a,educationalBackground:l.a,certificates:d.a,additionalSkills:p.a,repos:[]};t.a=new s.b.Store({state:u,getters:i.a,actions:r.a,mutations:o.a})},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,a){a(127);var n=a(1)(a(80),a(145),null,null);e.exports=n.exports},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),s=a(53),i=a.n(s),r=a(45),o=a(46),c=a(52),l=a.n(c),d=a(51),p=a.n(d),u=a(49),v=(a.n(u),a(50)),f=(a.n(v),a(48)),_=(a.n(f),a(47));a.n(_);n.a.use(l.a),n.a.use(p.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:i.a}})},function(e,t,a){"use strict";var n=a(54),s=a.n(n),i={fetchRepos:function(e){return s.a.get("https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc").then(function(t){return e.commit("SET_REPOS",t.data.items)}).catch(function(t){return e.commit("API_FAILURE",t)})},sendEmail:function(e,t){return s()({method:"post",headers:{"Content-Type":"multipart/form-data",Authorization:"Basic "+btoa("api:key-1d68e548f8bc9c08b6627b84918b4169")},url:"https://api.mailgun.net/v3/sandbox3965e50a822c42e6a9afce440dca60e9.mailgun.org/messages",data:{to:"chrisotph.stach@gmail.com",from:t.email,text:t.messsage}})}};t.a=i},function(e,t,a){"use strict";var n={};t.a=n},function(e,t,a){"use strict";t.a=[{category:"Languages",items:[{name:"German",level:"native speaker"},{name:"English",level:"fluent"},{name:"Spanish",level:"basic knowlodge"}]},{category:"Software engineering",subCategories:[{category:"Frontend",items:["AngularJS","Angular","ReactJS + Redux","Vue.js + Vuex","Bootstrap 3 & 4","Sencha ExtJS","HTML5, JavaScript, CSS3","jQuery","Less","Sass"]},{category:"Backend",items:["PHP","Symfony","Doctrine","Zend Framework 2","C#","ASP.NET MVC","ASP.NET Web API","RESTful Web Services","Entity Framework","MVC"]},{category:"Server",items:["Linux","Windows","MySQL","MS SQL Server","Apache 2","nginx"]},{category:"Other",items:["GIT","SVN","node.js","npm","Bower","Grunt","Gulp","XML","Yaml","JSON","TYPO3 CMS","Wordpress","Jira"]}]}]},function(e,t,a){"use strict";t.a=[{name:"MCP 70-480",description:"Programming in HTML5 with JavaScript and CSS3",date:new Date(2014,8)}]},function(e,t,a){"use strict";t.a=[{name:"Hochschule für Technik & Wirtschaft",programm:"Applied computer science",location:"Berlin, Germany",startDate:new Date(2016,4),endDate:"present"},{name:"KBS Nordhorn",programm:" IT Management Assistent",location:"Nordhorn, Germany",startDate:new Date(2009,8),endDate:new Date(2011,6)},{name:"Berufskolleg Rheine",programm:"Informations Technischer Assistent",location:"Rheine, Germany",startDate:new Date(2004,8),endDate:new Date(2008,6)},{name:"Realschule Schüttorf",programm:null,location:"Schüttorf, Germany",startDate:new Date(2e3,8),endDate:new Date(2004,6)}]},function(e,t,a){"use strict";t.a=[{employer:"DERICON GmbH",position:"Frontend software engineer (working student)",location:"Berlin, Germany",startDate:new Date(2016,11),endDate:"present",responsibilities:["Extending the existing frontend of a web based software based on AngularJS","Developing a PHP Symfony framework middleware to connect the AngularJS frontend with the systems core REST API"]},{employer:"Working holiday",position:"",location:"mainly in Perth, Australia",startDate:new Date(2014,10),endDate:new Date(2015,12),responsibilities:[]},{employer:"SLH GmbH",position:"Web software engineer",location:"Schüttorf, Germany",startDate:new Date(2014,10),endDate:new Date(2011,9),responsibilities:["Planning and implementing new featuresforthe web based software UWEB2000","Developing a new frontend with Sencha ExtJS","Bug fixing the PHP based business logic","Troubleshooting with customers regarding the software","Consultant and contact person for customers","Implementing features in the 2nd product of the company with ASP.NET MVC + Entity Framework","Working with predefined GIT SCM workflows"]},{employer:"CREAVIVA GmbH & Co. KG",position:"Web software engineer",location:"Rheine, Germany",startDate:new Date(2011,6),endDate:new Date(2011,9),responsibilities:["Managing content and developing new websites based on PHP, MySQL, CSS and JavaScript","Developing websites with the CMS TYPO3 including the creation of new TYPO3-Extension","Internal contact person for IT related issues"]},{employer:"Kortmann Beton GmbH & Co. KG",position:"Apprenticeship: IT Management Assistant",location:"Schüttorf, Germany",startDate:new Date(2009,8),endDate:new Date(2011,6),responsibilities:["Development of the company website","Developing reports for internal company analysis with C#, Crystal Reports, Visual Basic and Microsoft Access"]}]},function(e,t,a){"use strict";var n=a(91),s=a.n(n),i={CLEAR_REPOS:function(e,t){e.repos=[]},SET_REPOS:function(e,t){e.repos=[].concat(s()(t))},API_FAILURE:function(e,t){e.apiFailure=[].concat(s()(e.apiFailure),[t])}};t.a=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(139),s=a.n(n),i=a(137),r=a.n(i),o=a(43),c=a.n(o),l=a(42),d=a.n(l),p=a(41),u=a.n(p),v=a(40),f=a.n(v);t.default={name:"app",components:{AppNavigation:s.a,AppFooter:r.a,AppWorkExperience:c.a,AppEducationalBackground:d.a,AppCertificates:u.a,AppAdditionalSkills:f.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=a(4);t.default={name:"app-additional-skills",computed:s()({},a.i(i.a)(["additionalSkills"]))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=a(4);t.default={name:"app-certificates",computed:s()({},a.i(i.a)(["certificates"]))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=a(4);t.default={name:"app-educational-background",computed:s()({},a.i(i.a)(["educationalBackground"]))}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-footer"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(43),s=a.n(n),i=a(42),r=a.n(i),o=a(41),c=a.n(o),l=a(40),d=a.n(l);t.default={name:"app-home",components:{AppWorkExperience:s.a,AppEducationalBackground:r.a,AppCertificates:c.a,AppAdditionalSkills:d.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),s=a.n(n);t.default={name:"app-navigation",created:function(){s()(document).ready(function(){s()(".button-collapse").sideNav({closeOnClick:!0})})}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=a(4);t.default={name:"app-projects",created:function(){this.fetchRepos()},destroyed:function(){this.clearRepos()},computed:s()({},a.i(i.a)(["repos"])),methods:s()({},a.i(i.c)(["fetchRepos"]),a.i(i.d)({clearRepos:"CLEAR_REPOS"})),components:{}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=a(4);t.default={name:"app-work-experience",computed:s()({},a.i(i.a)(["workExperience"]))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,a){e.exports=a.p+"static/img/me.c5cccbe.jpg"},function(e,t,a){a(131);var n=a(1)(a(84),a(149),"data-v-c0168a84",null);e.exports=n.exports},function(e,t,a){a(130);var n=a(1)(a(85),a(148),"data-v-a14b827c",null);e.exports=n.exports},function(e,t,a){a(128);var n=a(1)(a(86),a(146),null,null);e.exports=n.exports},function(e,t,a){a(125);var n=a(1)(a(87),a(143),"data-v-144ebf5d",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-certificates"},[a("h3",[e._v("Certificates")]),e._v(" "),e._l(e.certificates,function(t,n){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[e._v("\n      "+e._s(e._f("date")(t.date,"%Y"))+"\n    ")]),e._v(" "),a("div",{staticClass:"col s12 m9"},[a("strong",[e._v(e._s(t.name)+":")]),e._v(" "),a("span",[e._v(e._s(t.description))])])])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-work-experience"},[a("h3",[e._v("Work experience")]),e._v(" "),e._l(e.workExperience,function(t,n){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[a("strong",[a("span",[e._v(e._s(e._f("date")(t.startDate,"%Y/%m")))]),e._v(" "),t.endDate?a("span",[e._v(" - ")]):e._e(),e._v(" "),"string"==typeof t.endDate?a("span",[e._v(e._s(t.endDate))]):e._e(),e._v(" "),t.endDate instanceof Date?a("span",[e._v(e._s(e._f("date")(t.endDate,"%Y/%m")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col s12 m9"},[a("strong",[e._v(e._s(t.employer)+", "+e._s(t.location))]),e._v(" "),t.responsibilities&&t.responsibilities.length>0?a("ul",{staticClass:"browser-default"},e._l(t.responsibilities,function(t,n){return a("li",[e._v(e._s(t))])})):e._e()])])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-projects"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[0===e.repos.length?a("transition",{attrs:{appear:"",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{key:"preloader",staticClass:"center-align"},[a("div",{staticClass:"preloader-wrapper big active"},[a("div",{staticClass:"spinner-layer spinner-blue"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])])])]):e._e(),e._v(" "),e.repos.length>0?a("transition",{attrs:{appear:"",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{key:"table"},[a("h3",[e._v("My Projects on GitHub")]),e._v(" "),a("p",[e._v("\n            Here I am showing some projects I worked on recently.\n            These projects can give you an impression of my skills.\n            The reason for the weird names is, that I'm using a random project generator to make project names\n            more distinct and fun 😉.\n          ")]),e._v(" "),a("table",{staticClass:"striped"},[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Last updated")]),e._v(" "),a("th",[e._v("Link")])])]),e._v(" "),a("tbody",e._l(e.repos,function(t,n){return a("tr",[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.description))]),e._v(" "),a("td",[e._v(e._s(e._f("date")(t.updated_at,"%Y/%m/%d"))+" ")]),e._v(" "),a("td",[a("a",{attrs:{href:t.html_url,title:"See code"}},[a("i",{staticClass:"material-icons"},[e._v("code")])])])])}))])])]):e._e()],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-additional-skills"},[a("h3",[e._v("Additional skills")]),e._v(" "),e._l(e.additionalSkills,function(t,n){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[e._v("\n      "+e._s(t.category)+"\n    ")]),e._v(" "),a("div",{staticClass:"col s12 m9"},[t.items&&t.items.length?a("ul",e._l(t.items,function(t,n){return a("li",[e._v(e._s(t.name)+" ("+e._s(t.level)+")")])})):e._e(),e._v(" "),e._l(t.subCategories,function(t,n){return a("div",[a("div",{staticClass:"section sub-category"},[a("strong",[e._v(e._s(t.category))]),e._v(" "),a("br"),e._v(" "),e._l(t.items,function(n,s){return a("span",[e._v("\n            "+e._s(n)),s<t.items.length-1?a("span",[e._v(", ")]):e._e()])})],2)])})],2)])})],2)},staticRenderFns:[]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",[a("app-navigation"),e._v(" "),e._m(0)],1),e._v(" "),a("main",[a("div",{staticClass:"container"},[a("router-view")],1)]),e._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row blue accent-5"},[n("div",{staticClass:"col offset-s4 s4 m2 offset-m5 profile-picture-wrapper"},[n("img",{staticClass:"circle responsive-img profile-picture",attrs:{src:a(136),alt:"Profile"}})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-fixed app-navigation"},[a("nav",{staticClass:"blue darken-3 navbar-fixed"},[a("div",{staticClass:"nav-wrapper"},[e._m(0),e._v(" "),a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-code nav-logo",attrs:{"aria-hidden":"true"}}),e._v("\n          Christoph Stach\n        ")]),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down"},[a("router-link",{attrs:{tag:"li","active-class":"active",to:"/",exact:""}},[a("a",[e._v("Curriculum Vitae")])]),e._v(" "),a("router-link",{attrs:{tag:"li","active-class":"active",to:"/projects",exact:""}},[a("a",[e._v("Projects")])])],1)],1),e._v(" "),a("ul",{staticClass:"side-nav",attrs:{id:"mobile-nav"}},[e._m(1),e._v(" "),a("router-link",{attrs:{tag:"li","active-class":"active",to:"/",exact:""}},[a("a",[e._v("Curriculum Vitae")])]),e._v(" "),a("router-link",{attrs:{tag:"li","active-class":"active",to:"/projects",exact:""}},[a("a",[e._v("Projects")])])],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"mobile-nav"}},[a("i",{staticClass:"material-icons"},[e._v("menu")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"side-nav-logo-wrapper"},[a("div",{staticClass:"side-nav-logo blue-text text-darken-4 center-align",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-code",attrs:{"aria-hidden":"true"}})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-educational-background"},[a("h3",[e._v("Educational background")]),e._v(" "),e._l(e.educationalBackground,function(t,n){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[a("strong",[a("span",[e._v(e._s(e._f("date")(t.startDate,"%Y/%m")))]),e._v(" "),t.endDate?a("span",[e._v(" - ")]):e._e(),e._v(" "),"string"==typeof t.endDate?a("span",[e._v(e._s(t.endDate))]):e._e(),e._v(" "),t.endDate instanceof Date?a("span",[e._v(e._s(e._f("date")(t.endDate,"%Y/%m")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col s12 m9"},[a("span",[e._v(e._s(t.name)+", "+e._s(t.location))]),t.programm?a("span",[e._v(": ")]):e._e(),e._v(" "),t.programm?a("span",[e._v(e._s(t.programm))]):e._e()])])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-home"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("app-work-experience"),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("app-educational-background"),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("app-certificates"),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("app-additional-skills")],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"page-footer blue darken-3 app-footer"},[a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"container"},[e._v("\n      © 2017 Christoph Stach\n\n      "),a("div",{staticClass:"right social-nav"},[a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://github.com/christophstach"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),e._v(" "),a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://www.xing.com/profile/Christoph_Stach"}},[a("i",{staticClass:"fa fa-xing",attrs:{"aria-hidden":"true"}})]),e._v(" "),a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://www.linkedin.com/in/christoph-stach-7586b958/"}},[a("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])])])])])}]}}]),[72]);
//# sourceMappingURL=app.74a331396e9e3e347321.js.map