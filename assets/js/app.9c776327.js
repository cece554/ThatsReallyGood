(function(e){function t(t){for(var i,n,c=t[0],o=t[1],l=t[2],d=0,v=[];d<c.length;d++)n=c[d],s[n]&&v.push(s[n][0]),s[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var i={},s={app:0},r=[];function n(e){return c.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"d975b428"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,i){a=s[e]=[t,i]});t.push(a[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=n(e),r=function(t){o.onerror=o.onload=null,clearTimeout(l);var a=s[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,n=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");n.type=i,n.request=r,a[1](n)}s[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(a,i,function(t){return e[t]}.bind(null,i));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1349:function(e,t,a){e.exports=a.p+"assets/img/Can-We-Kick-it.78ce7f7e.png"},"148f":function(e,t,a){},"1d1b":function(e,t,a){e.exports=a.p+"assets/img/close.988bc3f2.svg"},2272:function(e,t,a){},"24b4":function(e,t,a){"use strict";var i=a("2272"),s=a.n(i);s.a},"2bcb":function(e,t,a){"use strict";var i=a("6b43"),s=a.n(i);s.a},"3e17":function(e,t,a){e.exports=a.p+"assets/img/Eat-Nourish-Flourish.630abf62.png"},4483:function(e,t,a){e.exports=a.p+"assets/img/trg-logo.4f93b428.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main-header"),a("router-view"),a("main-footer")],1)},r=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"header section"},[i("nav",{staticClass:"navbar has-background-transparent",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[i("img",{attrs:{src:a("4483"),width:"300"}})]),e._m(0)],1),e._m(1)])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",attrs:{href:"#offerings"}},[e._v("Offerings")]),a("a",{staticClass:"navbar-item",attrs:{href:"#approach"}},[e._v("Approach")]),a("a",{staticClass:"navbar-item",attrs:{href:"#work"}},[e._v("Work")]),a("a",{staticClass:"navbar-item",attrs:{href:"#contact"}},[e._v("Contact")])])])}],o=(a("ac6a"),{name:"mainHeader"});document.addEventListener("DOMContentLoaded",function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})});var l=o,d=a("2877"),u=Object(d["a"])(l,n,c,!1,null,null,null);u.options.__file="header.vue";var v=u.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"social"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",[a("a",{attrs:{href:"//facebook.com/thatsreallygood"}},[a("i",{staticClass:"fab fa-facebook-square"})])])]),a("div",{staticClass:"level-item"},[a("div",[a("a",{attrs:{href:"//twitter.com/_collettesmith"}},[a("i",{staticClass:"fab fa-twitter"})])])]),a("div",{staticClass:"level-item"},[a("div",[a("a",{attrs:{href:"//dribbble.com/thatsreallygood"}},[a("i",{staticClass:"fab fa-dribbble"})])])]),a("div",{staticClass:"level-item"},[a("div",[a("a",{attrs:{href:"mailto:collette@thatsreallygood.co"}},[a("i",{staticClass:"fas fa-envelope"})])])])])])]),a("div",{staticClass:"copyright"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[e._v("\n        © Copyright 2018 - That's Really Good.\n      ")])])])])}],m={name:"mainFooter"},f=m,g=Object(d["a"])(f,p,h,!1,null,null,null);g.options.__file="footer.vue";var b=g.exports,_={name:"App",components:{mainFooter:b,mainHeader:v}},C=_,k=Object(d["a"])(C,s,r,!1,null,null,null);k.options.__file="App.vue";var y=k.exports,w=a("8c4f"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hero",{attrs:{heroMsg:"We help brands build engaging digital and visual identities"}}),a("div",{staticClass:"main-content"},[a("offerings",{attrs:{title:"we got skills",description:"Using our unique\trange of skills we are able to offer a number of services that can be implemented to help any business get bigger and serve more people"}}),a("approach",{attrs:{title:"our approach",description:"We use a tailored approach that focused on the business goals and the consumers needs"}}),a("projects",{attrs:{title:"selected works",description:"A brief selection of some of our favorite projects form recently"}}),a("contact",{attrs:{title:"let's chat",description:"Our work isn't just about beauty we pride ourselves in the results that we have gotten for out clients and impact that our work has made on their consumers lives"}})],1)],1)},S=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-1"},[e._v(e._s(e.heroMsg))])])])])])},E=[],D={name:"hero",props:["heroMsg"]},O=D,B=(a("24b4"),Object(d["a"])(O,j,E,!1,null,"03713662",null));B.options.__file="hero.vue";var A=B.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"offerings section",attrs:{id:"offerings"}},[a("div",{staticClass:"container section-intro"},[a("h2",{staticClass:"title is-2 is-uppercase"},[e._v(e._s(e.title))]),a("p",{staticClass:"subtitle"},[e._v("\n      "+e._s(e.description)+"\n    ")])]),e._m(0)])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"box offer-box"},[a("h3",{staticClass:"title is-3"},[e._v("Design")]),a("div",{staticClass:"content"},[e._v("\n            Rooted in User Experience principles, we craft beautiful\n            experiences that meet business expectaions and serve users needs.\n            "),a("ul",[a("li",[e._v("Web Design")]),a("li",[e._v("UI/UX")]),a("li",[e._v("Mobile")]),a("li",[e._v("Strategy")])])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"box offer-box"},[a("h3",{staticClass:"title is-3"},[e._v("Development")]),a("div",{staticClass:"content"},[e._v("\n            Using the cutting edge technologies avaliable to us we not only\n            desgin experiences that are beautiful, but ones that work.\n            "),a("ul",[a("li",[e._v("Animation")]),a("li",[e._v("CMS")]),a("li",[e._v("Ecommerce")]),a("li",[e._v("Vue.js")])])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"box offer-box"},[a("h3",{staticClass:"title is-3"},[e._v("Branding")]),a("div",{staticClass:"content"},[e._v("\n            Does your brand tell your story and captivate the attention of you\n            audience, are you willing to risk your brand sending the wrong\n            message\n            "),a("ul",[a("li",[e._v("Brand Idenity")]),a("li",[e._v("Naming")]),a("li",[e._v("logo Design")]),a("li",[e._v("Package / Print Design")])])])])])])])}],P={name:"offerings",props:["description","title"]},F=P,T=Object(d["a"])(F,N,$,!1,null,null,null);T.options.__file="offerings.vue";var W=T.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"approach section",attrs:{id:"approach"}},[a("div",{staticClass:"container section-intro"},[a("h2",{staticClass:"title is-2 is-uppercase"},[e._v(e._s(e.title))]),a("p",{staticClass:"subtitle"},[e._v(e._s(e.description))])]),e._m(0)])},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"box approach-box"},[a("h3",{staticClass:"title is-3"},[e._v("Discovery")]),a("div",{staticClass:"content"},[e._v("\n            Our goal is to make sure we not only understand your business, but\n            the people you serve as well. This is the stage where we really\n            dig into to who everyone is and what their needs are.\n          ")])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"box approach-box"},[a("h3",{staticClass:"title is-3"},[e._v("Strategy")]),a("div",{staticClass:"content"},[e._v("\n            We gather all our reseach from the discovery phase and use it to\n            build a blueprint with the end result being a beautiful and\n            intuitve experience that in return drives growth for your\n            business.\n          ")])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"box approach-box"},[a("h3",{staticClass:"title is-3"},[e._v("Execution")]),a("div",{staticClass:"content"},[e._v("\n            This is where we work our magic. Using the strong foundation built\n            during the earlier stages, we take our talents and create work\n            that has the growth of your business and customers in mind.\n          ")])])])])])}],L={name:"approach",props:["description","title"]},V=L,U=Object(d["a"])(V,q,M,!1,null,null,null);U.options.__file="approach.vue";var z=U.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"work section",attrs:{id:"work"}},[a("div",{staticClass:"container section-intro"},[a("h2",{staticClass:"title is-2 is-uppercase"},[e._v(e._s(e.title))]),a("p",{staticClass:"subtitle"},[e._v("\n      "+e._s(e.description)+"\n    ")])]),a("div",{staticClass:"container"},[a("div",{attrs:{id:"projectSort"}},e._l(e.categories,function(t,i){return a("div",{key:i,staticClass:"form-check form-check-inline"},[a("label",{staticClass:"form-check-label",class:{"has-text-weight-semibold":t.checked}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"category.checked"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(a){var i=t.checked,s=a.target,r=!!s.checked;if(Array.isArray(i)){var n=null,c=e._i(i,n);s.checked?c<0&&e.$set(t,"checked",i.concat([n])):c>-1&&e.$set(t,"checked",i.slice(0,c).concat(i.slice(c+1)))}else e.$set(t,"checked",r)},e.getfilteredData]}}),e._v("\n          "+e._s(t.value)+"\n        ")])])}),0),a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline is-6"},e._l(e.filteredData,function(e,t){return a("work-card",{key:t,attrs:{item:e}})}),1)])])])},K=[],H=(a("7f7f"),a("386d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"column is-one-third"},[i("div",{staticClass:"project"},[i("div",{class:e.item.windowFrame},[i("a",{attrs:{href:e.item.website}},[i("img",{attrs:{src:a("cc1f")("./"+e.item.graphic),alt:""}})])]),i("div",{staticClass:"project-details"},[i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("div",[i("a",{staticClass:"company",attrs:{href:""}},[e._v(e._s(e.item.companyName))])])])]),i("div",{staticClass:"level-right"},[i("div",{staticClass:"level-item"},[i("div",e._l(e.item.category,function(t){return i("a",{key:t.id,staticClass:"work-cat",attrs:{href:""}},[e._v(e._s(t))])}),0)])])])])])])}),R=[],G={props:{item:{type:Object,required:!0}}},J=G,X=(a("2bcb"),Object(d["a"])(J,H,R,!1,null,null,null));X.options.__file="workCard.vue";var Q=X.exports,Y=[{id:"Soliel Sneakerium",companyName:"Soliel Sneakerium",graphic:"soliel-sneakerium.png",category:["Branding"],website:"//dribbble.com/shots/5398891-Soliel-Sneakerium",windowFrame:{imgBorder:!0,browser:!1}},{id:"eat nourish flourish",companyName:"Eat Nourish Flourish",graphic:"Eat-Nourish-Flourish.png",category:["Development","Design"],website:"//eatnourishflourish.com",windowFrame:{imgBorder:!1,browser:!0}},{id:"Timberlight",companyName:"TimberLight Photography",graphic:"TimberLight.png",category:["Branding"],website:"//instagram.com/timberlightphotography",windowFrame:{imgBorder:!0,browser:!1}},{id:"Can we kick it",companyName:"Can we kick it?",graphic:"Can-We-Kick-it.png",category:["Branding"],website:"//dribbble.com/shots/5398878-Can-We-Kick-It",windowFrame:{imgBorder:!0,browser:!1}},{id:"What The Blank",companyName:"What The Blank",graphic:"wtb-card.png",category:["Branding"],website:"//facebook.com/WhatTheBlank/",windowFrame:{imgBorder:!0,browser:!1}},{id:"Method Coffee",companyName:"Method Coffee",graphic:"method.jpg",category:["Branding"],website:"//methoddallas.com/",windowFrame:{imgBorder:!0,browser:!1}}],Z=Y,ee={name:"projects",props:["description","title"],components:{"work-card":Q},computed:{selectedFilters:function(){var e=[],t=this.categories.filter(function(e){return e.checked});return t.forEach(function(t){e.push(t.value)}),e}},data:function(){return{filteredData:[],categories:[{checked:!1,value:"Design"},{checked:!1,value:"Development"},{checked:!1,value:"Branding"}]}},methods:{getfilteredData:function(){var e=this;this.filteredData=Z;var t=[],a=[];this.selectedFilters.length>0&&(t=this.filteredData.filter(function(t){return e.selectedFilters.every(function(e){return t.category.indexOf(e)>=0})}),this.filteredData=t),""!==this.search&&(a=this.filteredData.filter(function(t){return t.name.indexOf(e.search.toLowerCase())>=0}),this.filteredData=a)}},mounted:function(){this.getfilteredData()}},te=ee,ae=(a("98a0"),Object(d["a"])(te,I,K,!1,null,"45ca8f42",null));ae.options.__file="projects.vue";var ie=ae.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"contact section",attrs:{id:"contact"}},[a("div",{staticClass:"container section-intro"},[a("h2",{staticClass:"title is-2 is-uppercase"},[e._v(e._s(e.title))])]),a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[e._v("\n          "+e._s(e.description)+"\n        ")])]),a("inquiry-form")],1)])])},re=[],ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is-two-thirds"},[a("div",{staticClass:"project-inquiry"},[a("form",{attrs:{action:"https://formspree.io/collette@thatsreallygood.co",method:"post"}},[a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-body"},[a("div",{staticClass:"field f mobile-f"},[a("p",{staticClass:"control i-name"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{type:"text",name:"name",placeholder:"Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),a("div",{staticClass:"field f fl"},[a("p",{staticClass:"control i-email"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",name:"_replyto",placeholder:"alex@smith.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-body"},[a("div",{staticClass:"field f ft"},[a("div",{staticClass:"control i-message"},[a("label",{attrs:{for:"textarea"}},[e._v("Scope of Project")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.scope,expression:"scope"}],staticClass:"textarea",attrs:{name:"message",required:""},domProps:{value:e.scope},on:{input:function(t){t.target.composing||(e.scope=t.target.value)}}})])])])]),a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-body checkbox-body"},[a("div",{staticClass:"field f ft"},[a("div",{staticClass:"control i-checkbox checkbox-control"},[a("label",{attrs:{for:"checkbox"}},[e._v("Fields of interest")]),a("div",{staticClass:"input-group"},[a("label",{staticClass:"checkbox-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedService,expression:"checkedService"}],attrs:{type:"checkbox",name:"service",id:"Design",value:"Design"},domProps:{checked:Array.isArray(e.checkedService)?e._i(e.checkedService,"Design")>-1:e.checkedService},on:{change:function(t){var a=e.checkedService,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r="Design",n=e._i(a,r);i.checked?n<0&&(e.checkedService=a.concat([r])):n>-1&&(e.checkedService=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedService=s}}}),a("span",{staticClass:"checkbox"}),e._v(" Design\n                ")]),a("label",{staticClass:"checkbox-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedService,expression:"checkedService"}],attrs:{type:"checkbox",name:"service",id:"Development",value:"Development"},domProps:{checked:Array.isArray(e.checkedService)?e._i(e.checkedService,"Development")>-1:e.checkedService},on:{change:function(t){var a=e.checkedService,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r="Development",n=e._i(a,r);i.checked?n<0&&(e.checkedService=a.concat([r])):n>-1&&(e.checkedService=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedService=s}}}),a("span",{staticClass:"checkbox"}),e._v(" Development\n                ")]),a("label",{staticClass:"checkbox-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedService,expression:"checkedService"}],attrs:{type:"checkbox",name:"service",id:"Branding",value:"Branding"},domProps:{checked:Array.isArray(e.checkedService)?e._i(e.checkedService,"Branding")>-1:e.checkedService},on:{change:function(t){var a=e.checkedService,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r="Branding",n=e._i(a,r);i.checked?n<0&&(e.checkedService=a.concat([r])):n>-1&&(e.checkedService=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedService=s}}}),a("span",{staticClass:"checkbox"}),e._v(" Branding\n                ")])])])])])]),a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-body row-last"},[a("div",{staticClass:"field f ft ff"},[a("div",{staticClass:"control i-slider",attrs:{id:"i-slider"}},[a("label",{attrs:{for:"sliderWithValue"}},[e._v("Budget")]),a("div",{staticClass:"slider-inputs"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sliderValue,expression:"sliderValue"}],staticClass:"slider has-otuput is-fluid",attrs:{id:"sliderWithValue",type:"range",name:"Budget",step:"500",max:"15000"},domProps:{value:e.sliderValue},on:{__r:function(t){e.sliderValue=t.target.value}}}),a("div",{staticClass:"ui-slider-handle"}),a("output",{attrs:{for:"sliderWithValue"}},[e._v("$"+e._s(e.sliderValue))])])])]),e._m(0)])])])])])},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field f ft fl"},[a("div",{staticClass:"control i-submit"},[a("button",{staticClass:"button is-red",attrs:{type:"submit"}},[e._v("Submit")])])])}],oe={name:"inquiryForm",data:function(){return{checkedService:[],name:[],scope:[],email:[],sliderValue:0}}},le=oe,de=(a("aa39"),Object(d["a"])(le,ne,ce,!1,null,null,null));de.options.__file="inquiryForm.vue";var ue=de.exports,ve={name:"contact",props:["description","title"],components:{inquiryForm:ue}},pe=ve,he=Object(d["a"])(pe,se,re,!1,null,null,null);he.options.__file="contact.vue";var me=he.exports,fe={name:"home",components:{hero:A,offerings:W,approach:z,projects:ie,contact:me}},ge=fe,be=Object(d["a"])(ge,x,S,!1,null,null,null);be.options.__file="Home.vue";var _e=be.exports,Ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"lightbox"},[i("router-link",{attrs:{to:"/#work"}},[i("div",{staticClass:"close-container"},[i("img",{attrs:{src:a("1d1b"),alt:""}})])]),e._m(0)],1)},ke=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"hero is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"title is-1"},[e._v("A Really Good Project")]),a("div",{staticClass:"subtitle"},[e._v("\n          this is your sexy subtitle read it or dieeeeee\n        ")])])]),a("div",{staticClass:"gallery"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("img",{attrs:{src:"https://onepagelove.imgix.net/2018/04/opl-big-22.jpg",alt:""}})]),a("div",{staticClass:"column is-half"},[a("img",{attrs:{src:"https://onepagelove.imgix.net/2018/04/opl-big-22.jpg",alt:""}})])])])])])}],ye={name:"project",show:!0},we=ye,xe=(a("6d9b"),Object(d["a"])(we,Ce,ke,!1,null,"0e25b569",null));xe.options.__file="singleProject.vue";var Se=xe.exports;i["a"].use(w["a"]);var je=new w["a"]({mode:"history",base:"/",scrollBehavior:function(e,t,a){return e.hash?{selector:e.hash}:{x:0,y:0}},routes:[{path:"/",name:"home",component:_e},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects/:company",name:"project",component:Se,props:!0},{path:"/work",name:"work",component:ie}]}),Ee=a("2f62");i["a"].use(Ee["a"]);var De=new Ee["a"].Store({state:{},mutations:{},actions:{}});a("e5e2");i["a"].config.productionTip=!1,new i["a"]({router:je,store:De,render:function(e){return e(y)}}).$mount("#app")},6044:function(e,t,a){e.exports=a.p+"assets/img/soliel-sneakerium.0457c5ea.png"},"6b43":function(e,t,a){},"6d9b":function(e,t,a){"use strict";var i=a("b7d4"),s=a.n(i);s.a},"76ee":function(e,t,a){e.exports=a.p+"assets/img/wtb-card.1e99ab6f.png"},"8ec4":function(e,t,a){e.exports=a.p+"assets/img/method.c436e498.jpg"},"939f":function(e,t,a){},"98a0":function(e,t,a){"use strict";var i=a("148f"),s=a.n(i);s.a},aa39:function(e,t,a){"use strict";var i=a("939f"),s=a.n(i);s.a},b7d4:function(e,t,a){},cc1f:function(e,t,a){var i={"./Can-We-Kick-it.png":"1349","./Eat-Nourish-Flourish.png":"3e17","./TimberLight.png":"ed21","./method.jpg":"8ec4","./soliel-sneakerium.png":"6044","./wtb-card.png":"76ee"};function s(e){var t=r(e);return a(t)}function r(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id="cc1f"},e5e2:function(e,t,a){},ed21:function(e,t,a){e.exports=a.p+"assets/img/TimberLight.3414b8f2.png"}});
//# sourceMappingURL=app.9c776327.js.map