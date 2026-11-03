/* Health Connect sync for My Workouts. Put this file in www/ and add
   <script src="health_sync.js"></script> after plan_v4.js in index.html */
var HC=null;
function hcPlugin(){
  if(!HC&&window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()){
    try{HC=Capacitor.registerPlugin('HealthConnect')}catch(e){}
  }
  return HC;
}
var HC_TYPES=['Steps','HeartRateSeries','ActiveCaloriesBurned'];

async function hcConnect(){
  var p=hcPlugin(); if(!p) return {ok:false,msg:'Not running inside the Android app'};
  try{
    var a=await p.checkAvailability();
    if(a.availability!=='Available'){
      if(a.availability==='NotInstalled') return {ok:false,msg:'Install Health Connect from Play Store first'};
      return {ok:false,msg:'Health Connect not supported on this phone'};
    }
    await p.requestHealthPermissions({read:HC_TYPES,write:[]});
    return {ok:true};
  }catch(e){return {ok:false,msg:String(e&&e.message||e)}}
}

/* Reads the last `days` days (default 1). Returns {steps, avgHr, maxHr, kcal, hrSamples} */
async function hcRead(days){
  var p=hcPlugin(); if(!p) throw new Error('No plugin');
  var end=new Date(), start=new Date(end.getTime()-(days||1)*86400000);
  var f={type:'between',startTime:start.toISOString(),endTime:end.toISOString()};
  var out={steps:0,avgHr:0,maxHr:0,kcal:0,hrSamples:[]};

  var st=await p.readRecords({type:'Steps',timeRangeFilter:f});
  (st.records||[]).forEach(function(r){out.steps+=r.count||0});

  var hr=await p.readRecords({type:'HeartRateSeries',timeRangeFilter:f});
  var sum=0,n=0;
  (hr.records||[]).forEach(function(r){(r.samples||[]).forEach(function(s){
    sum+=s.beatsPerMinute;n++;if(s.beatsPerMinute>out.maxHr)out.maxHr=s.beatsPerMinute;
    out.hrSamples.push({t:s.time,bpm:s.beatsPerMinute});
  })});
  out.avgHr=n?Math.round(sum/n):0;

  var ca=await p.readRecords({type:'ActiveCaloriesBurned',timeRangeFilter:f});
  (ca.records||[]).forEach(function(r){
    var e=r.energy||{}; out.kcal+= e.unit==='kilocalories'?e.value:(e.unit==='calories'?e.value/1000:0);
  });
  out.kcal=Math.round(out.kcal);
  return out;
}

/* Quick test: call from a button -> hcTest() */
async function hcTest(){
  var c=await hcConnect(); if(!c.ok){alert(c.msg);return}
  try{var d=await hcRead(1);alert('Steps '+d.steps+'\nAvg HR '+d.avgHr+'\nMax HR '+d.maxHr+'\nKcal '+d.kcal)}
  catch(e){alert('Read failed: '+(e.message||e))}
}
