"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{60814:function(e,t,n){n.d(t,{ZP:function(){return S}});var a=n(61706),o=n(35025),i=n(9135),r=n(31501),s=n(61079),c=n(42928),h=n(45813),u=n(48879),d=n(44928);n(138);var l=n(34388),p=n(22832),f=n(25829),g=n(19818),m=function(e){(0,p.Z)(n,e);var t=(0,g.Z)(n);function n(e,a,i,r){var s;return(0,o.Z)(this,n),(s=t.call(this,e)).name="UserError",s.userMessage=e,s.status=a||400,s.code=i||null,s.type=r||null,s}return n}((0,f.Z)(Error)),y=function(e){(0,p.Z)(n,e);var t=(0,g.Z)(n);function n(){var e,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An error occurred. If this issue persists please contact us through our help center at help.openai.com.",r=arguments.length>1?arguments[1]:void 0;return(0,o.Z)(this,n),(e=t.call(this,(a=i,a&&(a.startsWith("Rate limit reached for")||a.startsWith("End-user exceeded rate-limit"))?"We're sorry, but we limit the number of requests one user can make in a certain timeframe. Please hang tight and try again in a little while.":a))).name="FatalError",e.type=r||null,e}return n}((0,f.Z)(Error)),T=n(24638),v="https://chat.openai.com/backend-api",_=["cf-ipcountry"],A=function(){function e(){(0,o.Z)(this,e)}return e.setAccessToken=function(e){this.accessToken=e},e.getAuthHeader=function(e){return{Authorization:"Bearer ".concat(e||this.accessToken)}},e.refreshApiKey=function(){var e=this;if(this.apiKeyRefreshing)return this.apiKeyRefreshing;var t=this;return this.apiKeyRefreshing=(0,a.Z)(function(){var e;return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.getSession)()];case 1:return(e=n.sent())&&t.setAccessToken(e.accessToken),[2];case 2:throw Error("Cannot refresh access token outside of browser");case 3:return[2]}})})(),setTimeout(function(){e.apiKeyRefreshing=null},6e4),this.apiKeyRefreshing},e.fetch=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this;return(0,a.Z)(function(){var a,i,c,u,d,l;return(0,h.__generator)(this,function(h){switch(h.label){case 0:return[4,fetch(e,a=(0,r.Z)({credentials:"include"},t))];case 1:if((i=h.sent()).status>=500)throw new y;if(!(i.status>=400))return[3,12];h.label=2;case 2:return h.trys.push([2,4,,5]),[4,i.json()];case 3:return c=(null==(u=h.sent())?void 0:u.detail)||(null==u?void 0:u.error),[3,5];case 4:return d=h.sent(),console.error("Failed to parse error response",d),[3,5];case 5:if(console.error("API error",e,c),!((null==c?void 0:c.code)==="expired_session_key"||(null==c?void 0:c.code)==="token_expired"))return[3,11];h.label=6;case 6:if(h.trys.push([6,9,,10]),n.isRetry)return[3,8];return[4,o.refreshApiKey()];case 7:return h.sent(),[2,o.fetch(e,a,(0,s.Z)((0,r.Z)({},n),{isRetry:!0}))];case 8:return[3,10];case 9:return l=h.sent(),console.error("Failed to refresh expired access token: ".concat(l)),[3,10];case 10:console.error("Refresh access token failed when retrieving",e,c),window._oaiHandleSessionExpired("fetch",JSON.stringify(c)),h.label=11;case 11:if(null==c?void 0:c.type)throw new m((null==c?void 0:c.message)||c,i.status,null==c?void 0:c.code,null==c?void 0:c.type);throw new y;case 12:if(204===i.status)return[2,{}];return[2,i.json()]}})})()},e.getArtifacts=function(){return this.fetch("".concat(v,"/artifacts"),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.createArtifact=function(e){return this.fetch("".concat(v,"/artifacts"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({url:e,contents:"\n"})})},e.upload=function(e,t){var n=new FormData;return n.append("file",t),this.fetch("".concat(v,"/conversation/").concat(e,"/upload"),{method:"POST",headers:(0,r.Z)({},this.getAuthHeader()),body:n})},e.downloadUrl=function(e,t){var n=new URLSearchParams({path:t});return"".concat(v,"/conversation/").concat(e,"/download?").concat(n)},e.checkFile=function(e,t){var n=new URLSearchParams({path:t});return this.fetch("".concat(v,"/conversation/").concat(e,"/check_file?").concat(n),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.sendDocument=function(){return this.fetch("".concat(v,"/private"),{method:"GET",headers:{"Content-Type":"application/json"}})},e.getRetrievalResults=function(e){return this.fetch("".concat(v,"/retrieval/public_data"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({query:e})})},e.getModels=function(e){return this.fetch("".concat(v,"/models"),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.getConversations=function(e,t,n){var a=new URLSearchParams({offset:e.toString(),limit:t.toString()});return this.fetch("".concat(v,"/conversations?").concat(a),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.getConversation=function(e,t,n){var a=n?"".concat(T.env.INTERNAL_API_URL,"/api"):v;return this.fetch("".concat(a,"/conversation/").concat(e),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(t))})},e.generateTitle=function(e,t,n){return this.fetch("".concat(v,"/conversation/gen_title/").concat(e),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({message_id:t,model:n})})},e.patchConversation=function(e,t){return this.fetch("".concat(v,"/conversation/").concat(e),{method:"PATCH",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(t)})},e.deleteConversations=function(){return this.fetch("".concat(v,"/conversations"),{method:"PATCH",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({is_visible:!1})})},e.getLoginLink=function(e){return this.fetch("".concat(v,"/bypass/link"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})},e.publicApiCompletionStream=function(e,t,n){var o=this;return(0,a.Z)(function(){var s,c,d;return(0,h.__generator)(this,function(d){return s=new AbortController,c={action:t.completionType,messages:t.messages.length>0?t.messages:void 0,conversation_id:t.threadId,parent_message_id:t.parentMessageId,model:e.model,plugin_domains:t.threadId?void 0:t.enabledPluginDomains},(0,u.L)("".concat("https://chat.openai.com/backend-api","/conversation"),{method:"POST",credentials:"include",headers:(0,r.Z)({"Content-Type":"application/json"},o.getAuthHeader()),body:JSON.stringify(c),signal:s.signal,openWhenHidden:!0,onopen:function(e){return(0,a.Z)(function(){var t,n,a;return(0,h.__generator)(this,function(o){switch(o.label){case 0:if(t=e.headers.get("content-type")||"",e.ok&&t.includes("text/event-stream"))return[2];if(!t.includes("application/json"))return[3,2];return[4,e.json()];case 1:if(n=o.sent(),console.error(n),a=(null==n?void 0:n.error)||(null==n?void 0:n.detail)){if(e.status>=500)throw new y((null==a?void 0:a.message)||a);throw((null==a?void 0:a.code)==="expired_session_key"||(null==a?void 0:a.code)==="invalid_api_key"||(null==a?void 0:a.code)==="token_expired")&&window._oaiHandleSessionExpired("stream",JSON.stringify(a)),new m((null==a?void 0:a.message)||a,e.status,null==a?void 0:a.code,null==a?void 0:a.type)}o.label=2;case 2:throw new y}})})()},onmessage:function(e){if("[DONE]"===e.data)s.abort(),n({finish_reason:"stop"});else if("ping"===e.event);else try{var t=JSON.parse(e.data);if(t.error)throw new y(t.error.message);n({message:t.message,threadId:t.conversation_id})}catch(a){if((0,l.TV)(a))throw new y(a.message)}},onerror:function(e){throw"Failed to fetch"===e.message&&(e=new y("An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.")),n({err:e}),e}}).catch(function(e){(0,i.Z)(e,m)||(0,i.Z)(e,y)||console.error(e)}),[2,s]})})()},e.runModerationApi=function(e,t,n){return this.fetch("".concat("https://chat.openai.com/backend-api","/moderations"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({input:e,model:"text-moderation-playground",conversation_id:t,message_id:n})})},e.submitMessageFeedback=function(e){return this.fetch("".concat(v,"/conversation/message_feedback"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(e)})},e.getRateLimitCaptchaId=function(e){var t=this;return(0,a.Z)(function(){return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,t.fetch("".concat(v,"/check_data_captcha"),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},t.getAuthHeader(e))})];case 1:return[2,n.sent()]}})})()},e.getRateLimitCaptchaItem=function(e,t){return this.fetch("".concat(v,"/data_captcha/").concat(e),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(t))})},e.getCaptchaDisplayStatus=function(e){return this.fetch("".concat(v,"/crosswalk"),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.submitRateLimitCaptchaResponse=function(e,t){return this.fetch("".concat(v,"/data_captcha/").concat(e.captchaId),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(t)),body:JSON.stringify({payload:e.payload,metadata:e.metadata})})},e.submitCheckoutForm=function(){return this.fetch("".concat(v,"/payments/checkout"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.fetchCustomerPortalUrl=function(e){return this.fetch("".concat(v,"/payments/customer_portal"),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.primeCache=function(e,t){return this.fetch("".concat(v,"/accounts/prime_cache"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(t)),body:JSON.stringify({user_id:e})})},e.getAccountStatus=function(e,t,n){var a=n?"".concat(T.env.INTERNAL_API_URL,"/api"):v,o=(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(e));if(t){var i={},s=!0,h=!1,u=void 0;try{for(var d,l=Object.entries(t)[Symbol.iterator]();!(s=(d=l.next()).done);s=!0){var p=(0,c.Z)(d.value,2),f=p[0],g=p[1];_.includes(f.toLowerCase())&&(i[f]=g)}}catch(m){h=!0,u=m}finally{try{s||null==l.return||l.return()}finally{if(h)throw u}}o=(0,r.Z)({},i,o)}return this.fetch("".concat(a,"/accounts/check"),{method:"GET",headers:o})},e.postAccountStatusWithCustomerSessionId=function(e,t){return this.fetch("".concat(T.env.INTERNAL_API_URL,"/api/payments/checkout_session"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(t)),body:JSON.stringify({stripe_checkout_session_id:e})})},e.getPlugins=function(e){var t=e.offset,n=e.limit,a=e.isInstalled,o=e.accessToken,i={offset:t.toString(),limit:n.toString()};a&&(i.is_installed="true");var s=new URLSearchParams(i);return this.fetch("".concat(v,"/aip?").concat(s),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(o))})},e.getPluginByDomain=function(e){var t=e.domain,n=e.accessToken,a=new URLSearchParams({offset:"0",limit:"1",domains:t});return this.fetch("".concat(v,"/aip?").concat(a),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))}).then(function(e){return 0===e.items.length?null:e.items[0]})},e.setLocalhostPlugin=function(e){var t=e.localhost,n=e.manifest,a=e.openapiSpec,o=e.accessToken;return this.fetch("".concat(v,"/aip/localhost_plugin"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(o)),body:JSON.stringify({localhost:t,manifest:n,openapi_spec:a})})},e.getOrCreatePlugin=function(e){var t=e.domain,n=e.manifestAccessToken,a=e.accessToken;return this.fetch("".concat(v,"/aip"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(a)),body:JSON.stringify({domain:t,manifest_access_token:n})})},e.updatePlugin=function(e){var t=e.domain,n=e.isInstalled,a=e.accessToken;return this.fetch("".concat(v,"/aip/update_user_settings"),{method:"PATCH",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(a)),body:JSON.stringify({domain:t,is_installed:n})})},e.deletePlugin=function(e){var t=e.id,n=e.accessToken;return this.fetch("".concat(v,"/aip/").concat(t),{method:"DELETE",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.setPluginUserHttpToken=function(e){var t=e.id,n=e.userAccessToken,a=e.accessToken;return this.fetch("".concat(v,"/aip/").concat(t,"/auth/user_http"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(a)),body:JSON.stringify({access_token:n})})},e.setPluginServiceHttpToken=function(e){var t=e.id,n=e.serviceAccessToken,a=e.accessToken;return this.fetch("".concat(v,"/aip/").concat(t,"/auth/service_http"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(a)),body:JSON.stringify({access_token:n})})},e.setPluginOauthInfo=function(e){var t=e.id,n=e.clientId,a=e.clientSecret,o=e.accessToken;return this.fetch("".concat(v,"/aip/").concat(t,"/auth/oauth"),{method:"POST",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(o)),body:JSON.stringify({client_id:n,client_secret:a})})},e.pluginOauthCallback=function(e,t,n,a){var o=new URLSearchParams({code:t,redirect_uri:n});return this.fetch("".concat(v,"/aip/").concat(e,"/oauth/callback?").concat(o),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader(a))})},e.getPageMetadata=function(e){var t=e.url;return this.fetch("".concat(v,"/opengraph/tags?url=").concat(t),{method:"GET",headers:(0,r.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e}();A.auth0Client=null;var S=A}}]);