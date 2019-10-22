
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"347",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Math.floor(2*Math.random())})();"]
    },{
      "function":"__v",
      "vtp_name":"CustomerId",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"customer_id_cookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(,|^)",["escape",["macro",1],9],"\/.test(",["escape",["macro",2],8,16],")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"free_trial_customer_id_cookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(,|^)",["escape",["macro",1],9],"\/.test(",["escape",["macro",4],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_name":"MinutesSinceCreation",
      "vtp_defaultValue":"-1",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\";try{var a=String(",["escape",["macro",6],8,16],");a=a.replace(\",\",\".\");b=Math.floor(a)}catch(c){}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var q=\"UA-48375203-3\",z=\"auto\",F=null;!function(){function h(a){Ta.set(a)}function q(a){}function r(){}function z(){}function F(a){}function Ua(a){}function Va(a){}function t(a,b,c,e){b[a]=function(){try{return e\u0026\u0026h(e),c.apply(this,arguments)}catch(v){throw v;}}}function ca(a,b,c){\"none\"==b\u0026\u0026(b=\"\");var e=[],v=G(a);a=\"__utma\"==a?6:2;for(var d=0;d\u003Cv.length;d++){var g=(\"\"+v[d]).split(\".\");g.length\u003E=a\u0026\u0026e.push({hash:g[0],R:v[d],O:g})}if(0!=e.length)return 1==e.length?e[0]:da(b,e)||da(c,e)||\nda(null,e)||e[0]}function da(a,b){var c;null==a?c=a=1:(c=L(a),a=L(0==a.indexOf(\".\")?a.substring(1):\".\"+a));for(var e=0;e\u003Cb.length;e++)if(b[e].hash==c||b[e].hash==a)return b[e]}function Wa(a){var b=a.get(w);if(a.get(A))return a=a.get(H),c=C(a+b,0),\"_ga\\x3d2.\"+M(c+\".\"+a+\"-\"+b);var c=C(b,0);return\"_ga\\x3d1.\"+M(c+\".\"+b)}function C(a,b){var c=new Date,e=p.navigator,d=e.plugins||[];a=[a,e.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b\u003Cd.length;++b)a.push(d[b].description);\nreturn L(a.join(\".\"))}function sa(a,b){if(b==k.location.hostname)return!1;for(var c=0;c\u003Ca.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0\u003C=b.indexOf(a[c]))return!0;return!1}function L(a){var b,c=1;if(a)for(c=0,b=a.length-1;0\u003C=b;b--){var e=a.charCodeAt(b);c=(c\u003C\u003C6\u0026268435455)+e+(e\u003C\u003C14);e=266338304\u0026c;c=0!=e?c^e\u003E\u003E21:c}return c}var Q=function(a){this.w=a||[]};Q.prototype.set=function(a){this.w[a]=!0};Q.prototype.encode=function(){for(var a=[],b=0;b\u003Cthis.w.length;b++)this.w[b]\u0026\u0026(a[Math.floor(b\/\n6)]^=1\u003C\u003Cb%6);for(b=0;b\u003Ca.length;b++)a[b]=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\".charAt(a[b]||0);return a.join(\"\")+\"~\"};var Ta=new Q,Xa=function(a){return a?a.replace(\/^[\\s\\xa0]+|[\\s\\xa0]+$\/g,\"\"):\"\"},ta=function(){for(var a=p.navigator.userAgent+(k.cookie?k.cookie:\"\")+(k.referrer?k.referrer:\"\"),b=a.length,c=p.history.length;0\u003Cc;)a+=c--^b++;return[R()^2147483647\u0026L(a),Math.round((new Date).getTime()\/1E3)].join(\".\")},Ya=function(){},M=function(a){return encodeURIComponent instanceof\nFunction?encodeURIComponent(a):(h(28),a)},S=function(a,b,c,e){try{a.addEventListener?a.addEventListener(b,c,!!e):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,c)}catch(v){h(27)}},ua=\/^[\\w\\-:\/.?=\u0026%!]+$\/,T=function(){var a=\"\"+k.location.hostname;return 0==a.indexOf(\"www.\")?a.substring(4):a},va=function(a,b){if(1==b.length\u0026\u0026null!=b[0]\u0026\u0026\"object\"==typeof b[0])return b[0];for(var c={},e=Math.min(a.length+1,b.length),d=0;d\u003Ce;d++){if(\"object\"==typeof b[d]){for(var f in b[d])b[d].hasOwnProperty(f)\u0026\u0026(c[f]=b[d][f]);break}d\u003C\na.length\u0026\u0026(c[a[d]]=b[d])}return c},D=function(){this.keys=[];this.values={};this.m={}};D.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[\":\"+a]=b:this.values[\":\"+a]=b};D.prototype.get=function(a){return this.m.hasOwnProperty(\":\"+a)?this.m[\":\"+a]:this.values[\":\"+a]};D.prototype.map=function(a){for(var b=0;b\u003Cthis.keys.length;b++){var c=this.keys[b],e=this.get(c);e\u0026\u0026a(c,e)}};var p=window,k=document,ea=window,G=function(a){var b=[],c=k.cookie.split(\";\");a=new RegExp(\"^\\\\s*\"+a+\"\\x3d\\\\s*(.*?)\\\\s*$\");\nfor(var e=0;e\u003Cc.length;e++){var d=c[e].match(a);d\u0026\u0026b.push(d[1])}return b},U=function(a,b,c,e,d,f){a:{var v=ea._gaUserPrefs;if(v\u0026\u0026v.ioo\u0026\u0026v.ioo()||d\u0026\u0026!0===ea[\"ga-disable-\"+d])var g=!0;else{try{var l=ea.external;if(l\u0026\u0026l._gaUserPrefs\u0026\u0026\"oo\"==l._gaUserPrefs){g=!0;break a}}catch(Vb){}g=!1}}if(g||Za.test(k.location.hostname)||\"\/\"==c\u0026\u0026$a.test(e))return!1;if(b\u0026\u00261200\u003Cb.length\u0026\u0026(b=b.substring(0,1200),h(24)),c=a+\"\\x3d\"+b+\"; path\\x3d\"+c+\"; \",f\u0026\u0026(c+=\"expires\\x3d\"+(new Date((new Date).getTime()+f)).toGMTString()+\n\"; \"),e\u0026\u0026\"none\"!=e\u0026\u0026(c+=\"domain\\x3d\"+e+\";\"),e=k.cookie,k.cookie=c,!(e=e!=k.cookie))a:{a=G(a);for(e=0;e\u003Ca.length;e++)if(b==a[e]){e=!0;break a}e=!1}return e},fa=function(a){return M(a).replace(\/\\(\/g,\"%28\").replace(\/\\)\/g,\"%29\")},$a=\/^(www\\.)?google(\\.com?)?(\\.[a-z]{2})?$\/,Za=\/(^|\\.)doubleclick\\.net$\/i,wa=function(){this.M=[]};wa.prototype.add=function(a){};var R=function(){return Math.round(2147483647*Math.random())},V=function(){this.data=new D},W=new D,ha=[];V.prototype.get=function(a){var b=xa(a),\nc=this.data.get(a);return b\u0026\u0026void 0==c\u0026\u0026(c=\"function\"==typeof b.defaultValue?b.defaultValue():b.defaultValue),b\u0026\u0026b.Z?b.Z(this,a,c):c};var m=function(a,b){return a=a.get(b),void 0==a?\"\":\"\"+a},ia=function(a,b){return a=a.get(b),void 0==a||\"\"===a?0:1*a};V.prototype.set=function(a,b,c){if(a)if(\"object\"==typeof a)for(var e in a)a.hasOwnProperty(e)\u0026\u0026ya(this,e,a[e],c);else ya(this,a,b,c)};var ya=function(a,b,c,e){if(void 0!=c)switch(b){case B:ab.test(c)}var d=xa(b);d\u0026\u0026d.o?d.o(a,b,c,e):a.data.set(b,c,e)},\nN=function(a,b,c,e,d){this.name=a;this.F=b;this.Z=e;this.o=d;this.defaultValue=c},xa=function(a){var b=W.get(a);if(!b)for(var c=0;c\u003Cha.length;c++){var e=ha[c],d=e[0].exec(a);if(d){b=e[1](d);W.set(b.name,b);break}}return b},bb=function(a){var b;return W.map(function(c,e){e.F==a\u0026\u0026(b=e)}),b\u0026\u0026b.name},d=function(a,b,c,e,d){return a=new N(a,b,c,e,d),W.set(a.name,a),a.name},X=function(a,b){ha.push([new RegExp(\"^\"+a+\"$\"),b])},l=function(a,b,c){return d(a,b,c,void 0,za)},za=function(){},O=\"slga\",Y=!1,cb=l(\"apiVersion\",\n\"v\"),db=l(\"clientVersion\",\"_v\");d(\"anonymizeIp\",\"aip\");var eb=d(\"adSenseId\",\"a\"),Aa=d(\"hitType\",\"t\");d(\"hitCallback\");d(\"hitPayload\");d(\"nonInteraction\",\"ni\");d(\"currencyCode\",\"cu\");d(\"dataSource\",\"ds\");d(\"useBeacon\",void 0,!1);d(\"transport\");d(\"sessionControl\",\"sc\",\"\");d(\"sessionGroup\",\"sg\");d(\"queueTime\",\"qt\");d(\"_s\",\"_s\");d(\"screenName\",\"cd\");var fb=(d(\"location\",\"dl\",\"\"),d(\"referrer\",\"dr\"),d(\"page\",\"dp\",\"\"));d(\"hostname\",\"dh\");d(\"language\",\"ul\");d(\"encoding\",\"de\");d(\"title\",\"dt\",function(){return k.title||\nvoid 0});X(\"contentGroup([0-9]+)\",function(a){return new N(a[0],\"cg\"+a[1])});d(\"screenColors\",\"sd\");d(\"screenResolution\",\"sr\");d(\"viewportSize\",\"vp\");d(\"javaEnabled\",\"je\");d(\"flashVersion\",\"fl\");d(\"campaignId\",\"ci\");d(\"campaignName\",\"cn\");d(\"campaignSource\",\"cs\");d(\"campaignMedium\",\"cm\");d(\"campaignKeyword\",\"ck\");d(\"campaignContent\",\"cc\");var gb=d(\"eventCategory\",\"ec\"),hb=d(\"eventAction\",\"ea\"),ib=d(\"eventLabel\",\"el\"),jb=d(\"eventValue\",\"ev\"),kb=d(\"socialNetwork\",\"sn\"),lb=d(\"socialAction\",\"sa\"),mb=\nd(\"socialTarget\",\"st\"),nb=(d(\"l1\",\"plt\"),d(\"l2\",\"pdt\"),d(\"l3\",\"dns\"),d(\"l4\",\"rrt\"),d(\"l5\",\"srt\"),d(\"l6\",\"tcp\"),d(\"l7\",\"dit\"),d(\"l8\",\"clt\"),d(\"timingCategory\",\"utc\")),ob=d(\"timingVar\",\"utv\"),pb=d(\"timingLabel\",\"utl\"),qb=d(\"timingValue\",\"utt\");d(\"appName\",\"an\");d(\"appVersion\",\"av\",\"\");d(\"appId\",\"aid\",\"\");d(\"appInstallerId\",\"aiid\",\"\");d(\"exDescription\",\"exd\");d(\"exFatal\",\"exf\");var rb=(d(\"expId\",\"xid\"),d(\"expVar\",\"xvar\"),d(\"exp\",\"exp\"),d(\"_utma\",\"_utma\")),sb=d(\"_utmz\",\"_utmz\"),tb=d(\"_utmht\",\"_utmht\");\nd(\"_hc\",void 0,0);d(\"_ti\",void 0,0);d(\"_to\",void 0,20);X(\"dimension([0-9]+)\",function(a){return new N(a[0],\"cd\"+a[1])});X(\"metric([0-9]+)\",function(a){return new N(a[0],\"cm\"+a[1])});d(\"linkerParam\",void 0,void 0,Wa,za);d(\"usage\",\"_u\");var Ba=d(\"_um\");d(\"forceSSL\",void 0,void 0,function(){return Y},function(a,b,c){h(34);Y=!!c});var ub=d(\"_j1\",\"jid\"),vb=d(\"_j2\",\"gjid\");X(\"\\\\\\x26(.*)\",function(a){var b=new N(a[0],a[1]),c=bb(a[0].substring(1));return c\u0026\u0026(b.Z=function(a){return a.get(c)},b.o=function(a,\nb,d,g){a.set(c,d,g)},b.F=void 0),b});var wb=l(\"_oot\"),xb=d(\"previewTask\"),yb=d(\"checkProtocolTask\"),zb=d(\"validationTask\"),Ab=d(\"checkStorageTask\"),Bb=d(\"historyImportTask\"),Cb=(d(\"samplerTask\"),d(\"_rlt\"));d(\"buildHitTask\");d(\"sendHitTask\");var Db=(d(\"ceTask\"),d(\"devIdTask\")),Eb=(d(\"timingTask\"),d(\"displayFeaturesTask\")),y=l(\"name\"),w=l(\"clientId\",\"cid\"),Ca=l(\"clientIdTime\"),Da=d(\"userId\",\"uid\"),B=l(\"trackingId\",\"tid\"),P=l(\"cookieName\",void 0,\"_ga\"),u=l(\"cookieDomain\"),E=l(\"cookiePath\",void 0,\"\/\"),\nja=l(\"cookieExpires\",void 0,63072E3),Z=l(\"legacyCookieDomain\"),ka=l(\"legacyHistoryImport\",void 0,!0),I=l(\"storage\",void 0,\"cookie\"),la=l(\"allowLinker\",void 0,!1),ma=l(\"allowAnchor\",void 0,!0),Ea=l(\"sampleRate\",\"sf\",100),na=l(\"siteSpeedSampleRate\",void 0,1),Fa=l(\"alwaysSendReferrer\",void 0,!1),H=l(\"_gid\",\"_gid\"),A=l(\"_ge\"),oa=l(\"_gcn\"),Fb=d(\"transportUrl\"),Gb=d(\"_r\",\"_r\"),pa=function(a,b,c){this.V=a;this.fa=b;this.$=!1;this.oa=c;this.ea=1},qa=function(a,b,c){if(a.fa\u0026\u0026a.$)return 0;if(a.$=!0,b){if(a.oa\u0026\u0026\nia(b,a.oa))return ia(b,a.oa);if(0==b.get(na))return 0}return 0==a.V?0:(void 0===c\u0026\u0026(c=void 0),0==c%a.V?Math.floor(c\/a.V)%a.ea+1:0)},J=!1,Ha=function(a){\"cookie\"==m(a,I)\u0026\u0026(Ga(a,w,P),a.get(A)\u0026\u0026Ga(a,H,oa,864E5))},Ga=function(a,b,c,e){var d=Ia(a,b);if(d){c=m(a,c);b=Ja(m(a,E));var f=ra(m(a,u));e=e||1E3*ia(a,ja);var g=m(a,B);if(\"auto\"!=f)U(c,d,b,f,g,e)\u0026\u0026(J=!0);else{h(32);var x;if(d=[],f=T().split(\".\"),4!=f.length||(x=f[f.length-1],parseInt(x,10)!=x)){for(x=f.length-2;0\u003C=x;x--)d.push(f.slice(x).join(\".\"));\nd.push(\"none\");x=d}else x=[\"none\"];for(var k=0;k\u003Cx.length;k++)if(f=x[k],a.data.set(u,f),d=Ia(a,w),U(c,d,b,f,g,e))return void(J=!0);a.data.set(u,\"auto\")}}else a.get(A)||h(54)},Hb=function(a){if(\"cookie\"==m(a,I)\u0026\u0026!J\u0026\u0026(Ha(a),!J))throw\"abort\";},Ib=function(a){if(a.get(ka)){var b=m(a,u),c=m(a,Z)||T(),e=ca(\"__utma\",c,b);e\u0026\u0026(h(19),a.set(tb,(new Date).getTime(),!0),a.set(rb,e.R),(b=ca(\"__utmz\",c,b))\u0026\u0026e.hash==b.hash\u0026\u0026a.set(sb,b.R))}},Ia=function(a,b){b=fa(m(a,b));var c=ra(m(a,u)).split(\".\").length;return a=\nKa(m(a,E)),1\u003Ca\u0026\u0026(c+=\"-\"+a),b?[\"GA1\",c,b].join(\".\"):\"\"},Ma=function(a,b){if(b\u0026\u0026!(1\u003Eb.length)){for(var c=[],e=0;e\u003Cb.length;e++){var d=b[e].split(\".\");var f=d.shift();(\"GA1\"==f||\"1\"==f)\u0026\u00261\u003Cd.length?(f=d.shift().split(\"-\"),1==f.length\u0026\u0026(f[1]=\"1\"),f[0]*=1,f[1]*=1,d={H:f,s:d.join(\".\")}):d=void 0;d\u0026\u0026c.push(d)}if(1==c.length)return h(13),c[0].s;if(0!=c.length)return h(14),b=ra(m(a,u)).split(\".\").length,c=La(c,b,0),1==c.length?c[0].s:(a=Ka(m(a,E)),c=La(c,a,1),c[0]\u0026\u0026c[0].s);h(12)}},La=function(a,b,c){for(var e,\nd=[],f=[],g=0;g\u003Ca.length;g++){var h=a[g];h.H[c]==b?d.push(h):void 0==e||h.H[c]\u003Ce?(f=[h],e=h.H[c]):h.H[c]==e\u0026\u0026f.push(h)}return 0\u003Cd.length?d:f},ra=function(a){return 0==a.indexOf(\".\")?a.substr(1):a},Ja=function(a){return a?(1\u003Ca.length\u0026\u0026a.lastIndexOf(\"\/\")==a.length-1\u0026\u0026(a=a.substr(0,a.length-1)),0!=a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a),a):\"\/\"},Ka=function(a){return a=Ja(a),\"\/\"==a?1:a.split(\"\/\").length},Jb=new RegExp(\/^https?:\\\/\\\/([^\\\/:]+)\/),Kb=\/(.*)([?\u0026#])(?:_ga=[^\u0026#]*)(?:\u0026?)(.*)\/,aa=function(a){h(48);this.target=\na;this.T=!1};aa.prototype.ca=function(a,b){if(a.tagName){if(\"a\"==a.tagName.toLowerCase())return void(a.href\u0026\u0026(a.href=ba(this,a.href,b)));if(\"form\"==a.tagName.toLowerCase())return Na(this,a)}if(\"string\"==typeof a)return ba(this,a,b)};var ba=function(a,b,c){var e=Kb.exec(b);e\u0026\u00263\u003C=e.length\u0026\u0026(b=e[1]+(e[3]?e[2]+e[3]:\"\"));a=a.target.get(\"linkerParam\");var d=b.indexOf(\"?\");e=b.indexOf(\"#\");return c?b+=(-1==e?\"#\":\"\\x26\")+a:(c=-1==d?\"?\":\"\\x26\",b=-1==e?b+(c+a):b.substring(0,e)+c+a+b.substring(e)),b.replace(\/\u0026+_ga=\/,\n\"\\x26_ga\\x3d\")},Na=function(a,b){if(b\u0026\u0026b.action)if(\"get\"==b.method.toLowerCase()){a=a.target.get(\"linkerParam\").split(\"\\x3d\")[1];for(var c=b.childNodes||[],e=0;e\u003Cc.length;e++)if(\"_ga\"==c[e].name)return void c[e].setAttribute(\"value\",a);c=k.createElement(\"input\");c.setAttribute(\"type\",\"hidden\");c.setAttribute(\"name\",\"_ga\");c.setAttribute(\"value\",a);b.appendChild(c)}else\"post\"==b.method.toLowerCase()\u0026\u0026(b.action=ba(a,b.action))};aa.prototype.S=function(a,b,c){function e(c){try{c=c||p.event;a:{var e=\nc.target||c.srcElement;for(c=100;e\u0026\u00260\u003Cc;){if(e.href\u0026\u0026e.nodeName.match(\/^a(?:rea)?$\/i)){var f=e;break a}e=e.parentNode;c--}f={}}(\"http:\"==f.protocol||\"https:\"==f.protocol)\u0026\u0026sa(a,f.hostname||\"\")\u0026\u0026f.href\u0026\u0026(f.href=ba(d,f.href,b))}catch(Ub){h(26)}}var d=this;this.T||(this.T=!0,S(k,\"mousedown\",e,!1),S(k,\"keyup\",e,!1));c\u0026\u0026S(k,\"submit\",function(b){if(b=b||p.event,(b=b.target||b.srcElement)\u0026\u0026b.action){var c=b.action.match(Jb);c\u0026\u0026sa(a,c[1])\u0026\u0026Na(d,b)}})};var Oa,Mb=function(a,b,c){this.U=ub;this.aa=b;(b=c)||\n(b=(b=m(a,y))\u0026\u0026\"t0\"!=b?Lb.test(b)?\"_gat_\"+fa(m(a,B)):\"_gat_\"+fa(b):\"_gat\");this.Y=b},Pa=function(a,b,c){b.get(c)||(\"1\"==G(a.Y)[0]?b.set(c,\"\",!0):b.set(c,\"\"+R(),!0))},Lb=\/^gtm\\d+$\/,Nb=function(a){if(!a.get(\"dcLoaded\")\u0026\u0026\"cookie\"==a.get(I)){var b=a,c=b;var e=(c=c.get(Ba),\"[object Array]\"==Object.prototype.toString.call(Object(c))||(c=[]),c);e=new Q(e);e.set(51);b.set(Ba,e.w);b=new Mb(a);Pa(b,a,b.U);Pa(b,a,vb);e=b;c=a;c.get(e.U)\u0026\u0026U(e.Y,\"1\",c.get(E),c.get(u),c.get(B),6E4);a.get(b.U)\u0026\u0026(a.set(Gb,1,!0),a.set(Fb,\n\"undefined\/r\/collect\",!0))}},Ob=function(){var a=p.gaGlobal=p.gaGlobal||{};return a.hid=a.hid||R()},Pb=function(a,b,c){if(!Oa){var e=k.location.hash;var d=p.name,f=\/^#?gaso=([^\u0026]*)\/;if(d=(e=(e=e\u0026\u0026e.match(f)||d\u0026\u0026d.match(f))?e[1]:G(\"GASO\")[0]||\"\")\u0026\u0026e.match(\/^(?:!([-0-9a-z.]{1,40})!)?([-.\\w]{10,1200})$\/i))U(\"GASO\",\"\"+e,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=d[1],a=\"https:\/\/www.google.com\/analytics\/web\/inpage\/pub\/inpage.js?\"+(a?\"prefix\\x3d\"+a+\"\\x26\":\"\")+R(),b=\"_gasojs\",\ne=c=void 0,a\u0026\u0026(c?(e=\"\",b\u0026\u0026ua.test(b)\u0026\u0026(e=' id\\x3d\"'+b+'\"'),ua.test(a)\u0026\u0026k.write(\"\\x3cscript\"+e+' src\\x3d\"'+a+'\"\\x3e\\x3c\/script\\x3e')):(c=k.createElement(\"script\"),c.type=\"text\/javascript\",c.async=!0,c.src=a,e\u0026\u0026(c.onload=e),b\u0026\u0026(c.id=b),a=k.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(c,a)));Oa=!0}},ab=\/^(UA|YT|MO|GP)-(\\d+)-(\\d+)$\/,K=function(a){function b(a,b){e.b.data.set(a,b)}function c(a,c){b(a,c);e.filters.add(a)}var e=this;this.b=new V;this.filters=new wa;b(y,a[y]);b(B,Xa(a[B]));\nb(P,a[P]);b(u,a[u]||T());b(E,a[E]);b(ja,a[ja]);b(Z,a[Z]);b(ka,a[ka]);b(la,a[la]);b(ma,a[ma]);b(Ea,a[Ea]);b(na,a[na]);b(Fa,a[Fa]);b(I,a[I]);b(Da,a[Da]);b(Ca,a[Ca]);b(A,a[A]);b(cb,1);b(db,\"j50\");c(wb,q);c(xb,z);c(yb,r);c(zb,Ua);c(Ab,Hb);c(Bb,Ib);c(Cb,Va);c(Db,F);c(Eb,Nb);Qb(this.b,a[w]);this.b.set(eb,Ob());Pb(this.b.get(B),this.b.get(u),this.b.get(E));this.ra=new pa(1E4,!0,\"gaexp10\")},Qb=function(a,b){if(\"cookie\"==m(a,I)){J=!1;var c=G(m(a,P));if(!(c=Ma(a,c))){c=m(a,u);var e=m(a,Z)||T();c=ca(\"__utma\",\ne,c);void 0!=c?(h(10),c=c.O[1]+\".\"+c.O[2]):c=void 0}c\u0026\u0026(a.data.set(w,c),c=G(m(a,oa)),(c=Ma(a,c))\u0026\u0026a.data.set(H,c),J=!0)}a:if(c=a.get(ma),e=k.location[c?\"href\":\"search\"],c=(e=e.match(\"(?:\\x26|#|\\\\?)\"+M(\"_ga\").replace(\/([.*+?^=!:${}()|\\[\\]\\\/\\\\])\/g,\"\\\\$1\")+\"\\x3d([^\\x26#]*)\"))\u0026\u00262==e.length?e[1]:\"\")if(a.get(la))if(-1==(e=c.indexOf(\".\")))h(22);else{var d=c.substring(0,e),f=c.substring(e+1);e=f.indexOf(\".\");c=f.substring(0,e);f=f.substring(e+1);if(\"1\"==d){if(e=f,c!=C(e,0)\u0026\u0026c!=C(e,-1)\u0026\u0026c!=C(e,-2)){h(23);\nbreak a}}else{if(\"2\"!=d){h(22);break a}if(d=f.split(\"-\",2),e=d[1],c!=C(d[0]+e,0)\u0026\u0026c!=C(d[0]+e,-1)\u0026\u0026c!=C(d[0]+e,-2)){h(53);break a}h(2);a.data.set(H,d[0])}h(11);a.data.set(w,e)}else h(21);b\u0026\u0026(h(9),a.data.set(w,M(b)));a.get(w)||((b=(b=p.gaGlobal\u0026\u0026p.gaGlobal.vid)\u0026\u0026-1!=b.search(\/^(?:utma\\.)?\\d+\\.\\d+$\/)?b:void 0)?(h(17),a.data.set(w,b)):(h(8),a.data.set(w,ta())));a.data.set(A,a.get(A)||1==qa(new pa(0,!0),void 0,L(a.get(w))));a.get(A)\u0026\u0026(b=m(a,P),a.data.set(oa,\"_ga\"==b?\"_gid\":b+\"_gid\"));a.get(A)\u0026\u0026!a.get(H)\u0026\u0026\n(h(3),a.data.set(H,ta()));Ha(a)};K.prototype.get=function(a){return this.b.get(a)};K.prototype.set=function(a,b){this.b.set(a,b)};var Rb={pageview:[fb],event:[gb,hb,ib,jb],social:[kb,lb,mb],timing:[nb,ob,qb,pb]};K.prototype.send=function(a){if(!(1\u003Earguments.length)){var b,c;\"string\"==typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]\u0026\u0026arguments[0][Aa],c=arguments);b\u0026\u0026(c=va(Rb[b]||[],c),c[Aa]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},qa(this.ra,\nthis.b)\u0026\u0026this.b.get(B))}};K.prototype.ma=function(a,b){var c=this;c.get(y)};var Qa=function(a){if(\"prerender\"==k.visibilityState||(a(),!1)){h(16);var b=!1,c=function(){if(!b\u0026\u0026\"prerender\"!=k.visibilityState\u0026\u0026(a(),!0)){b=!0;var e=c,d=k;d.removeEventListener?d.removeEventListener(\"visibilitychange\",e,!1):d.detachEvent\u0026\u0026d.detachEvent(\"onvisibilitychange\",e)}};S(k,\"visibilitychange\",c)}},Sb=function(a){};new D;new D;new D;var n={ga:function(){n.f=[]}};n.ga();n.D=function(a){var b=n.J.apply(n,arguments);\nb=n.f.concat(b);for(n.f=[];0\u003Cb.length\u0026\u0026!n.v(b[0])\u0026\u0026(b.shift(),!(0\u003Cn.f.length)););n.f=n.f.concat(b)};n.J=function(a){for(var b=[],c=0;c\u003Carguments.length;c++)try{var d=new Sb(arguments[c]);d.g||(d.i\u0026\u0026(d.ha=void 0),b.push(d))}catch(v){}return b};n.v=function(a){try{if(a.u)a.u.call(p,g.j(\"t0\"));else{var b=a.c==O?g:g.j(a.c);if(a.A)\"t0\"!=a.c||g.create.apply(g,a.a);else if(a.ba)g.remove(a.c);else if(b){if(a.i)return a.ha\u0026\u0026(a.ha=void 0),!0;if(a.K){var c=a.C,d=a.a,h=b.plugins_.get(a.K);h[c].apply(h,d)}else b[a.C].apply(b,\na.a)}}}catch(f){}};var g=function(a){h(1);n.D.apply(n,[arguments])};g.h={};g.P=[];g.L=0;g.answer=42;var Tb=[B,u,y];g.create=function(a){var b=va(Tb,[].slice.call(arguments));b[y]||(b[y]=\"t0\");var c=\"\"+b[y];return g.h[c]?g.h[c]:(b=new K(b),g.h[c]=b,g.P.push(b),b)};g.remove=function(a){for(var b=0;b\u003Cg.P.length;b++)if(g.P[b].get(y)==a){g.P.splice(b,1);g.h[a]=null;break}};g.j=function(a){return g.h[a]};g.getAll=function(){return g.P.slice(0)};g.N=function(){\"ga\"!=O\u0026\u0026h(49);var a=p[O];if(!a||42!=a.answer){g.L=\na\u0026\u0026a.l;g.loaded=!0;var b=p[O]=g;t(\"create\",b,b.create);t(\"remove\",b,b.remove);t(\"getByName\",b,b.j,5);t(\"getAll\",b,b.getAll,6);b=K.prototype;t(\"get\",b,b.get,7);t(\"set\",b,b.set,4);t(\"send\",b,b.send);t(\"requireSync\",b,b.ma);b=V.prototype;t(\"get\",b,b.get);t(\"set\",b,b.set);\"https:\"==k.location.protocol||Y||!qa(new pa(1E4))||(h(36),Y=!0);(p.gaplugins=p.gaplugins||{}).Linker=aa;b=aa.prototype;t(\"decorate\",b,b.ca,20);t(\"autoLink\",b,b.S,25);a=a\u0026\u0026a.q;\"[object Array]\"==Object.prototype.toString.call(Object(a))?\nn.D.apply(g,a):h(50)}};g.da=function(){for(var a=g.getAll(),b=0;b\u003Ca.length;b++)a[b].get(y)};var Ra=g.N,Sa=p[O];Sa\u0026\u0026Sa.r?Ra():Qa(Ra);Qa(function(){n.D([\"provide\",\"render\",Ya])})}(window);var r=\"SCITYLANA\";r=r+\"_temp_\"+Math.round(2147483647*Math.random());q=slga.create(q,z,r);F=F||q.get(\"userId\")||q.get(\"clientId\");slga.remove(r);r=window;q=\"_o_r_d_e_r_sl\";z=(new Date).getTime();r[q]=r[q]?r[q]==z?z+1:z\u003Er[q]?z:r[q]+1:z;return F=[\"sl\\x3d1\",\"u\\x3d\"+F,\"t\\x3d\"+r[q]].join(\"\\x26\")})();"]
    },{
      "function":"__u"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"Market",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"PreOrFre",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"SiteVer",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"MainOrUser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"RecognizedCustomer",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessTrial",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"SalesType",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"RefCode",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessSale",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessConversion",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessSeenCheckout",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessSeenEntryAny",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"NumberOfLogins",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Instrumentation",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Culture",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Version"
    },{
      "function":"__v",
      "vtp_name":"ExpQS",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"SWStep"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-119897294-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f"
    },{
      "function":"__u",
      "vtp_component":"QUERY"
    },{
      "function":"__v",
      "vtp_name":"Language",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProcessLogin",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"CancelPS",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"EarlyCancelPS",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"EntrySPA",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Email",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"OptiSnippet",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"PreviewPage",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Instrumentation",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Segmentation",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"BlogUser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"CancelCheckout",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ProcessSeenEntryAny",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ProcessTrial",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"target",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"ConversionValue",
      "vtp_defaultValue":"",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ConversionCurrency",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",11],
      "vtp_defaultValue":"650",
      "vtp_map":["list",["map","key","AE","value","400"],["map","key","AF","value","250"],["map","key","AG","value","400"],["map","key","AL","value","250"],["map","key","AM","value","400"],["map","key","AO","value","200"],["map","key","AR","value","350"],["map","key","AS","value","250"],["map","key","AT","value","500"],["map","key","AU","value","450"],["map","key","AZ","value","500"],["map","key","BA","value","400"],["map","key","BB","value","400"],["map","key","BD","value","250"],["map","key","BE","value","800"],["map","key","BF","value","200"],["map","key","BG","value","400"],["map","key","BH","value","500"],["map","key","BI","value","200"],["map","key","BJ","value","200"],["map","key","BM","value","400"],["map","key","BN","value","400"],["map","key","BO","value","250"],["map","key","BQ","value","370"],["map","key","BR","value","300"],["map","key","BS","value","400"],["map","key","BT","value","250"],["map","key","BW","value","300"],["map","key","BY","value","500"],["map","key","BZ","value","400"],["map","key","CA","value","500"],["map","key","CD","value","300"],["map","key","CG","value","200"],["map","key","CH","value","1000"],["map","key","CI","value","300"],["map","key","CL","value","400"],["map","key","CM","value","300"],["map","key","CN","value","350"],["map","key","CO","value","400"],["map","key","CR","value","400"],["map","key","CV","value","200"],["map","key","CW","value","400"],["map","key","CY","value","400"],["map","key","CZ","value","350"],["map","key","DE","value","600"],["map","key","DJ","value","200"],["map","key","DK","value","1100"],["map","key","DM","value","400"],["map","key","DO","value","400"],["map","key","DZ","value","300"],["map","key","EC","value","400"],["map","key","EE","value","400"],["map","key","EG","value","300"],["map","key","ES","value","400"],["map","key","ET","value","200"],["map","key","FI","value","700"],["map","key","FJ","value","250"],["map","key","FK","value","400"],["map","key","FO","value","700"],["map","key","FR","value","600"],["map","key","GA","value","300"],["map","key","GB","value","600"],["map","key","GD","value","400"],["map","key","GE","value","500"],["map","key","GH","value","250"],["map","key","GN","value","200"],["map","key","GP","value","700"],["map","key","GR","value","400"],["map","key","GT","value","400"],["map","key","GW","value","200"],["map","key","GY","value","350"],["map","key","HK","value","450"],["map","key","HN","value","400"],["map","key","HR","value","400"],["map","key","HT","value","400"],["map","key","HU","value","400"],["map","key","ID","value","350"],["map","key","IE","value","400"],["map","key","IL","value","500"],["map","key","IN","value","250"],["map","key","IQ","value","300"],["map","key","IR","value","370"],["map","key","IS","value","400"],["map","key","IT","value","450"],["map","key","JM","value","400"],["map","key","JO","value","300"],["map","key","JP","value","400"],["map","key","KE","value","250"],["map","key","KG","value","250"],["map","key","KH","value","250"],["map","key","KM","value","200"],["map","key","KR","value","400"],["map","key","KW","value","350"],["map","key","KY","value","400"],["map","key","KZ","value","350"],["map","key","LA","value","250"],["map","key","LB","value","350"],["map","key","LC","value","400"],["map","key","LI","value","800"],["map","key","LK","value","300"],["map","key","LR","value","200"],["map","key","LT","value","400"],["map","key","LU","value","600"],["map","key","LV","value","400"],["map","key","LY","value","200"],["map","key","MA","value","300"],["map","key","MC","value","800"],["map","key","MD","value","400"],["map","key","ME","value","400"],["map","key","MG","value","200"],["map","key","MK","value","400"],["map","key","ML","value","200"],["map","key","MM","value","250"],["map","key","MN","value","250"],["map","key","MO","value","400"],["map","key","MQ","value","400"],["map","key","MR","value","200"],["map","key","MT","value","500"],["map","key","MU","value","250"],["map","key","MV","value","250"],["map","key","MX","value","400"],["map","key","MY","value","300"],["map","key","MZ","value","200"],["map","key","NA","value","200"],["map","key","NC","value","300"],["map","key","NG","value","200"],["map","key","NI","value","400"],["map","key","NL","value","750"],["map","key","NO","value","800"],["map","key","NP","value","250"],["map","key","NZ","value","400"],["map","key","OM","value","300"],["map","key","PA","value","400"],["map","key","PE","value","350"],["map","key","PF","value","250"],["map","key","PG","value","300"],["map","key","PH","value","350"],["map","key","PK","value","300"],["map","key","PL","value","400"],["map","key","PR","value","400"],["map","key","PT","value","400"],["map","key","PY","value","400"],["map","key","QA","value","500"],["map","key","RE","value","370"],["map","key","RO","value","400"],["map","key","RS","value","400"],["map","key","RU","value","143"],["map","key","RW","value","200"],["map","key","SA","value","450"],["map","key","SD","value","370"],["map","key","SE","value","850"],["map","key","SG","value","350"],["map","key","SI","value","400"],["map","key","SK","value","400"],["map","key","SN","value","250"],["map","key","SO","value","200"],["map","key","SR","value","350"],["map","key","ST","value","200"],["map","key","SV","value","400"],["map","key","SY","value","370"],["map","key","TC","value","400"],["map","key","TG","value","300"],["map","key","TH","value","400"],["map","key","TJ","value","250"],["map","key","TL","value","250"],["map","key","TM","value","250"],["map","key","TN","value","300"],["map","key","TR","value","250"],["map","key","TT","value","400"],["map","key","TW","value","450"],["map","key","TZ","value","250"],["map","key","UA","value","350"],["map","key","UG","value","300"],["map","key","US","value","400"],["map","key","UY","value","400"],["map","key","UZ","value","250"],["map","key","VA","value","400"],["map","key","VE","value","400"],["map","key","VI","value","400"],["map","key","VN","value","300"],["map","key","XK","value","400"],["map","key","YE","value","250"],["map","key","YT","value","200"],["map","key","ZA","value","400"],["map","key","ZM","value","350"],["map","key","ZW","value","200"]]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"NumberOfLogins"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"NumberOfLogins"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CustomerId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;try{var b=Math.floor((Date.now()-Date.UTC(2016,7,8,7,0,0,0))\/1E3\/60),c=Math.floor((Date.now()-Date.UTC(2016,7,12,21,59,0,0))\/1E3\/60);a=",["escape",["macro",7],8,16],"\u003C=b;nottoofresh=",["escape",["macro",7],8,16],"\u003E=c}catch(d){}return a\u0026\u0026nottoofresh})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"IsMobile"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ProcessTrial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Version"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Message"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Segmentation"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-119140735-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"123hjemmeside.dk,123hjemmeside.no,123minsida.se,123kotisivu.fi123website.nl,123siteweb.fr,123homepage.it,123miweb.es,123webseite.de,123webseite.at,123website.ch,123website.lu,123website.be,simplesite.com.br,123sait.ru,123website.co.id,simplesite.com.tr,simplesite.pl,simplesite.cz,simplesite.my,simplesite.gr.123paginaweb.pt",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","6","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","7","dimension",["macro",15]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":25
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Trial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Trial Happened",
      "vtp_eventLabel":"TrialHappened",
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","4","dimension",["macro",17]],["map","index","7","dimension",["macro",15]],["map","index","6","dimension",["macro",11]],["map","index","5","dimension",["macro",18]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Sale",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Sale Happened",
      "vtp_eventLabel":"Sale Happened",
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","6","dimension",["macro",11]],["map","index","7","dimension",["macro",15]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Outcome",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Conversion",
      "vtp_eventLabel":"ConversionHappened",
      "vtp_dimension":["list",["map","index","6","dimension",["macro",11]],["map","index","2","dimension",["macro",14]],["map","index","1","dimension",["macro",13]],["map","index","3","dimension",["macro",12]],["map","index","7","dimension",["macro",15]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Process",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"SeenCheckout",
      "vtp_eventLabel":"SeenCheckout",
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","6","dimension",["macro",11]],["map","index","7","dimension",["macro",15]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":208
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Process",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventLabel":"SeenEntryAny",
      "vtp_eventAction":"SeenEntryAny",
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",17]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","3","dimension",["macro",12]],["map","index","5","dimension",["macro",18]],["map","index","6","dimension",["macro",11]],["map","index","7","dimension",["macro",15]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":210
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"InstPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","6","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","7","dimension",["macro",15]],["map","index","9","dimension",["macro",23]],["map","index","18","dimension",["macro",8]]],
      "vtp_eventAction":["macro",24],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":236
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":295
    },{
      "function":"__ua",
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"SWStep",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",28],
      "vtp_dimension":["list",["map","index","6","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","7","dimension",["macro",15]],["map","index","9","dimension",["macro",23]],["map","index","11","dimension",["macro",27]],["map","index","18","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-48375203-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":342
    },{
      "function":"__paused",
      "vtp_originalTagType":"ga",
      "tag_id":353
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",29],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":381
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":382
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar d,expires,cvalue=\"\";",["escape",["macro",1],8,16],"\u0026\u0026(d=new Date,d.setTime(d.getTime()+6E5),expires=\"expires\\x3d\"+d.toUTCString(),document.cookie=\"customer_id_cookie\\x3d\"+cvalue+",["escape",["macro",1],8,16],"+\"; \"+expires+\"; path\\x3d\/\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E0\u003C=document.cookie.indexOf(\"customer_id_cookie\")?dataLayer.push({event:\"customerId-cookie-found\"}):dataLayer.push({event:\"customerId-cookie-not-found\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":288
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar d,expires,cvalue=\"\";",["escape",["macro",1],8,16],"\u0026\u0026(d=new Date,d.setTime(d.getTime()+6E5),expires=\"expires\\x3d\"+d.toUTCString(),document.cookie=\"free_trial_customer_id_cookie\\x3d\"+cvalue+",["escape",["macro",1],8,16],"+\"; \"+expires+\"; path\\x3d\/\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":290
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E0\u003C=document.cookie.indexOf(\"free_trial_customer_id_cookie\")?dataLayer.push({event:\"free-trial-customerId-cookie-found\"}):dataLayer.push({event:\"free-trial-customerId-cookie-not-found\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":291
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,b,f,g){var c,d,a;e.SMCX=e.SMCX||[];b.getElementById(g)||(c=b.getElementsByTagName(f),d=c[c.length-1],a=b.createElement(f),a.type=\"text\/javascript\",a.async=!0,a.id=g,a.src=[\"https:\"===location.protocol?\"https:\/\/\":\"http:\/\/\",\"widget.surveymonkey.com\/collect\/website\/js\/oGV2Ywcf6Y89wItD87kGvLDEiam9qEEQtFtUZm_2FWUTPWU8SLUdSt0uu9bZh2HWK_2B.js\"].join(\"\"),d.parentNode.insertBefore(a,d))})(window,document,\"script\",\"smcx-sdk\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":313
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,b,f,g){var c,d,a;e.SMCX=e.SMCX||[];b.getElementById(g)||(c=b.getElementsByTagName(f),d=c[c.length-1],a=b.createElement(f),a.type=\"text\/javascript\",a.async=!0,a.id=g,a.src=[\"https:\"===location.protocol?\"https:\/\/\":\"http:\/\/\",\"widget.surveymonkey.com\/collect\/website\/js\/c8osvoco2O9s9KaFYbALq5jz_2F_2BHo2v318TXoXP3ie9KL9TCOk54974RZqb5MDoPL.js\"].join(\"\"),d.parentNode.insertBefore(a,d))})(window,document,\"script\",\"smcx-sdk\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":314
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"MainSite"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"en-US"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"US"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"V4"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"V4EditormodelExperiment"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$)|(\\s+$)"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"[0-9]"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Userpage"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"customerId-cookie-not-found"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"free-trial-customerId-cookie-not-found"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"Free"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"''"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"''"
    },{
      "function":"_lt",
      "arg0":["macro",7],
      "arg1":"20"
    },{
      "function":"_ge",
      "arg0":["macro",7],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"''"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"''"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"BuiltToPurpose2Experiment=BuiltToPurpose2"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"BuiltToPurpose2Experiment=Regular"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,2],["add",1,11,15]],
    [["if",1,3],["add",2]],
    [["if",1,4],["add",3,13]],
    [["if",1,5],["add",4]],
    [["if",1,6],["add",5]],
    [["if",1,7],["add",6]],
    [["if",8,9,10,11,12],["add",7]],
    [["if",1,7],["unless",13,14],["add",8]],
    [["if",1],["unless",15,16],["add",9]],
    [["if",1],["add",10]],
    [["if",17],["add",12]],
    [["if",18],["add",14]],
    [["if",7,8,9,19,22,23,26,27],["unless",10,20,21,24,25],["add",16]],
    [["if",7,8,9,19,22,23,27,28],["unless",10,20,21,24,25],["add",17]]]
},
"runtime":[
[],[]
]};

var aa=function(a,b){function c(){}c.prototype=b.prototype;a.se=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.be=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Oc=b};g.prototype.bd=function(){return this.s};g.prototype.getType=g.prototype.bd;g.prototype.getData=function(){return this.Oc};g.prototype.getData=g.prototype.getData;var ba=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ca=function(){this.da={};this.qa=!1};ca.prototype.get=function(a){return this.da["dust."+a]};ca.prototype.set=function(a,b){!this.qa&&(this.da["dust."+a]=b)};ca.prototype.has=function(a){return this.da.hasOwnProperty("dust."+a)};var da=function(a){var b=[],c;for(c in a.da)a.da.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ca.prototype.remove=function(a){!this.qa&&delete this.da["dust."+a]};ca.prototype.D=function(){this.qa=!0};var u=function(a){this.fa=new ca;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ba(b)?this.h[Number(b)]=a[Number(b)]:this.fa.set(b,a[b]))};u.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};u.prototype.set=function(a,b){if("length"==a){if(!ba(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ba(a)?this.h[Number(a)]=b:this.fa.set(a,b)};
u.prototype.set=u.prototype.set;u.prototype.get=function(a){return"length"==a?this.length():ba(a)?this.h[Number(a)]:this.fa.get(a)};u.prototype.get=u.prototype.get;u.prototype.length=function(){return this.h.length};u.prototype.M=function(){for(var a=da(this.fa),b=0;b<this.h.length;b++)a.push(b+"");return new u(a)};u.prototype.getKeys=u.prototype.M;u.prototype.remove=function(a){ba(a)?delete this.h[Number(a)]:this.fa.remove(a)};u.prototype.remove=u.prototype.remove;u.prototype.pop=function(){return this.h.pop()};
u.prototype.pop=u.prototype.pop;u.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};u.prototype.push=u.prototype.push;u.prototype.shift=function(){return this.h.shift()};u.prototype.shift=u.prototype.shift;u.prototype.splice=function(a,b,c){return new u(this.h.splice.apply(this.h,arguments))};u.prototype.splice=u.prototype.splice;u.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
u.prototype.unshift=u.prototype.unshift;u.prototype.has=function(a){return ba(a)&&this.h.hasOwnProperty(a)||this.fa.has(a)};var ea=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var fa=function(){function a(a,c){if(b[a]){if(b[a].Ea+c>b[a].max)throw Error("Quota exceeded");b[a].Ea+=c}}var b={},c=void 0,d=void 0,e={xd:function(a){c=a},Db:function(){c&&a(c,1)},yd:function(a){d=a},O:function(b){d&&a(d,b)},Od:function(a,c){b[a]=b[a]||{Ea:0};b[a].max=c},ad:function(a){return b[a]&&b[a].Ea||0},reset:function(){b={}},Ic:a};e.onFnConsume=e.xd;e.consumeFn=e.Db;e.onStorageConsume=e.yd;e.consumeStorage=e.O;e.setMax=e.Od;e.getConsumed=e.ad;e.reset=e.reset;e.consume=e.Ic;return e};var ha=function(a,b,c){this.F=a;this.U=b;this.T=c;this.h=new ca};ha.prototype.add=function(a,b){this.h.qa||(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};ha.prototype.add=ha.prototype.add;ha.prototype.set=function(a,b){this.h.qa||(this.T&&this.T.has(a)?this.T.set(a,b):(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};ha.prototype.set=ha.prototype.set;
ha.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.T?this.T.get(a):void 0};ha.prototype.get=ha.prototype.get;ha.prototype.has=function(a){return!!this.h.has(a)||!(!this.T||!this.T.has(a))};ha.prototype.has=ha.prototype.has;ha.prototype.C=function(){return this.F};ha.prototype.D=function(){this.h.D()};var ia=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ca.call(this);this.Pb=a;this.Zc=b};aa(v,ca);var la=function(a,b){for(var c,d=0;d<b.length&&!(c=ka(a,b[d]),c instanceof g);d++);return c},ka=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Pb};v.prototype.getName=function(){return this.Pb};v.prototype.getName=v.prototype.getName;v.prototype.M=function(){return new u(da(this))};
v.prototype.getKeys=v.prototype.M;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return ia(b)?ka(c,b):b},ma:function(b){return la(a,b)},C:function(){return a.C()},fe:function(){c||(c=a.U.create(d));return c}};a.C().Db();return this.Zc.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ca.call(this)};aa(x,ca);x.prototype.M=function(){return new u(da(this))};x.prototype.getKeys=x.prototype.M;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,oa=function(a){if(null==a)return String(a);var b=na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},qa=function(a){if(!a||"object"!=oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!pa(a,"constructor")&&!pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||pa(a,b)},ra=function(a,b){var c=b||("array"==oa(a)?[]:{}),d;for(d in a)if(pa(a,d)){var e=a[d];"array"==oa(e)?("array"!=oa(c[d])&&(c[d]=[]),c[d]=ra(e,c[d])):qa(e)?(qa(c[d])||(c[d]={}),c[d]=ra(e,c[d])):c[d]=e}return c};var sa=function(a){if(a instanceof u){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=sa(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.M(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=sa(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=ta(b[c]);var d=new ha(fa(),ea());return sa(a.i.apply(a,[d].concat(b)))}:a},ta=function(a){if(ia(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=ta(a[c]));return new u(b)}if(qa(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,ta(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=sa(this.evaluate(c[d]));return ta(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var ua={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof u))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().O(a.length+f.length);return new v(a,function(){return function(a){for(var b=new ha(d.F,d.U,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new u(c));var q=la(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.O(arguments.length);for(var c=new u,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.O(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.O(h);c.set(e,f)}return c},undefined:function(){}};var y=function(){this.F=fa();this.U=ea();this.na=new ha(this.F,this.U)};y.prototype.N=function(a,b){var c=new v(a,b);c.D();this.na.set(a,c)};y.prototype.addInstruction=y.prototype.N;y.prototype.Cb=function(a,b){ua.hasOwnProperty(a)&&this.N(b||a,ua[a])};y.prototype.addNativeInstruction=y.prototype.Cb;y.prototype.C=function(){return this.F};y.prototype.getQuota=y.prototype.C;y.prototype.Ka=function(){this.F=fa();this.na.F=this.F};y.prototype.resetQuota=y.prototype.Ka;
y.prototype.Kd=function(){this.U=ea();this.na.U=this.U};y.prototype.resetPermissions=y.prototype.Kd;y.prototype.K=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.ib(c)};y.prototype.execute=y.prototype.K;y.prototype.ib=function(a){for(var b,c=0;c<arguments.length;c++){var d=ka(this.na,arguments[c]);b=d instanceof g||d instanceof v||d instanceof u||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
y.prototype.run=y.prototype.ib;y.prototype.D=function(){this.na.D()};y.prototype.makeImmutable=y.prototype.D;var va=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wa={Rd:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof u)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new u(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new u(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new u(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=va(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new u(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=va(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={Nb:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},xa="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),ya=new g("break"),Aa=new g("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof u))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=ja(xa,b))return ta(a[b].apply(a,va(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof u){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=va(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=ja(wa.Rd,b))return e=va(c),e.unshift(this.A()),wa[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=va(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,va(c))}throw"TypeError: Object has no '"+
b+"' property.";};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return ya};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};z["continue"]=function(){return Aa};
z.Pc=function(a,b,c){var d=new u;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[z.Nb.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};z.Sc=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.Vc=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.Xc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.$c=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ma(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof u||b instanceof v){var h=b.M(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ma(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};z.get=function(a){return this.A().get(this.evaluate(a))};
z.Lb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof u||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ba(b)&&(c=a[b]));return c};z.cd=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.dd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.hd=function(a,b){return this.evaluate(a)===this.evaluate(b)};z.jd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ma(d);if(e instanceof g)return e};z.qd=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.rd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.sd=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.td=function(a){return-this.evaluate(a)};z.ud=function(a){return!this.evaluate(a)};
z.vd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Vb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Wb=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new g("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof u||a instanceof x)&&a.set(b,c);return c};z.Qd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ia(b)||!ia(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
z.Sd=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ma(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.ma(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ca=function(){this.Mb=!1;this.P=new y;Ba(this);this.Mb=!0};Ca.prototype.od=function(){return this.Mb};Ca.prototype.isInitialized=Ca.prototype.od;Ca.prototype.K=function(a){return this.P.ib(a)};Ca.prototype.execute=Ca.prototype.K;Ca.prototype.D=function(){this.P.D()};Ca.prototype.makeImmutable=Ca.prototype.D;
var Ba=function(a){function b(a,b){e.P.Cb(a,String(b))}function c(a,b){e.P.N(String(d[a]),b)}var d=z.Nb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.Pc);c("DIVIDE",z.Sc);c("EQUALS",z.Vc);c("EXPRESSION_LIST",z.Xc);c("FOR_IN",z.$c);c("GET",z.get);c("GET_INDEX",
z.Lb);c("GET_PROPERTY",z.Lb);c("GREATER_THAN",z.cd);c("GREATER_THAN_EQUALS",z.dd);c("IDENTITY_EQUALS",z.hd);c("IDENTITY_NOT_EQUALS",z.jd);c("IF",z["if"]);c("LESS_THAN",z.qd);c("LESS_THAN_EQUALS",z.rd);c("MODULUS",z.sd);c("MULTIPLY",z.multiply);c("NEGATE",z.td);c("NOT",z.ud);c("NOT_EQUALS",z.vd);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Vb);c("POST_INCREMENT",z.Vb);c("PRE_DECREMENT",z.Wb);c("PRE_INCREMENT",z.Wb);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.Qd);c("SWITCH",z["switch"]);c("TERNARY",z.Sd);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};Ca.prototype.N=function(a,b){this.P.N(a,b)};Ca.prototype.addInstruction=Ca.prototype.N;Ca.prototype.C=function(){return this.P.C()};Ca.prototype.getQuota=Ca.prototype.C;Ca.prototype.Ka=function(){this.P.Ka()};Ca.prototype.resetQuota=Ca.prototype.Ka;var Da=function(){this.Ha={}};Da.prototype.get=function(a){return this.Ha.hasOwnProperty(a)?this.Ha[a]:void 0};Da.prototype.add=function(a,b){if(this.Ha.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.D();this.Ha[a]=c};Da.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,Ea=navigator,Fa=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Ga=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},F=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ga(d,b);c&&(d.onerror=c);var e=C.getElementsByTagName("script")[0]||C.body||C.head;e.parentNode.insertBefore(d,e);return d},Ha=function(a,b){var c=C.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);Ga(c,b);void 0!==a&&(c.src=a);return c},J=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ia=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ja=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},P=function(a){B.setTimeout(a,0)},La=function(a){var b=C.getElementById(a);if(b&&Ka(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ka(document.all[a][c],"id")==a)return document.all[a][c];return b},Ka=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ma=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},
Na=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Oa=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},Q=function(a,b,c,d,e){var f,h=a.protocol||B.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||B.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:B.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ja(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Oa(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Pa=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},R=function(a){var b=
C.createElement("a");a&&(b.href=a);return b};var Sa=function(){this.Ub=new Ca;var a=new Da;a.addAll(Qa());Ra(this,function(b){return a.get(b)})},Qa=function(){return{callInWindow:Ta,getCurrentUrl:Ua,getInWindow:Va,getReferrer:Wa,getUrlComponent:Xa,getUrlFragment:Ya,isPlainObject:Za,loadIframe:ab,loadJavaScript:bb,removeUrlFragment:cb,replaceAll:db,sendTrackingBeacon:eb,setInWindow:fb}};Sa.prototype.K=function(a){return this.Ub.K(a)};Sa.prototype.execute=Sa.prototype.K;var Ra=function(a,b){a.Ub.N("require",b)};
function Ta(a,b){for(var c=a.split("."),d=B,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==oa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(sa(arguments[f]));e.apply(d,h)}}function Ua(){return B.location.href}function Va(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=sa(b));return ta(e[d[f]])}function Wa(){return C.referrer}
function Xa(a,b,c,d,e){var f;if(d&&d instanceof u){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return Q(R(a),b,c,f,e)}function Ya(a){return Q(R(a),"fragment")}function Za(a){return a instanceof x}function ab(a,b){var c=this.A();Ha(a,function(){b instanceof v&&b.i(c)})}var ib={};
function bb(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?ib[d]?(ib[d].onSuccess.push(f),ib[d].onFailure.push(h)):(ib[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=ib[d].onSuccess,b=0;b<a.length;b++)P(a[b]);a.push=function(a){P(a);return 0}},h=function(){for(var a=ib[d].onFailure,b=0;b<a.length;b++)P(a[b]);ib[d]=null},F(a,f,h)):F(a,f,h)}function cb(a){return Pa(R(a))}function db(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function eb(a,b,c){var d=this.A();J(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function fb(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=sa(b),!0):!1};
var jb=[],kb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},lb=function(a){return kb[a]},mb=/[\x00\x22\x26\x27\x3c\x3e]/g;var qb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,rb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},sb=function(a){return rb[a]};
jb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(qb,sb)+"'"}};var tb=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;jb[9]=function(a){return String(a).replace(tb,sb)};var Bb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Db=function(a){return Cb[a]};jb[16]=function(a){return a};var Fb,Gb=[],Hb=[],Ib=[],Jb=[],Kb=[],Lb={},Mb,Nb,Ob,Pb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";if(Lb[b]){var c={},d;for(d in a)a.hasOwnProperty(d)&&0===d.indexOf("vtp_")&&(c[d]=a[d]);return Lb[b](c)}var e=new x,f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&e.set(f.substr(4),ta(a[f]));var h=Fb([b,e]);h instanceof g&&"return"===h.s&&(h=h.getData());return sa(h)},Vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=
Ub(a[e],b,c));return d},Ub=function(a,b,c){if(ia(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ub(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Gb[f];if(!h||b(h))return;c[f]=!0;try{var k=Vb(h,b,c);d=Pb(k);Ob&&(d=Ob.Kc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ub(a[l],b,c)]=Ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Ub(a[n],b,c);Nb&&(m=m||p===
Nb.ya);d.push(p)}return Nb&&m?Nb.Lc(d):d.join("");case "escape":d=Ub(a[1],b,c);if(Nb&&ia(a[1])&&"macro"===a[1][0]&&Nb.pd(a))return Nb.Cd(d);d=String(d);for(var q=2;q<a.length;q++)jb[a[q]]&&(d=jb[a[q]](d));return d;case "tag":var t=a[1];if(!Jb[t])throw Error("Unable to resolve tag reference "+t+".");return d={Ib:a[2],index:t};case "zb":var r=Wb({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");
}}return a},Wb=function(a,b,c){try{return Mb(Vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Xb=null,$b=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Xb=Yb(a);for(var e=0;e<Hb.length;e++){var f=Hb[e],h=Zb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Jb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Zb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Xb(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Xb(e[c]);if(null===d)return null;if(d)return!1}return!0};
var Yb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Wb(Ib[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var cc={},dc=null;cc.m="GTM-2MMH";var ec=null,fc="//www.googletagmanager.com/a?id="+cc.m+"&cv=347",gc={},hc={};var ic=function(){},jc=function(a){return"function"==typeof a},kc=function(a){return"string"==oa(a)},lc=function(a){return"number"==oa(a)&&!isNaN(a)},mc=function(a){return Math.round(Number(a))||0},nc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},oc=function(a){var b=[];if(ia(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},pc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},qc=function(a,b){if(!lc(a)||!lc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},rc=function(){this.prefix="gtm.";this.values={}};rc.prototype.set=function(a,b){this.values[this.prefix+a]=b};rc.prototype.get=function(a){return this.values[this.prefix+a]};rc.prototype.contains=function(a){return void 0!==this.get(a)};var sc=function(){var a=dc.sequence||0;dc.sequence=a+1;return a},tc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},uc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var S=function(){var a=function(a){return{toString:function(){return a}}};return{rb:a("convert_case_to"),sb:a("convert_false_to"),tb:a("convert_null_to"),ub:a("convert_true_to"),vb:a("convert_undefined_to"),I:a("function"),bc:a("instance_name"),cc:a("live_only"),ec:a("malware_disabled"),fc:a("once_per_event"),xb:a("once_per_load"),yb:a("setup_tags"),gc:a("tag_id"),zb:a("teardown_tags")}}();var vc=new rc,wc={},zc={set:function(a,b){ra(xc(a,b),wc)},get:function(a){return yc(a,2)},reset:function(){vc=new rc;wc={}}},yc=function(a,b){return 2!=b?vc.get(a):Ac(a)},Ac=function(a,b,c){var d=a.split(".");return Cc(d)},Cc=function(a){for(var b=wc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Ec=function(a,b){vc.set(a,b);ra(xc(a,b),wc)},xc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Hc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ic={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Jc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Kc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Lc=function(a){var b=yc("gtm.whitelist");var c=b&&Kc(oc(b),
Ic),d=yc("gtm.blacklist")||yc("tagTypeBlacklist")||[];Hc.test(B.location&&B.location.hostname)&&(d=oc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Kc(oc(d),Jc),f={};return function(h){var k=h&&h[S.I];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=hc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ja(c,k))if(l&&0<l.length)for(var p=
0;p<l.length;p++){if(0>ja(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var t;if(!(t=0<=ja(e,k)))a:{for(var r=l||[],w=new rc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){t=!0;break a}t=!1}q=t}return f[k]=!m||q}};var Mc={Kc:function(a,b){b[S.rb]&&"string"===typeof a&&(a=1==b[S.rb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(S.tb)&&null===a&&(a=b[S.tb]);b.hasOwnProperty(S.vb)&&void 0===a&&(a=b[S.vb]);b.hasOwnProperty(S.ub)&&!0===a&&(a=b[S.ub]);b.hasOwnProperty(S.sb)&&!1===a&&(a=b[S.sb]);return a}};var Nc=function(a){var b=dc.zones;!b&&a&&(b=dc.zones=a());return b},Oc={active:!0,isWhitelisted:function(){return!0}};var Pc=!1,Qc=0,Rc=[];function Sc(a){if(!Pc){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Pc=!0;for(var e=0;e<Rc.length;e++)P(Rc[e])}Rc.push=function(){for(var a=0;a<arguments.length;a++)P(arguments[a]);return 0}}}function Tc(){if(!Pc&&140>Qc){Qc++;try{C.documentElement.doScroll("left"),Sc()}catch(a){B.setTimeout(Tc,50)}}}var Uc=function(a){Pc?a():Rc.push(a)};var Vc=!1,Wc=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Xc=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}return B[b]},Yc=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Wc();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var bd=function(){return"&tc="+Jb.filter(function(a){return a}).length},cd="0.005000">Math.random(),dd="",ed=function(){dd=[fc,"&v=3&t=t","&pid="+qc(),"&rv=5o"].join("")},fd={},gd="",hd=void 0,id={},jd={},kd=void 0,ld=2,md=1E3,nd=function(){ld=2},od=function(){var a=hd;return void 0===a?"":[dd,fd[a]?"":"&es=1",id[a],bd(),gd,"&z=0"].join("")},pd=function(){kd&&(B.clearTimeout(kd),kd=void 0);void 0===hd||fd[hd]&&!gd||(jd[hd]||0>=ld--||0>=md--?jd[hd]=!0:(J(od()),fd[hd]=
!0,gd=""))},qd=function(a,b,c){if(cd&&!jd[a]&&b){a!==hd&&(pd(),hd=a);var d=c+String(b[S.I]||"").replace(/_/g,"");gd=gd?gd+"."+d:"&tr="+d;kd||(kd=B.setTimeout(pd,500));2022<=od().length&&pd()}};function rd(a,b,c,d,e,f){var h=Jb[a],k=sd(a,b,c,d,e,f);if(!k)return null;var l=Ub(h[S.yb],f.R,[]);if(l&&l.length){var m=l[0];k=rd(m.index,b,k,1===m.Ib?e:k,e,f)}return k}
function sd(a,b,c,d,e,f){function h(){var b=Vb(k,f.R);b.vtp_gtmOnSuccess=function(){qd(f.id,Jb[a],"5");c()};b.vtp_gtmOnFailure=function(){qd(f.id,Jb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[S.ec])d();else{qd(f.id,k,"1");try{Pb(b)}catch(E){qd(f.id,
k,"7");e()}}}var k=Jb[a];if(f.R(k))return null;var l=Ub(k[S.zb],f.R,[]);if(l&&l.length){var m=l[0],n=rd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Ib?e:n}if(k[S.xb]||k[S.fc]){var p=k[S.xb]?Kb:b,q=c,t=d;if(!p[a]){h=uc(h);var r=td(a,p,h);c=r.H;d=r.S}return function(){p[a](q,t)}}return h}function td(a,b,c){var d=[],e=[];b[a]=ud(d,e,c);return{H:function(){b[a]=vd;for(var c=0;c<d.length;c++)d[c]()},S:function(){b[a]=wd;for(var c=0;c<e.length;c++)e[c]()}}}
function ud(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function vd(a){a()}function wd(a,b){b()};function xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return uc(function(){b++;d&&b>=c&&a()})},rc:function(){d=!0;b>=c&&a()}}}function yd(a,b){if(!cd)return;var c=function(a){var d=b.R(Jb[a])?"3":"4",f=Ub(Jb[a][S.yb],b.R,[]);f&&f.length&&c(f[0].index);qd(b.id,Jb[a],d);var h=Ub(Jb[a][S.zb],b.R,[]);h&&h.length&&c(h[0].index)};c(a);}var zd=!1;var Ad=function(a,b){var c={};c[S.I]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Jb.push(c);return Jb.length-1};var Bd=/[A-Z]+/,Cd=/\s/,Dd=function(a){if(kc(a)&&(a=a.trim(),!Cd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Bd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}};var Ed=null,Fd={},Gd={},Hd;function Id(){Ed=Ed||!dc.gtagRegistered;dc.gtagRegistered=!0;return Ed}var Jd=function(a,b){var c={event:a};b&&(c.eventModel=ra(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Kd(a){if(void 0===Gd[a.id]){var b;if("UA"==a.prefix)b=Ad("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Ad("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Ad("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Ad("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Ad("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Hd){var c={name:"send_to",dataLayerVersion:2},d={};d[S.I]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Gb.push(d);Hd=["macro",Gb.length-1]}var f={arg0:Hd,
arg1:a.id,ignore_case:!1};f[S.I]="_lc";Ib.push(f);var h={"if":[Ib.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Hb.push(h);Gd[a.id]=b}}
var Md={event:function(a){var b=a[1];if(kc(b)&&!(3<a.length)){var c;if(2<a.length){if(!qa(a[2]))return;c=a[2]}var d=Jd(b,c);return d}},set:function(a){var b;2==a.length&&qa(a[1])?
b=ra(a[1],void 0):3==a.length&&kc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=ra(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Ld=uc(function(){});var Ud=!1,Vd=[];function Wd(){if(!Ud){Ud=!0;for(var a=0;a<Vd.length;a++)P(Vd[a])}};var Xd=[],Yd=!1,Zd=function(a){var b=a.eventCallback,c=uc(function(){jc(b)&&P(function(){b(cc.m)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c},$d=function(){for(var a=!1;!Yd&&0<Xd.length;){Yd=!0;delete wc.eventModel;var b=Xd.shift();if(jc(b))try{b.call(zc)}catch(Nd){}else if(ia(b)){var c=b;if(kc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=yc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Nd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&kc(l[0])){var m=Md[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){Yd=!1;continue}}var n;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&Ec(p,void 0),Ec(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=sc(),q["gtm.uniqueEventId"]=w,Ec("gtm.uniqueEventId",w));ec=r;var E;var K,A,N=q,D=N.event,O=N["gtm.uniqueEventId"],I=dc.zones;A=I?I.checkState(cc.m,O):Oc;if(A.active){var L=Zd(N);c:{var H=
A.isWhitelisted;if("gtm.js"==D){if(zd){K=!1;break c}zd=!0}var M=O,G=D;if(cd&&!(0>=md)&&hd!==M){pd();hd=M;gd="";var U=id,Z=M,ma,za=G;ma=0===za.indexOf("gtm.")?encodeURIComponent(za):"*";U[Z]="&e="+ma+"&eid="+M;kd||(kd=B.setTimeout(pd,500))}var gb=Lc(H),$a={id:O,name:D,Ec:L||ic,R:gb,La:$b(gb)};for(var Fc,Rb=$a,Qd=xd(Rb.Ec),Af=[],Sb=[],hb=0;hb<Jb.length;hb++)if(Rb.La[hb]){var Bf=Jb[hb];var vb=Qd.add();try{var Rd=rd(hb,Af,vb,vb,vb,Rb);Rd?Sb.push(Rd):(yd(hb,Rb),vb())}catch(Nd){vb()}}Qd.rc();for(var Gc=0;Gc<Sb.length;Gc++)Sb[Gc]();Fc=0<Sb.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Fc){for(var Cf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Tb=0;Tb<$a.La.length;Tb++)if($a.La[Tb]){var Td=Jb[Tb];if(Td&&!Cf[Td[S.I]]){K=!0;break c}}K=!1}else K=Fc}E=K?!0:!1}else E=!1;ec=null;n=E}else n=!1;a=n||a}Yd=!1}return!a},ae=function(){var a=$d();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[cc.m]&&b.end){b[cc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},be=function(){var a=Fa("dataLayer",[]),b=Fa("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Rc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Vd.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Xd.push.apply(Xd,b);300<this.length;)this.shift();return $d()};Xd.push.apply(Xd,a.slice(0));
P(ae)};var ce={};ce.ya=new String("undefined");ce.Pa={};var de=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ce.ya?b:a[d]);return c.join("")}};de.prototype.toString=function(){return this.resolve("undefined")};de.prototype.valueOf=de.prototype.toString;ce.Lc=function(a){return new de(a)};var ee={};ce.Id=function(a,b){var c=sc();ee[c]=[a,b];return c};ce.Eb=function(a){var b=a?0:1;return function(a){var c=ee[a];if(c&&"function"===typeof c[b])c[b]();ee[a]=void 0}};
ce.pd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ce.Cd=function(a){if(a===ce.ya)return a;var b=sc();ce.Pa[b]=a;return'google_tag_manager["'+cc.m+'"].macro('+b+")"};ce.hc=de;var fe=new rc,ge=function(a,b){function c(a){var b=R(a),c=Q(b,"protocol"),d=Q(b,"host",!0),e=Q(b,"port"),f=Q(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function he(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=ja(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=fe.get(q);t||(t=new RegExp(c,p),fe.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ge(b,c)}return!1};function ie(a,b,c,d){return(d||"https:"==B.location.protocol?a:b)+c}function je(a,b){for(var c=b||(a instanceof u?new u:new x),d=a.M(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof u?(c.get(f)instanceof u||c.set(f,new u),je(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),je(h,c.get(f))):c.set(f,h)}}return c}function ke(){return cc.m}function le(){return(new Date).getTime()}function me(a,b){return ta(yc(a,b||2))}function ne(){return ec}
function oe(a){return Na('<a href="'+a+'"></a>')[0].href}function pe(a){return mc(sa(a))}function qe(a){return null===a?"null":void 0===a?"undefined":a.toString()}function re(a,b){return qc(a,b)}function se(a,b,c){if(!(a instanceof u))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var te=function(){var a=new Da;a.addAll(Qa());a.addAll({buildSafeUrl:ie,decodeHtmlUrl:oe,copy:je,generateUniqueNumber:sc,getContainerId:ke,getCurrentTime:le,getDataLayerValue:me,getEventName:ne,makeInteger:pe,makeString:qe,randomInteger:re,tableToMap:se});return function(b){return a.get(b)}};var ue=new Sa,ve=function(){var a=data.runtime||[];Fb=function(a){return ue.K(a)};Mb=he;Ra(ue,te());for(var b=0;b<a.length;b++){var c=a[b];if(!ia(c)||3>c.length){if(0==c.length)continue;break}ue.K(c)}};var we=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var xe=function(a){return encodeURIComponent(a)},ye=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=Q(R(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var T=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},ze=function(a,b){ra(a,b)},Ae=function(a){return mc(a)},Be=function(a,b){return ja(a,b)};var Ce=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ka(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},De=function(a){dc.hasOwnProperty("autoEventsSettings")||(dc.autoEventsSettings={});var b=dc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ee=function(a,b,c,d){var e=De(a),f=tc(e,b,d);e[b]=
c(f)},Fe=function(a,b,c){var d=De(a);return tc(d,b,c)};var Ge=/(^|\.)doubleclick\.net$/i,He=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ie=function(a,b,c){for(var d=String(b||C.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=pc(h[0]);if(k&&k==a){var l=pc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Je=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=Q(B.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=C.cookie,t=0;t<k.length;t++){var r=h,w=k[t],E=c;if(Ge.test(B.location.hostname)||"/"==E&&He.test(w))break;"none"!=k[t]&&(r+="domain="+k[t]+";");C.cookie=r;if(q!=C.cookie||0<=ja(Ie(a),b))break}};var Ke=!1;if(C.querySelectorAll)try{var Le=C.querySelectorAll(":root");Le&&1==Le.length&&Le[0]==C.documentElement&&(Ke=!0)}catch(a){}var Me=Ke;var Ne=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Qe=function(a,b,c){var d=Oe(a);if(1===d.length)return d[0].id;if(0!==d.length){d=Pe(d,function(a){return a.Tc},b);if(1===d.length)return d[0].id;d=Pe(d,function(a){return a.Ad},c);return d[0]?d[0].id:void 0}},Te=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(Re.test(document.location.hostname)||"/"===h&&
Se.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var t=q[q.length-1];if(parseInt(t,10).toString()===t){n=["none"];break a}}for(var r=q.length-2;0<=r;r--)p.push(q.slice(r).join("."));p.push("none");n=p}for(var w=n,E=0;E<w.length&&!m;E++)m=Te(a,b,c,w[E],e);return m}d&&"none"!==
d&&(l+="domain="+d+";");var K=document.cookie;document.cookie=l;return K!=document.cookie||0<=Ne(a).indexOf(b)};function Pe(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Oe(a){for(var b=Ue,c=[],d=Ne(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Tc:1*k[0]||1,Ad:1*k[1]||1}))}}return c}
var Se=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Re=/(^|\.)doubleclick\.net$/i;var Ve=window,We=document;function Xe(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function Ye(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Ue=["1"],Ze={},$e=function(a){return Ze[(void 0===a?"_gcl":a)+"_dcu"]},bf=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d,e=void 0===a?"_gcl":a;d=(void 0===e?"_gcl":e)+"_dcu";if(!Ze[d]&&!af(d,b,c)){for(var f,h=Ve.navigator.userAgent+(We.cookie||"")+(We.referrer||""),k=h.length,l=Ve.history.length;0<l;)h+=l--^k++;var m=1,n,p,q;if(h)for(m=0,p=h.length-1;0<=p;p--)q=h.charCodeAt(p),m=(m<<6&268435455)+q+(q<<14),n=m&266338304,m=0!=n?m^n>>21:m;var t=[Math.round(2147483647*Math.random())^
m&2147483647,Math.round(Date.now()/1E3)].join("."),r=""+Xe(void 0),w=Ye(void 0);1<w&&(r+="-"+w);f=["1",r,t].join(".");Te(d,f,c,b,7776E6);af(d,b,c)}};function af(a,b,c){var d,e=Xe(b);(d=Qe(a,e,Ye(c)))&&(Ze[a]=d);return d};var cf=function(a){for(var b=[],c=C.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var df=/^\w+$/,ef=/^[\w-]+$/,ff=/^\d+\.fls\.doubleclick\.net$/;function gf(a){return a&&"string"==typeof a&&a.match(df)?a:"_gcl"}function hf(a){if(a){if("string"==typeof a){var b=gf(a);return{la:b,ka:b}}if(a&&"object"==typeof a)return{la:gf(a.dc),ka:gf(a.aw)}}return{la:"_gcl",ka:"_gcl"}}function jf(a){var b=R(B.location.href),c=Q(b,"host",!1);if(c&&c.match(ff)){var d=Q(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function kf(a){return a.filter(function(a){return ef.test(a)})}var mf=function(a){var b=jf("gclaw");if(b)return b.split(".");var c=hf(a);if("_gcl"==c.ka){var d=lf();if(d&&(null==d.G||"aw.ds"==d.G))return[d.ba]}return kf(cf(c.ka+"_aw"))},nf=function(a){var b=jf("gcldc");if(b)return b.split(".");var c=hf(a);if("_gcl"==c.la){var d=lf();if(d&&("ds"==d.G||"aw.ds"==d.G))return[d.ba]}return kf(cf(c.la+"_dc"))};
function lf(){var a=R(B.location.href),b=Q(a,"query",!1,void 0,"gclid"),c=Q(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=Q(a,"fragment");b=b||Oa(d,"gclid");c=c||Oa(d,"gclsrc")}return void 0!==b&&b.match(ef)?{ba:b,G:c}:null}
var of=function(a,b,c){var d=hf(a);c=c||"auto";b=b||"/";var e=lf();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ba].join(".");e.G&&"aw.ds"!=e.G||Je(d.ka+"_aw",k,b,c,h,!0);"aw.ds"!=e.G&&"ds"!=e.G||Je(d.la+"_dc",k,b,c,h,!0)}},pf=function(){var a=jf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({lb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].lb]||(h[b[k].lb]=[]),h[b[k].lb].push({timestamp:l[1],ba:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],t=0;t<q.length;t++)p.push(q[t].ba);p=kf(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},qf=function(a,b,c){};var rf;a:{rf="G"}var sf={"":"n",UA:"u",AW:"a",DC:"d",GTM:rf},tf=function(a){var b=cc.m.split("-"),c=b[0].toUpperCase();return(sf[c]||"i")+"5o"+(a&&"GTM"===c?b[1]:"")};var Df=!!B.MutationObserver,Ef=void 0,Ff=function(a){if(!Ef){var b=function(){var a=C.body;if(a)if(Df)(new MutationObserver(function(){for(var a=0;a<Ef.length;a++)P(Ef[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ia(a,"DOMNodeInserted",function(){b||(b=!0,P(function(){b=!1;for(var a=0;a<Ef.length;a++)P(Ef[a])}))})}};Ef=[];C.body?b():P(b)}Ef.push(a)};var Pf="www.googletagmanager.com/gtm.js";
var Qf=Pf,Rf=function(a,b,c,d){Ia(a,b,c,d)},Sf=function(a,b){return B.setTimeout(a,b)},Tf=function(a,b,c){F(a,b,c)},Uf={},Vf=function(a,b,c){var d=Uf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.$b:a.Hb,d=0;d<c.length;d++)B.setTimeout(c[d],0)}};d={status:1,$b:[],Hb:[],Md:void 0};d.pe=F(a,e(d,2),e(d,3));Uf[a]=d}0===d.status&&(d.Md(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.$b.push(b),c&&d.Hb.push(c))},Wf=function(){return B.location.href},
Xf=function(a){return Q(R(a),"fragment")},V=function(a,b){return yc(a,b||2)},Yf=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Zf=function(a,b){B[a]=b},W=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},$f=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},X=function(a,b,c,d){var e=!d&&"http:"==
B.location.protocol;e&&(e=2!==ag());return(e?b:a)+c};
var bg=function(a){var b=0;return b},cg=function(a){},dg=function(a){var b=!1;return b},eg=function(a,b){var c;a:{if(a&&
ia(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},fg=function(a,b,c,d){Ee(a,b,c,d)},gg=function(a,b,c){return Fe(a,b,c)},hg=function(a){return!!Fe(a,"init",!1)},ig=function(a){De(a).init=!0};
var ag=function(){var a=Qf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=C.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var lg=function(a,b){var c=Qf+"?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var d in b)b[d]&&b.hasOwnProperty(d)&&(c+="&"+d+"="+encodeURIComponent(b[d]));var e=X("https://","http://",c);F(e,void 0,void 0)};
var ng=function(a,b,c){a instanceof ce.hc&&(a=a.resolve(ce.Id(b,c)),b=ic);return{Xa:a,H:b}};var og=function(a,b,c){var d=(new Date).getTime();this.n=a;this.t=d;this.p=b;this.u=c},pg=function(){this.c=1;this.e=[];this.p=null};function qg(a){var b=dc,c=b.gss=b.gss||{};return c[a]=c[a]||new pg}var rg=function(a,b){qg(a).p=b},sg=function(a){};var tg=function(a){};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0})(function(){return ec})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0})(function(a){var b=V("gtm.referrer",1)||C.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=R(String(b));d=Q(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Pa(R(String(b)));c=d}else c=String(b);return c})}();
Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0})(function(a){var b=V("gtm.cookie",1);return Ie(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0})(function(a){return qc(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){(function(a){Y.__u=a;Y.__u.b="u";Y.__u.g=!0})(function(a){var b;b=(b=a.vtp_customUrlSource?a.vtp_customUrlSource:V("gtm.url",1))||Wf();var c=a.vtp_component,d;if(c&&"URL"!=c){var e=R(String(b));d=Q(e,c,"HOST"==c?a.vtp_stripWww:void 0,"PATH"==c?a.vtp_defaultPages:void 0,"QUERY"==c?a.vtp_queryKey:void 0)}else d=Pa(R(String(b)));return d})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Y.a.ua=["google"],function(){var a;(function(a){Y.__ua=a;Y.__ua.b="ua";Y.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;ze(T(k.vtp_fieldsToSet,"fieldName","value"),d);ze(T(k.vtp_contentGroup,"index","group"),e);ze(T(k.vtp_dimension,"index","dimension"),f);ze(T(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=ra(k,void 0);b=ra(b,l)}ze(T(b.vtp_fieldsToSet,
"fieldName","value"),d);ze(T(b.vtp_contentGroup,"index","group"),e);ze(T(b.vtp_dimension,"index","dimension"),f);ze(T(b.vtp_metric,"index","metric"),h);var m=Xc(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+sc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},t={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&
r("set",a+c,b[c])},K=function(){},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===
q[e])){var f=t[e]?nc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},N={name:p};A(d,N,!0);m("create",b.vtp_trackingId||c.trackingId,N);r("set","&gtm",tf(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var O;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;jc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),K());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(Ae,b.vtp_eventValue||
c.value)};A(O,I,!1);r("send",I);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),K());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ma})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ma}));O?r("send","pageview",O):r("send","pageview");b.vtp_autoLinkDomains&&Yc(n,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var za=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(za="internal/"+za);a=!0;Vf(X("https:","http:","//www.google-analytics.com/"+za,d&&d.forceSSL),function(){var a=Wc();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0})(function(a){var b=ra(a,void 0),c=b;c[S.I]=null;c[S.bc]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0})(function(a){var b=a.vtp_input,c=T(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0})(function(a){P(a.vtp_gtmOnFailure)})}();
Y.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Ga(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){P(h)}}};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,f=ng(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xa,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Na(h),k,e)()}else Sf(function(){c(d)},200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0}();



var ug={macro:function(a){if(ce.Pa.hasOwnProperty(a))return ce.Pa[a]}};ug.dataLayer=zc;ug.onHtmlSuccess=ce.Eb(!0);ug.onHtmlFailure=ce.Eb(!1);ug.callback=function(a){gc.hasOwnProperty(a)&&jc(gc[a])&&gc[a]();delete gc[a]};ug.xc=function(){dc[cc.m]=ug;hc=Y.a;Nb=Nb||ce;Ob=Mc};
ug.ld=function(){dc=B.google_tag_manager=B.google_tag_manager||{};if(dc[cc.m]){var a=dc.zones;a&&a.unregisterChild(cc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Gb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Jb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Ib.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Hb.push(p)}Lb=Y;ve();ug.xc();be();Pc=!1;Qc=0;if("interactive"==
C.readyState&&!C.createEventObject||"complete"==C.readyState)Sc();else{Ia(C,"DOMContentLoaded",Sc);Ia(C,"readystatechange",Sc);if(C.createEventObject&&C.documentElement.doScroll){var t=!0;try{t=!B.frameElement}catch(w){}t&&Tc()}Ia(B,"load",Sc)}Ud=!1;"complete"===C.readyState?Wd():Ia(B,"load",Wd);a:{
if(!cd)break a;ed();ld=2;hd=void 0;id={};fd={};kd=void 0;jd={};gd="";B.setInterval(ed,864E5);B.setInterval(nd,1E3);}}};ug.ld();

})()
