webpackJsonp([1],Array(33).concat([function(e,t,n){n(95);var a=n(0)(n(50),n(111),"data-v-2ee2d0a8",null);e.exports=a.exports},function(e,t,n){n(92);var a=n(0)(n(51),n(108),"data-v-0076ebc2",null);e.exports=a.exports},function(e,t,n){n(98);var a=n(0)(n(52),n(114),"data-v-81bf0be4",null);e.exports=a.exports},function(e,t,n){n(93);var a=n(0)(n(57),n(109),"data-v-0699057e",null);e.exports=a.exports},function(e,t,n){"use strict";var a=n(12),s=n(117),i=n(105),r=n.n(i),o=n(107),c=n.n(o);a.a.use(s.a),t.a=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/projects",name:"Projects",component:c.a}]})},function(e,t,n){"use strict";var a=n(12),s=n(4),i=n(43),r=n(42),o=n(48),c=n(47),l=n(46),u=n(45),d=n(44);a.a.use(s.b);var p={workExperience:c.a,educationalBackground:l.a,certificates:u.a,additionalSkills:d.a,repos:[]};t.a=new s.b.Store({state:p,getters:i.a,actions:r.a,mutations:o.a})},,function(e,t,n){n(96);var a=n(0)(n(49),n(112),null,null);e.exports=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),s=n(40),i=n.n(s),r=n(37),o=n(38),c=n(39),l=n.n(c);a.a.use(l.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";var a={fetchRepos:function(e){return fetch("https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc").then(function(e){return e.json()}).then(function(t){return e.commit("SET_REPOS",t.items)}).catch(function(t){return e.commit("API_FAILURE",t)})}};t.a=a},function(e,t,n){"use strict";var a={};t.a=a},function(e,t,n){"use strict";t.a=[{category:"Languages",items:[{name:"German",level:"native speaker"},{name:"English",level:"fluent"},{name:"Spanish",level:"basic knowlodge"}]},{category:"Software engineering",subCategories:[{category:"Frontend",items:["AngularJS","Angular","ReactJS + Redux","Vue.js + Vuex","Bootstrap 3 & 4","Sencha ExtJS","HTML5, JavaScript, CSS3","jQuery","Less","Sass"]},{category:"Backend",items:["PHP","Symfony","Doctrine","Zend Framework 2","C#","ASP.NET MVC","ASP.NET Web API","RESTful Web Services","Entity Framework","MVC"]},{category:"Server",items:["Linux","Windows","MySQL","MS SQL Server","Apache 2","nginx"]},{category:"Other",items:["GIT","SVN","node.js","npm","Bower","Grunt","Gulp","XML","Yaml","JSON","TYPO3 CMS","Wordpress","Jira"]}]}]},function(e,t,n){"use strict";t.a=[{name:"MCP 70-480",description:"Programming in HTML5 with JavaSCript and CSS3",date:new Date(2014,8)}]},function(e,t,n){"use strict";t.a=[{name:"Hochschule für Technik & Wirtschaft",programm:"Applied computer science",location:"Berlin, Germany",startDate:new Date(2016,4),endDate:"present"},{name:"KBS Nordhorn",programm:" IT Management Assistent",location:"Nordhorn, Germany",startDate:new Date(2009,8),endDate:new Date(2011,6)},{name:"Berufskolleg Rheine",programm:"Informations Technischer Assistent",location:"Rheine, Germany",startDate:new Date(2004,8),endDate:new Date(2008,6)},{name:"Realschule Schüttorf",programm:null,location:"Schüttorf, Germany",startDate:new Date(2e3,8),endDate:new Date(2004,6)}]},function(e,t,n){"use strict";t.a=[{employer:"DERICON GmbH",position:"Frontend software engineer (working student)",location:"Berlin, Germany",startDate:new Date(2016,11),endDate:"present",responsibilities:["Extending the exting frontend of a web based software based on AngularJS","Developing a PHP Symfony framework middleware to connect the AngularJS frontend with the systems core REST API"]},{employer:"Working holiday",position:"",location:"mainly in Perth, Australia",startDate:new Date(2014,10),endDate:new Date(2015,12),responsibilities:[]},{employer:"SLH GmbH",position:"Web software engineer",location:"Schüttorf, Germany",startDate:new Date(2014,10),endDate:new Date(2011,9),responsibilities:["Planning and implementing new featuresforthe web based software UWEB2000","Developing a new frontend with Sencha ExtJS","Bug fixing the PHP based business logic","Troubleshooting with customers regarding the software","Consultant and contact person for customers","Implementing features in the 2nd product of the company with ASP.NET MVC + Entity Framework","Working with predefined GIT SCM workflows"]},{employer:"CREAVIVA GmbH & Co. KG",position:"Web software engineer",location:"Rheine, Germany",startDate:new Date(2011,6),endDate:new Date(2011,9),responsibilities:["Managing content and developing new websites based on PHP, MySQL, CSS and JavaScript","Developing websites with the CMS TYPO3 including the creation of new TYPO3-Extension","Internal contact person for IT related issues"]},{employer:"Kortmann Beton GmbH & Co. KG",position:"Apprenticeship: IT Management Assistant",location:"Schüttorf, Germany",startDate:new Date(2009,8),endDate:new Date(2011,6),responsibilities:["Development of the company website","Developing reports for internal company analysis with C#, Crystal Reports, Visual Basic and Microsoft Access"]}]},function(e,t,n){"use strict";var a=n(3),s=n.n(a),i=n(60),r=n.n(i),o={CLEAR_REPOS:function(e,t){e.repos=[]},SET_REPOS:function(e,t){e.repos=[].concat(r()(t))},API_FAILURE:function(e,t){e.apiFailure=s()({},t)}};t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(91),s=(n.n(a),n(102)),i=(n.n(s),n(90)),r=(n.n(i),n(106)),o=n.n(r),c=n(104),l=n.n(c),u=n(36),d=n.n(u),p=n(35),v=n.n(p),_=n(34),f=n.n(_),m=n(33),h=n.n(m);t.default={name:"app",components:{AppNavigation:o.a,AppFooter:l.a,AppWorkExperience:d.a,AppEducationalBackground:v.a,AppCertificates:f.a,AppAdditionalSkills:h.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(4);t.default={name:"app-additional-skills",computed:s()({},n.i(i.a)(["additionalSkills"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(4);t.default={name:"app-certificates",computed:s()({},n.i(i.a)(["certificates"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(4);t.default={name:"app-educational-background",computed:s()({},n.i(i.a)(["educationalBackground"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-footer"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(36),s=n.n(a),i=n(35),r=n.n(i),o=n(34),c=n.n(o),l=n(33),u=n.n(l);t.default={name:"app-home",components:{AppWorkExperience:s.a,AppEducationalBackground:r.a,AppCertificates:c.a,AppAdditionalSkills:u.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=n.n(a);t.default={name:"app-navigation",created:function(){s()(document).ready(function(){s()(".button-collapse").sideNav()})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(4);t.default={name:"app-projects",created:function(){this.fetchRepos()},destroyed:function(){this.clearRepos()},computed:s()({},n.i(i.a)(["repos"])),methods:s()({},n.i(i.c)(["fetchRepos"]),n.i(i.d)({clearRepos:"CLEAR_REPOS"})),components:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n.n(a),i=n(4);t.default={name:"app-work-experience",computed:s()({},n.i(i.a)(["workExperience"]))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,n){e.exports=n.p+"static/img/me.c5cccbe.jpg"},function(e,t,n){n(100);var a=n(0)(n(53),n(116),"data-v-c0168a84",null);e.exports=a.exports},function(e,t,n){n(99);var a=n(0)(n(54),n(115),"data-v-a14b827c",null);e.exports=a.exports},function(e,t,n){n(97);var a=n(0)(n(55),n(113),"data-v-5f8a2d37",null);e.exports=a.exports},function(e,t,n){n(94);var a=n(0)(n(56),n(110),"data-v-144ebf5d",null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),e._l(e.certificates,function(t,a){return n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m3"},[e._v("\n      "+e._s(e._f("date")(t.date,"%Y"))+"\n    ")]),e._v(" "),n("div",{staticClass:"col s12 m9"},[n("strong",[e._v(e._s(t.name)+":")]),e._v(" "),n("span",[e._v(e._s(t.description))])])])})],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Certificates")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Work experience")]),e._v(" "),e._l(e.workExperience,function(t,a){return n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m3"},[n("strong",[n("span",[e._v(e._s(e._f("date")(t.startDate,"%Y/%m")))]),e._v(" "),t.endDate?n("span",[e._v(" - ")]):e._e(),e._v(" "),"string"==typeof t.endDate?n("span",[e._v(e._s(t.endDate))]):e._e(),e._v(" "),t.endDate instanceof Date?n("span",[e._v(e._s(e._f("date")(t.endDate,"%Y/%m")))]):e._e()])]),e._v(" "),n("div",{staticClass:"col s12 m9"},[n("strong",[e._v(e._s(t.employer)+", "+e._s(t.location))]),e._v(" "),t.responsibilities&&t.responsibilities.length>0?n("ul",{staticClass:"browser-default"},e._l(t.responsibilities,function(t,a){return n("li",[e._v(e._s(t))])})):e._e()])])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.repos.length?n("div",{staticClass:"center-align"},[e._m(0)]):e._e(),e._v(" "),e.repos?n("div",[n("h3",[e._v("My Projects on GitHub")]),e._v(" "),n("table",{staticClass:"striped"},[e._m(1),e._v(" "),n("tbody",e._l(e.repos,function(t,a){return n("tr",[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.description))]),e._v(" "),n("td",[e._v(e._s(e._f("date")(t.updated_at,"%Y/%m/%d"))+" ")]),e._v(" "),n("td",[n("a",{attrs:{href:t.html_url}},[n("i",{staticClass:"material-icons"},[e._v("code")])])])])}))])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preloader-wrapper big active"},[n("div",{staticClass:"spinner-layer spinner-blue"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Description")]),e._v(" "),n("th",[e._v("Last updated")]),e._v(" "),n("th",[e._v("Link")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),e._l(e.additionalSkills,function(t,a){return n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m3"},[e._v("\n      "+e._s(t.category)+"\n    ")]),e._v(" "),n("div",{staticClass:"col s12 m9"},[t.items&&t.items.length?n("ul",e._l(t.items,function(t,a){return n("li",[e._v(e._s(t.name)+" ("+e._s(t.level)+")")])})):e._e(),e._v(" "),e._l(t.subCategories,function(t,a){return n("div",[n("div",{staticClass:"section sub-category"},[n("strong",[e._v(e._s(t.category))]),e._v(" "),n("br"),e._v(" "),e._l(t.items,function(a,s){return n("span",[e._v("\n            "+e._s(a)),s<t.items.length-1?n("span",[e._v(", ")]):e._e()])})],2)])})],2)])})],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Additional skills")])])}]}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("app-navigation"),e._v(" "),e._m(0)],1),e._v(" "),n("main",[n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("router-view")],1)])]),e._v(" "),n("app-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section row blue accent-5"},[a("div",{staticClass:"col offset-s4 s4"},[a("img",{staticClass:"circle responsive-img",attrs:{src:n(103),alt:""}})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-fixed"},[n("nav",{staticClass:"blue darken-3 navbar-fixed"},[n("div",{staticClass:"nav-wrapper"},[e._m(0),e._v(" "),n("div",{staticClass:"container"},[n("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Christoph Stach")]),e._v(" "),n("ul",{staticClass:"right hide-on-med-and-down"},[n("router-link",{attrs:{tag:"li","active-class":"active",to:"/",exact:""}},[n("a",[e._v("Curriculum Vitae")])]),e._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/projects",exact:""}},[n("a",[e._v("Projects")])])],1)],1),e._v(" "),n("ul",{staticClass:"side-nav",attrs:{id:"mobile-nav"}},[n("router-link",{attrs:{tag:"li","active-class":"active",to:"/",exact:""}},[n("a",[e._v("Curriculum Vitae")])]),e._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/projects",exact:""}},[n("a",[e._v("Projects")])])],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"mobile-nav"}},[n("i",{staticClass:"material-icons"},[e._v("menu")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),e._l(e.educationalBackground,function(t,a){return n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m3"},[n("strong",[n("span",[e._v(e._s(e._f("date")(t.startDate,"%Y/%m")))]),e._v(" "),t.endDate?n("span",[e._v(" - ")]):e._e(),e._v(" "),"string"==typeof t.endDate?n("span",[e._v(e._s(t.endDate))]):e._e(),e._v(" "),t.endDate instanceof Date?n("span",[e._v(e._s(e._f("date")(t.endDate,"%Y/%m")))]):e._e()])]),e._v(" "),n("div",{staticClass:"col s12 m9"},[n("span",[e._v(e._s(t.name)+", "+e._s(t.location))]),t.programm?n("span",[e._v(": ")]):e._e(),e._v(" "),t.programm?n("span",[e._v(e._s(t.programm))]):e._e()])])})],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Educational background")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-work-experience"),e._v(" "),n("div",{staticClass:"divider"}),e._v(" "),n("app-educational-background"),e._v(" "),n("div",{staticClass:"divider"}),e._v(" "),n("app-certificates"),e._v(" "),n("div",{staticClass:"divider"}),e._v(" "),n("app-additional-skills")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"page-footer blue darken-3"},[n("div",{staticClass:"footer-copyright"},[n("div",{staticClass:"container"},[e._v("\n    © 2017 Christoph Stach\n    "),n("a",{staticClass:"grey-text text-lighten-4 right",attrs:{href:"https://github.com/christophstach"}},[n("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])])])])}]}}]),[41]);
//# sourceMappingURL=app.69db17dcd5b821529d70.js.map