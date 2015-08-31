"use strict";define("dummy/acceptance-tests/main",["exports","ember-cli-sri/acceptance-tests/main"],function(e,n){e["default"]=n["default"]}),define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,n,t,i,a){var r=void 0;n["default"].MODEL_FACTORY_INJECTIONS=!0,r=n["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:t["default"]}),i["default"](r,a["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,t){var i=t["default"].APP.name,a=t["default"].APP.version;e["default"]=n["default"].extend({version:a,name:i})}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){e["default"]={name:"App Version",initialize:n["default"](t["default"].APP.name,t["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function i(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var i,a=t["default"].exportApplicationGlobal;i="string"==typeof a?a:n["default"].String.classify(t["default"].modulePrefix),window[i]||(window[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[i]}}))}}e.initialize=i,e["default"]={name:"export-application-global",initialize:i}}),define("dummy/initializers/hide-loading-screen",["exports","dummy/instance-initializers/hide-loading-screen","ember"],function(e,n,t){function i(e,t){o&&n["default"].initialize(e,t)}e.initialize=i;var a=/^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/,r=a.exec(t["default"].VERSION),o=parseInt(r[1],10)<2&&parseInt(r[2],10)<12;e["default"]={name:"hide-loading-screen",initialize:i}}),define("dummy/initializers/wait",["exports"],function(e){function n(){var e=arguments[1]||arguments[0];e.deferReadiness(),setTimeout(function(){e.advanceReadiness()},3e3)}e.initialize=n,e["default"]={name:"wait",initialize:n}}),define("dummy/instance-initializers/hide-loading-screen",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0],t=arguments[1]?arguments[0]:e.container,i=t.lookupFactory?t.lookupFactory("view:application"):e.resolveRegistration("view:application");i=i.reopen({didInsertElement:function(){this._super.apply(this,arguments),Ember.$("."+n["default"]["ember-load"].loadingIndicatorClass).remove()}})}e.initialize=t,e["default"]={name:"hide-loading-screen-instance",initialize:t}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var i=n["default"].Router.extend({location:t["default"].locationType});i.map(function(){}),e["default"]=i}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var i=e.createTextNode("Welcome to Ember");e.appendChild(t,i),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var i=new Array(1);return i[0]=e.createMorphAt(n,2,2,t),i},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/views/application",["exports","ember"],function(e,n){e["default"]=n["default"].View.extend({})}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",i=e["default"].$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(i));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-load",version:"0.0.1+3c4d83cc"});