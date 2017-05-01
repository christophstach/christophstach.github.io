webpackJsonp([1],{212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(137),s=a(520),i=a.n(s),r=a(232),o=a(235),c=a(518),l=a.n(c),p=a(519),d=a.n(p);n.a.use(d.a,{separator:"-",complement:"Christoph Stach"}),n.a.use(l.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:i.a}})},232:function(e,t,a){"use strict";var n=a(137),s=a(540),i=a(517),r=a.n(i),o=a(528),c=a.n(o),l=a(529),p=a.n(l),d=new s.a({mode:"history",routes:[{path:"/",name:"CurriculumVitae",component:c.a},{path:"/projects/",name:"Projects",component:p.a}]});n.a.use(r.a,{id:"UA-9043429-10",router:d}),n.a.use(s.a),t.a=d},233:function(e,t,a){"use strict";var n=a(214),s=a.n(n),i={fetchRepos:function(e){return s.a.get("https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc").then(function(t){return e.commit("SET_REPOS",t.data.items)}).catch(function(t){return e.commit("API_FAILURE",t)})},sendEmail:function(e,t){console.error("Not implemented yet")}};t.a=i},234:function(e,t,a){"use strict";var n={};t.a=n},235:function(e,t,a){"use strict";var n=a(137),s=a(59),i=a(234),r=a(233),o=a(240),c=a(239),l=a(238),p=a(237),d=a(236);n.a.use(s.a);var u={workExperience:c.a,educationalBackground:l.a,certificates:p.a,additionalSkills:d.a,repos:[]};t.a=new s.a.Store({state:u,getters:i.a,actions:r.a,mutations:o.a})},236:function(e,t,a){"use strict";t.a=[{category:"Languages",items:[{name:"German",level:"native speaker"},{name:"English",level:"fluent"},{name:"Spanish",level:"basic knowlodge"}]},{category:"Software engineering",subCategories:[{category:"Frontend",items:["AngularJS","Angular","ReactJS + Redux","Vue.js + Vuex","Bootstrap 3 & 4","Sencha ExtJS","HTML5, JavaScript, CSS3","jQuery","Less","Sass"]},{category:"Backend",items:["PHP","Symfony","Doctrine","Zend Framework 2","C#","ASP.NET MVC","ASP.NET Web API","RESTful Web Services","Entity Framework","MVC"]},{category:"Server",items:["Linux","Windows","MySQL","MS SQL Server","Apache 2","nginx"]},{category:"Other",items:["GIT","SVN","node.js","npm","Bower","Grunt","Gulp","XML","Yaml","JSON","TYPO3 CMS","Wordpress","Jira"]}]}]},237:function(e,t,a){"use strict";t.a=[{name:"MCP 70-480",description:"Programming in HTML5 with JavaScript and CSS3",date:new Date(2014,8)}]},238:function(e,t,a){"use strict";t.a=[{name:"Hochschule für Technik & Wirtschaft (University of Applied Sciences)",program:"Applied computer science",location:"Berlin, Germany",startDate:new Date(2016,4),endDate:"present"},{name:"KBS Nordhorn",program:"IT Management Assistent",location:"Nordhorn, Germany",startDate:new Date(2009,8),endDate:new Date(2011,6)},{name:"Berufskolleg Rheine",program:"Information Technology Assistant",location:"Rheine, Germany",startDate:new Date(2004,8),endDate:new Date(2008,6)},{name:"Realschule Schüttorf",program:null,location:"Schüttorf, Germany",startDate:new Date(2e3,8),endDate:new Date(2004,6)}]},239:function(e,t,a){"use strict";t.a=[{employer:"DERICON GmbH",position:"Frontend software engineer (working student)",location:"Berlin, Germany",startDate:new Date(2016,11),endDate:"present",responsibilities:["Extending the existing frontend of a web based software based on AngularJS","Developing a PHP Symfony framework middleware to connect the AngularJS frontend with the systems core REST API"]},{employer:"Working holiday",position:"",location:"mainly in Perth, Australia",startDate:new Date(2014,10),endDate:new Date(2015,12),responsibilities:[]},{employer:"SLH GmbH",position:"Web software engineer",location:"Schüttorf, Germany",startDate:new Date(2014,10),endDate:new Date(2011,9),responsibilities:["Planning and implementing new features for the web based software UWEB2000","Developing a new frontend with Sencha ExtJS","Bug fixing the PHP based business logic","Troubleshooting with customers regarding the software","Consultant and contact person for customers","Implementing features in the 2nd product of the company with ASP.NET MVC + Entity Framework","Working with predefined GIT SCM workflows"]},{employer:"CREAVIVA GmbH & Co. KG",position:"Web software engineer",location:"Rheine, Germany",startDate:new Date(2011,6),endDate:new Date(2011,9),responsibilities:["Managing content and developing new websites based on PHP, MySQL, CSS and JavaScript","Developing websites with the CMS TYPO3 including the creation of new TYPO3-Extension","Internal contact person for IT related issues"]},{employer:"Kortmann Beton GmbH & Co. KG",position:"Apprenticeship: IT Management Assistant",location:"Schüttorf, Germany",startDate:new Date(2009,8),endDate:new Date(2011,6),responsibilities:["Development of the company website","Developing reports for internal company analysis with C#, Crystal Reports, Visual Basic and Microsoft Access"]}]},240:function(e,t,a){"use strict";var n=a(254),s=a.n(n),i={CLEAR_REPOS:function(e,t){e.repos=[]},SET_REPOS:function(e,t){e.repos=[].concat(s()(t))},API_FAILURE:function(e,t){e.apiFailure=[].concat(s()(e.apiFailure),[t])}};t.a=i},241:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(252),s=a.n(n),i=a(526),r=a.n(i);t.default={name:"app",head:{meta:[{id:"app-name",name:"application-name",content:"Website of Christoph Stach"},{id:"desc",name:"description",content:"I'm a full stack web engineer who is studying at the university of applied sciences HTW Berlin. My focus is on developing single page frontend applications."}],script:[{type:"application/ld+json",inner:s()({"@Context":"http://schema.org"})}]},components:{AppMaterialLayout:r.a}}},242:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(60),s=a.n(n),i=a(59);t.default={name:"app-additional-skills",computed:s()({},a.i(i.b)(["additionalSkills"]))}},243:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(60),s=a.n(n),i=a(59);t.default={name:"app-certificates",computed:s()({},a.i(i.b)(["certificates"]))}},244:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(60),s=a.n(n),i=a(59);t.default={name:"app-educational-background",computed:s()({},a.i(i.b)(["educationalBackground"]))}},245:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(60),s=a.n(n),i=a(59);t.default={name:"app-work-experience",computed:s()({},a.i(i.b)(["workExperience"]))}},246:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app-footer"}},247:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(470),s=(a.n(n),a(514)),i=(a.n(s),a(469)),r=(a.n(i),a(468)),o=(a.n(r),a(527)),c=a.n(o),l=a(525),p=a.n(l);t.default={name:"app-material-layout",components:{AppNavigation:c.a,AppFooter:p.a}}},248:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(68),s=a.n(n);t.default={name:"app-navigation",created:function(){s()(document).ready(function(){s()(".button-collapse").sideNav({closeOnClick:!0})})}}},249:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(524),s=a.n(n),i=a(523),r=a.n(i),o=a(522),c=a.n(o),l=a(521),p=a.n(l);t.default={name:"app-curriculum-vitea",head:{title:{inner:"Curriculum Vitea"}},components:{AppWorkExperience:s.a,AppEducationalBackground:r.a,AppCertificates:c.a,AppAdditionalSkills:p.a}}},250:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(60),s=a.n(n),i=a(59);t.default={name:"app-projects",head:{title:{inner:"Projects"}},created:function(){this.fetchRepos()},destroyed:function(){this.clearRepos()},computed:s()({},a.i(i.b)(["repos"])),methods:s()({},a.i(i.c)(["fetchRepos"]),a.i(i.d)({clearRepos:"CLEAR_REPOS"}))}},468:function(e,t){},469:function(e,t){},470:function(e,t){},471:function(e,t){},472:function(e,t){},473:function(e,t){},474:function(e,t){},475:function(e,t){},516:function(e,t,a){e.exports=a.p+"img/me.c5cccbe.jpg"},520:function(e,t,a){var n=a(30)(a(241),a(535),null,null);e.exports=n.exports},521:function(e,t,a){a(473);var n=a(30)(a(242),a(537),"data-v-6ca5d0cc",null);e.exports=n.exports},522:function(e,t,a){var n=a(30)(a(243),a(532),null,null);e.exports=n.exports},523:function(e,t,a){var n=a(30)(a(244),a(533),null,null);e.exports=n.exports},524:function(e,t,a){var n=a(30)(a(245),a(534),null,null);e.exports=n.exports},525:function(e,t,a){a(472);var n=a(30)(a(246),a(536),"data-v-62571cf5",null);e.exports=n.exports},526:function(e,t,a){a(471);var n=a(30)(a(247),a(530),null,null);e.exports=n.exports},527:function(e,t,a){a(474);var n=a(30)(a(248),a(538),null,null);e.exports=n.exports},528:function(e,t,a){a(475);var n=a(30)(a(249),a(539),"data-v-f4608012",null);e.exports=n.exports},529:function(e,t,a){var n=a(30)(a(250),a(531),null,null);e.exports=n.exports},530:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app-material-layout"}},[a("header",[a("app-navigation"),e._v(" "),e._m(0)],1),e._v(" "),a("main",[a("router-view")],1),e._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row blue accent-5"},[n("div",{staticClass:"col offset-s4 s4 m2 offset-m5 profile-picture-wrapper"},[n("img",{staticClass:"circle responsive-img profile-picture",attrs:{src:a(516),alt:"Profile"}})])])}]}},531:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-projects"},[a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[0===e.repos.length?a("transition",{attrs:{appear:"",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{key:"preloader",staticClass:"center-align"},[a("div",{staticClass:"preloader-wrapper big active"},[a("div",{staticClass:"spinner-layer spinner-blue"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])])])]):e._e(),e._v(" "),e.repos.length>0?a("transition",{attrs:{appear:"",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{key:"table"},[a("table",{staticClass:"striped"},[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Last updated")]),e._v(" "),a("th",[e._v("Link")])])]),e._v(" "),a("tbody",e._l(e.repos,function(t,n){return a("tr",[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.description))]),e._v(" "),a("td",[e._v(e._s(e._f("date")(t.updated_at,"%Y/%m/%d"))+" ")]),e._v(" "),a("td",[a("a",{attrs:{href:t.html_url,title:"See code"}},[a("i",{staticClass:"material-icons"},[e._v("code")])])])])}))])])]):e._e()],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("h3",[e._v("My Projects on GitHub")]),e._v(" "),a("p",[e._v("\n          Here I am showing some projects I worked on recently.\n          These projects can give you an impression of my skills.\n          The reason for the weird names is, that I'm using a random project generator to make project names\n          more distinct and fun 😉.\n        ")]),e._v(" "),a("div",{staticClass:"divider"})])])}]}},532:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-certificates"},[a("h3",[e._v("Certificates")]),e._v(" "),e._l(e.certificates,function(t){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[a("strong",[e._v(e._s(e._f("date")(t.date,"%Y")))])]),e._v(" "),a("div",{staticClass:"col s12 m9"},[a("strong",[e._v(e._s(t.name)+":")]),e._v(" "),a("span",[e._v(e._s(t.description))])])])})],2)},staticRenderFns:[]}},533:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-educational-background"},[a("h3",[e._v("Educational background")]),e._v(" "),e._l(e.educationalBackground,function(t){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[a("strong",[a("span",[e._v(e._s(e._f("date")(t.startDate,"%Y/%m")))]),e._v(" "),t.endDate?a("span",[e._v(" - ")]):e._e(),e._v(" "),"string"==typeof t.endDate?a("span",[e._v(e._s(t.endDate))]):e._e(),e._v(" "),t.endDate instanceof Date?a("span",[e._v(e._s(e._f("date")(t.endDate,"%Y/%m")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col s12 m9"},[a("span",[e._v(e._s(t.name)+", "+e._s(t.location))]),t.program?a("span",[e._v(": ")]):e._e(),e._v(" "),t.program?a("span",[e._v(e._s(t.program))]):e._e()])])})],2)},staticRenderFns:[]}},534:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-work-experience"},[a("h3",[e._v("Work experience")]),e._v(" "),e._l(e.workExperience,function(t){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[a("strong",[a("span",[e._v(e._s(e._f("date")(t.startDate,"%Y/%m")))]),e._v(" "),t.endDate?a("span",[e._v(" - ")]):e._e(),e._v(" "),"string"==typeof t.endDate?a("span",[e._v(e._s(t.endDate))]):e._e(),e._v(" "),t.endDate instanceof Date?a("span",[e._v(e._s(e._f("date")(t.endDate,"%Y/%m")))]):e._e()])]),e._v(" "),a("div",{staticClass:"col s12 m9"},[a("strong",[e._v(e._s(t.employer)+", "+e._s(t.location))]),e._v(" "),t.responsibilities&&t.responsibilities.length>0?a("ul",{staticClass:"browser-default"},e._l(t.responsibilities,function(t){return a("li",[e._v(e._s(t))])})):e._e()])])})],2)},staticRenderFns:[]}},535:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-material-layout")],1)},staticRenderFns:[]}},536:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"page-footer blue darken-3 app-footer"},[a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"container"},[e._v("\n      © 2017 Christoph Stach\n\n      "),a("div",{staticClass:"right social-nav"},[a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://github.com/christophstach"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),e._v(" "),a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://www.xing.com/profile/Christoph_Stach"}},[a("i",{staticClass:"fa fa-xing",attrs:{"aria-hidden":"true"}})]),e._v(" "),a("a",{staticClass:"grey-text text-lighten-4",attrs:{href:"https://www.linkedin.com/in/christoph-stach-7586b958/"}},[a("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])])])])])}]}},537:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-additional-skills"},[a("h3",[e._v("Additional skills")]),e._v(" "),e._l(e.additionalSkills,function(t){return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m3"},[a("strong",[e._v(e._s(t.category))])]),e._v(" "),a("div",{staticClass:"col s12 m9"},[t.items&&t.items.length?a("ul",e._l(t.items,function(t){return a("li",[e._v(e._s(t.name)+" ("+e._s(t.level)+")")])})):e._e(),e._v(" "),e._l(t.subCategories,function(t){return a("div",[a("div",{staticClass:"section sub-category"},[a("strong",[e._v(e._s(t.category))]),e._v(" "),a("br"),e._v(" "),e._l(t.items,function(n,s){return a("span",[e._v("\n            "+e._s(n)),s<t.items.length-1?a("span",[e._v(", ")]):e._e()])})],2)])})],2)])})],2)},staticRenderFns:[]}},538:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-fixed app-navigation"},[a("nav",{staticClass:"blue darken-3 navbar-fixed"},[a("div",{staticClass:"nav-wrapper"},[e._m(0),e._v(" "),a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-code nav-logo",attrs:{"aria-hidden":"true"}}),e._v("\n          Christoph Stach\n        ")]),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down"},[a("router-link",{attrs:{tag:"li","active-class":"active",to:"/",exact:""}},[a("a",[e._v("Curriculum Vitae")])]),e._v(" "),a("router-link",{attrs:{tag:"li","active-class":"active",to:"/projects/",exact:""}},[a("a",[e._v("Projects")])])],1)],1),e._v(" "),a("ul",{staticClass:"side-nav",attrs:{id:"mobile-nav"}},[e._m(1),e._v(" "),a("router-link",{attrs:{tag:"li","active-class":"active",to:"/",exact:""}},[a("a",[e._v("Curriculum Vitae")])]),e._v(" "),a("router-link",{attrs:{tag:"li","active-class":"active",to:"/projects",exact:""}},[a("a",[e._v("Projects")])])],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"mobile-nav"}},[a("i",{staticClass:"material-icons"},[e._v("menu")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"side-nav-logo-wrapper"},[a("div",{staticClass:"side-nav-logo blue-text text-darken-4 center-align",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-code",attrs:{"aria-hidden":"true"}})])])}]}},539:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-curriculum-vitae"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("app-work-experience"),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("app-educational-background"),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("app-certificates"),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("app-additional-skills")],1)])])])},staticRenderFns:[]}},543:function(e,t,a){a(213),e.exports=a(212)}},[543]);
//# sourceMappingURL=app.74208d7147f697a266ed.js.map