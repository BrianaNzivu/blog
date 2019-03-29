if (self.CavalryLogger) { CavalryLogger.start_js(["FWJE\/"]); }

__d("GraphQLSubscriptionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:GraphQLSubscriptionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:GraphQLSubscriptionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GraphQLSubscriptionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppBackgrounded=function(a){this.$1.app_backgrounded=a;return this};c.setAppState=function(a){this.$1.app_state=a;return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setAttemptCount=function(a){this.$1.attempt_count=a;return this};c.setClientSampleWeight=function(a){this.$1.client_sample_weight=a;return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setDebugData=function(a){this.$1.debug_data=a;return this};c.setDeltaTime=function(a){this.$1.delta_time=a;return this};c.setErrorRecoveryPolicyName=function(a){this.$1.error_recovery_policy_name=a;return this};c.setErrorRetriesEnabled=function(a){this.$1.error_retries_enabled=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExceptionCategory=function(a){this.$1.exception_category=a;return this};c.setExceptionData=function(a){this.$1.exception_data=a;return this};c.setExceptionType=function(a){this.$1.exception_type=a;return this};c.setForceLogContext=function(a){this.$1.force_log_context=a;return this};c.setHandleType=function(a){this.$1.handle_type=a;return this};c.setHeartbeatInterval=function(a){this.$1.heartbeat_interval=a;return this};c.setHeartbeatSequenceID=function(a){this.$1.heartbeat_sequence_id=a;return this};c.setIsemployee=function(a){this.$1.isemployee=a;return this};c.setMechanism=function(a){this.$1.mechanism=a;return this};c.setMqttClientCheckpoint=function(a){this.$1.mqtt_client_checkpoint=a;return this};c.setMqttState=function(a){this.$1.mqtt_state=a;return this};c.setMutationType=function(a){this.$1.mutation_type=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setPublishCluster=function(a){this.$1.publish_cluster=a;return this};c.setPublishID=function(a){this.$1.publish_id=a;return this};c.setPublishTimeMs=function(a){this.$1.publish_time_ms=a;return this};c.setQueryID=function(a){this.$1.query_id=a;return this};c.setQueryParams=function(a){this.$1.query_params=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setRawclienttime=function(a){this.$1.rawclienttime=a;return this};c.setReason=function(a){this.$1.reason=a;return this};c.setResult=function(a){this.$1.result=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setSubscriptionCall=function(a){this.$1.subscription_call=a;return this};c.setSubscriptionLeg=function(a){this.$1.subscription_leg=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeSinceLastWindowShownMs=function(a){this.$1.time_since_last_window_shown_ms=a;return this};c.setTopic=function(a){this.$1.topic=a;return this};c.setTopicData=function(a){this.$1.topic_data=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={app_backgrounded:!0,app_state:!0,appid:!0,appversion:!0,attempt_count:!0,client_sample_weight:!0,client_userid:!0,clienttime:!0,debug_data:!0,delta_time:!0,error_recovery_policy_name:!0,error_retries_enabled:!0,event:!0,exception_category:!0,exception_data:!0,exception_type:!0,force_log_context:!0,handle_type:!0,heartbeat_interval:!0,heartbeat_sequence_id:!0,isemployee:!0,mechanism:!0,mqtt_client_checkpoint:!0,mqtt_state:!0,mutation_type:!0,name:!0,publish_cluster:!0,publish_id:!0,publish_time_ms:!0,query_id:!0,query_params:!0,rawclienttime:!0,reason:!0,result:!0,session_id:!0,subscription_call:!0,subscription_leg:!0,time:!0,time_since_last_window_shown_ms:!0,topic:!0,topic_data:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("LinkController",["DataStore","Event","Parent","removeFromArray","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g="@@LinkController",h=[],i=[];c={registerHandler:function(a){h.push(a);return{remove:function(){return b("removeFromArray")(h,a)}}},registerFallbackHandler:function(a){i.push(a);return{remove:function(){return b("removeFromArray")(i,a)}}}};function a(a){__p&&__p();a=a.getTarget();var c=b("Parent").byTag(a,"a");if(!(c instanceof HTMLAnchorElement))return;var d=k(c);if(!d||m(a)||b("DataStore").get(c,g)||d.endsWith("#"))return;a=b("Event").listen(c,"click",function(a){b("trackReferrer")(c,d),!c.rel&&!c.target&&!l(a)&&j(c,a)});b("DataStore").set(c,g,a)}function j(a,b){h.concat(i).every(function(c){if(c(a,b)===!1){b.prevent();return!1}return!0})}function k(a){if(a&&!a.rel){a=a.getAttribute("href");if(a){var b=a.match(/^(\w+):/);if(!b||b[1].match(/^http/i))return a}}return null}function l(a){return a.getModifiers().any||a.which&&a.which!==1}function m(a){return a.nodeName==="INPUT"&&a.type==="file"}b("Event").listen(document.documentElement,"mousedown",a);b("Event").listen(document.documentElement,"keydown",a);e.exports=c}),null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){__p&&__p();f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function g(){var c=a.CavalryLogger;!window.domready&&c&&c.getInstance().setTimeStamp("t_prehooks");j(k.DOMREADY_HOOK);!window.domready&&c&&c.getInstance().setTimeStamp("t_hooks");window.domready=!0;b("Arbiter").inform("uipage_onload",!0,"state")}function h(){j(k.ONLOAD_HOOK),window.loaded=!0}function i(a,c){return b("ErrorUtils").applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function j(a){__p&&__p();var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=i(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,j("onloadhooks")),window.loaded||(window.loaded=!0,j("onafterloadhooks"))}function d(){b("Arbiter").registerCallback(g,[b("PageEvents").BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]),b("Arbiter").registerCallback(h,[b("PageEvents").BIGPIPE_DOMREADY,b("PageEvents").BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]),b("Arbiter").subscribe(b("PageEvents").NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=j("onbeforeleavehooks")||j("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new"),b("Arbiter").subscribe(b("PageEvents").NATIVE_ONUNLOAD,function(a,b){j("onunloadhooks"),j("onafterunloadhooks")},"new")}var k=babelHelpers["extends"]({_domreadyHook:g,_onloadHook:h,runHook:i,runHooks:j,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=k}),null);
__d("PageTransitionPriorities",[],(function(a,b,c,d,e,f){a=5;b=a+1;e.exports={DEFAULT:a,LEFT_NAV:b,SOCIAL_SEARCH_DIALOG:b+1}}),null);
__d("computeRelativeURI",["URI","isEmpty","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();function g(a,b){if(!b)return a;if(b.charAt(0)=="/")return b;var c=a.split("/").slice(0,-1);c[0]!=="";b.split("/").forEach(function(a){a==="."||(a===".."?c.length>1&&(c=c.slice(0,-1)):c.push(a))});return c.join("/")}function a(a,c){__p&&__p();var d=new(b("URI"))(),e=new(b("URI"))(a),f=new(b("URI"))(c);if(f.getDomain()&&!b("isFacebookURI")(f))return c;var h=e;a=["Protocol","Domain","Port","Path","QueryData","Fragment"];a.forEach(function(a){var c=a==="Path"&&h===e;c&&d.setPath(g(e.getPath(),f.getPath()));b("isEmpty")(f["get"+a]())||(h=f);c||d["set"+a](h["get"+a]())});return d}e.exports=a}),null);
__d("getReferrerURI",["ErrorUtils","URI","isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function c(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getReferrerURI();else{var c=b("ErrorUtils").applyWithGuard(function(a){return new(b("URI"))(a)},null,[document.referrer]);return c&&b("isFacebookURI")(c)?c:null}}e.exports=c}),null);
__d("PageTransitionsRegistrar",["invariant","Bootloader","DOMQuery","Form","LinkController","PageTransitionPriorities","Parent","Run","URI","computeRelativeURI","getReferrerURI","goURI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();b("Run").onAfterLoad(function(){b("Bootloader").loadModules(["PageTransitions"],function(a){a&&a._init&&a._init()},"PageTransitionsRegistrar")});var h=[],i=[];d={DELAY_HISTORY:"delay_history_PTR",registerHandler:function(a,c){a!=null||g(0,5202),c=c||b("PageTransitionPriorities").DEFAULT,h[c]||(h[c]=[]),h[c].push(a)},removeHandler:function(a,c){c=c||b("PageTransitionPriorities").DEFAULT;var d=-1;h[c]&&(d=h[c].indexOf(a));d>-1&&h[c].splice(d,1)},registerCompletionCallback:function(a){i.push(a)},getMostRecentURI:l,getReferrerURI:b("getReferrerURI"),_getTransitionHandlers:function(){return h},_getCompletionCallbacks:function(){return i},_resetCompletionCallbacks:function(){i=[]},__onClick:d,__onSubmit:f};var j=null;function c(a){j=a,b("setTimeoutAcrossTransitions")(function(){j=null},0)}function d(a){if(j){if(!a.isDefaultPrevented()){k(j);var c=j.getAttribute("href");c&&b("goURI")(c)}a.kill()}}function k(a){var c=a.getAttribute("href")||"",d=b("computeRelativeURI")(l().getQualifiedURI().toString(),c).toString();c!=d&&a.setAttribute("href",d)}function f(a,c){__p&&__p();c=c;var d=a.getTarget();if(b("Form").getAttribute(d,"rel")||b("Form").getAttribute(d,"target"))return;var e=new(b("URI"))(b("Form").getAttribute(d,"action"));e=b("computeRelativeURI")(l().toString(),e.toString());d.setAttribute("action",e.toString());if((b("Form").getAttribute(d,"method")||"GET").toUpperCase()=="GET"){d=b("Form").serialize(d);c&&(b("DOMQuery").isNodeOfType(c,"input")&&c.type==="submit"||(c=b("Parent").byTag(c,"button")))&&c.name&&(d[c.name]=c.value);typeof e==="string"&&(e=new(b("URI"))(e));b("goURI")(e.addQueryData(d));a.kill()}}b("LinkController").registerFallbackHandler(c);function l(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getMostRecentURI();else{var c=b("URI").getRequestURI(!1);c=c.getUnqualifiedURI();var d=new(b("URI"))(c).setFragment(null),e=c.getFragment();e.charAt(0)==="!"&&d.toString()===e.substr(1)&&(c=d);return c}}e.exports=d}),null);
__d("goOrReplace",[],(function(a,b,c,d,e,f){function a(a,b,c){c?a.replace(b):a.href==b?a.reload():a.href=b}e.exports=a}),null);
__d("UFI2RealtimeContext",["React","warning"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(function(){b("warning")(!1,"UFI2RealtimeContext: Using default context. Put an instance of `UFI2RealtimeRoot` in the tree.");return null});e.exports=a}),null);
__d("UFI2RealtimeContainer.react",["React","UFI2RealtimeContext"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext;function a(a){var c=a.children;a=a.subscribe;var d=g(b("UFI2RealtimeContext"));return b("React").createElement(h,{factory:d,subscribe:a},c)}var h=function(b){__p&&__p();babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var c=a.prototype;c.componentDidMount=function(){this.$1||(this.$1=this.props.factory(new i(this.props.subscribe)))};c.componentWillUnmount=function(){this.$1&&(this.$1.dispose(),this.$1=null)};c.render=function(){return this.props.children||null};return a}(b("React").Component),i=function(){function a(a){this.$1=a}var b=a.prototype;b.subscribe=function(){this.$2||(this.$2=this.$1())};b.unsubscribe=function(){this.$2&&(this.$2.dispose(),this.$2=null)};return a}();e.exports=a}),null);
__d("UFI2FeedbackSubscriptionTopicProvider",["FBLogger","RelayRTIGraphQLSubscriptionTopicProvider","RelayRuntime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayRuntime").getRequest,h={};function i(a){return function(b){var c;b=(c=(c=b.input)==null?void 0:c.feedback_id)!=null?c:(c=b.input)==null?void 0:c.top_level_feedback_id;c=h[b];return c==null?null:a+c}}function a(a,c){if(typeof a!=="function"){b("FBLogger")("ufi2").warn("Attempted to register a topic string provider foran unknown type of Relay subscription");return}a=g(a);a=a.params.id;a!=null&&(a!=null&&typeof a==="string"&&b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(a,i(c)))}function c(a,b){h[a]=b}e.exports={addSubscriptionTargetIDForFeedbackID:c,registerProvider:a}}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","BanzaiScuba","CSS","Event","getDocumentScrollElement","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o=!1,p={init:function(a){__p&&__p();a=b("queryThenMutateDOM").bind(null,function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){(h!==l||i!==m||j!==n)&&(b("CSS").conditionClass(g,"tinyViewport",h),b("CSS").conditionClass(g,"tinyWidth",i),b("CSS").conditionClass(g,"tinyHeight",j),b("CSS").conditionClass(g,"canHaveFixedElements",!h),p.inform("change",h),b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state"),l=h,m=i,n=j);if(!o){var a=new(b("BanzaiScuba"))("www_tinyview_port",null,{addBrowserFields:!0});a.addInteger("clientWidth",g.clientWidth);a.addInteger("clientHeight",g.clientHeight);a.addNormal("view",h?"tiny":"normal");a.post();o=!0}},"TinyViewport");a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(p,b("ArbiterMixin"));e.exports=p}),null);
__d("enumerate",[],(function(a,b,c,d,e,f){"use strict";e.exports=function(b){return b.FB_enumerate}(a)}),null);
__d("PerfXSharedFields",[],(function(a,b,c,d,e,f){var g={addCommonValues:function(a){navigator&&navigator.hardwareConcurrency!==void 0&&(a.num_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory&&(a.ram_gb=navigator.deviceMemory);navigator&&navigator.connection&&(typeof navigator.connection.downlink==="number"&&(a.downlink_megabits=navigator.connection.downlink),typeof navigator.connection.effectiveType==="string"&&(a.effective_connection_type=navigator.connection.effectiveType),typeof navigator.connection.rtt==="number"&&(a.rtt_ms=navigator.connection.rtt));return a},getCommonData:function(){var a={};g.addCommonValues(a);return a}};e.exports=g}),null);
__d("recoverableViolation",["FBLogger"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("FBLogger")(c).blameToPreviousFrame().mustfix(a)}e.exports=a}),null);