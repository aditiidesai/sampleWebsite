//tealium universal tag - utag.84 ut4.0.202504290050, Copyright 2025 Tealium.com Inc. All Rights Reserved.
var dotq=dotq||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={"yahooPixelId":"pixelId","yahooEventCategory":"ec"};u.extend=[function(a,b){try{if(1){if(b["ev.aemAnalyticsAbort"]&&b["ev.aemAnalyticsAbort"]==="true"){return false;}}}catch(e){utag.DB(e)}},function(a,b){try{if((/business-flyer\/partners-and-offers\/cards-payments-transactions\/amex-velocity-business-card-offer/i.test(b['dom.url'])&&b['ut.event']=='link'&&/true/i.test(b['partnerLeadsFlag'])&&/american ?express/i.test(b['ev.aemPartnerName']))){b['yahooEventCategory']='VFF_Clickout'}}catch(e){utag.DB(e);}}];u.send=function(utag_event,data_layer){if(u.ev[utag_event]||u.ev.all!==undefined){utag.DB("send:84");utag.DB(data_layer);var a,b,c,d;a=utag_event;b=data_layer;u.data={base_url:"https://s.yimg.com/wi/ytc.js",projectId:"10000",pixelId:"10188993",coloId:"SP",qstrings:{},tagid:"",et:"custom",ec:"",ea:"",el:"",ev:"",gv:"",product_id:[],timestamp:"",advertiser_id:""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:84:EXTENSIONS");utag.DB(data_layer);for(var mapping_key in utag.loader.GV(u.map)){if(data_layer[mapping_key]!==undefined&&data_layer[mapping_key]!==""){var destinations=u.map[mapping_key].split(",");for(var i=0;i<destinations.length;i++){u.data[destinations[i]]=data_layer[mapping_key];}}}
utag.DB("send:84:MAPPINGS");utag.DB(u.data);u.data.order_subtotal=u.data.order_subtotal||data_layer._csubtotal||"";if(u.data.product_id.length===0&&data_layer._cprod!==undefined){u.data.product_id=data_layer._cprod.slice(0);}
if(utag.ut.typeOf(u.data.pixelId)==="string"&&u.data.pixelId!==""){u.data.pixelId=u.data.pixelId.replace(/\s/g,"").split(",");}
if(utag.ut.typeOf(u.data.et)==="string"&&u.data.et!==""){u.data.et=u.data.et.replace(/\s/g,"").split(",");}
if(utag.ut.typeOf(u.data.ec)==="string"&&u.data.ec!==""){u.data.ec=u.data.ec.replace(/\s/g,"").split(",");}
if(utag.ut.typeOf(u.data.ea)==="string"&&u.data.ea!==""){u.data.ea=u.data.ea.replace(/\s/g,"").split(",");}
if(utag.ut.typeOf(u.data.el)==="string"&&u.data.el!==""){u.data.el=u.data.el.replace(/\s/g,"").split(",");}
if(utag.ut.typeOf(u.data.ev)==="string"&&u.data.ev!==""){u.data.ev=u.data.ev.replace(/\s/g,"").split(",");}
if(u.data.pixelId){for(i=0;i<u.data.pixelId.length;i++){dotq.push({projectId:u.data.projectId,properties:clearEmptyKeys({pixelId:u.data.pixelId[i],qstrings:u.data.qstrings,userEmail:u.data.userEmail,userHashedEmail:u.data.userHashedEmail})});}}
if(u.initialized){loaderCallback();}else{u.queue.push({"data":u.data});if(!u.scriptrequested){u.scriptrequested=true;utag.ut.loader({"type":"script","src":u.data.base_url,"cb":callback,"loc":"script","id":"utag_84","attrs":{}});}}
utag.DB("send:84:COMPLETE");}};function loaderCallback(){utag.DB("send:84:CALLBACK");u.initialized=true;if(u.data.pixelId){for(var i=0;i<u.data.pixelId.length;i++){var eventIdData={};eventIdData.qstrings={};if(u.data.et[i]&&u.data.et.length===u.data.pixelId.length){eventIdData.qstrings.et=u.data.et[i];if(u.data.product_id[i]&&u.data.product_id[i]!==""){eventIdData.qstrings.product_id=u.data.product_id[i];}
if(u.data.timestamp&&u.data.timestamp!==""){eventIdData.qstrings.timestamp=u.data.timestamp;}
if(u.data.advertiser_id&&u.data.advertiser_id!==""){eventIdData.qstrings.advertiser_id=u.data.advertiser_id;}}
if(u.data.ec[i]&&u.data.ec.length===u.data.pixelId.length){eventIdData.qstrings.ec=u.data.ec[i];}
if(u.data.ea[i]&&u.data.ea.length===u.data.pixelId.length){eventIdData.qstrings.ea=u.data.ea[i];u.data.gv=u.data.gv||u.data.order_subtotal||"";if(u.data.gv&&u.data.ea[i].toLowerCase()==="purchase".toLowerCase()){var gv=parseFloat(u.data.gv,10);if(!isNaN(gv)){eventIdData.qstrings.ev=gv;}}}
if(u.data.el[i]&&u.data.el.length===u.data.pixelId.length){eventIdData.qstrings.el=u.data.el[i];}
if(u.data.ev[i]&&u.data.ev.length===u.data.pixelId.length){eventIdData.qstrings.ev=u.data.ev[i];}
dotq[i].properties.qstrings=clearEmptyKeys(eventIdData.qstrings);}
YAHOO.ywa.I13N.fireBeacon(dotq);}
utag.DB("send:84:CALLBACK:COMPLETE");}
function callback(){var data={};while(data=u.queue.shift()){u.data=data.data;loaderCallback();}}
function clearEmptyKeys(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;}
utag.o[loader].loader.LOAD(id);}("84","virgin.velocity"));}catch(error){utag.DB(error);}
