const locations=[
{id:'anenuma_ice',lat:40.749,lon:141.322,label:'青森｜姉沼｜氷上',water:'姉沼',style:'氷上',months:[1,2],shelf:'浅場中心',rig:'短め 4〜6本針',sinker:'2〜4g',bait:'白サシ・紅サシ',tip:'繊細〜中間',baseCatch:120,exposure:'outdoor',special:'当たり年は短時間でも爆発。不調年は一気に沈黙。',localItems:['カイロ','甘い缶コーヒー']},
{id:'gandoko_ice',lat:39.804,lon:141.149,label:'岩手｜岩洞湖｜氷上',water:'岩洞湖',style:'氷上',months:[1,2,3],shelf:'浅場か深場を神託',rig:'標準〜多点掛け',sinker:'3〜5g',bait:'白サシ・紅サシ',tip:'先調子〜中間',baseCatch:140,exposure:'ice',special:'同じ穴2日目は落ちやすい。ただしごく稀に禁忌が奇跡になる。',localItems:['ソフトクリーム','予備バッテリー']},
{id:'gandoko_dome',lat:39.804,lon:141.149,label:'岩手｜岩洞湖｜ドーム船',water:'岩洞湖',style:'ドーム船',months:[11,12,1,2,3],shelf:'底中心',rig:'5〜7本針',sinker:'4〜5g',bait:'白サシ・紅サシ',tip:'柔らかめ〜中間',baseCatch:45,exposure:'dome',special:'暖かさと釣果は比例しない修行枠。',localItems:['温かいココア','ソフトクリーム']},
{id:'sai_ice',lat:39.741,lon:141.378,label:'岩手｜菜魚湖・大志田ダム｜氷上',water:'菜魚湖・大志田ダム',style:'氷上',months:[1,2],shelf:'底中心',rig:'標準 5本前後',sinker:'3〜5g',bait:'サシ系',tip:'中間',baseCatch:90,exposure:'ice',special:'年ごとの開催状況に左右される。まずは現地確認が吉。',localItems:['湯たんぽ','カップ麺']},
{id:'hanayama_dome',lat:38.789,lon:140.857,label:'宮城｜花山湖｜ドーム船',water:'花山湖',style:'ドーム船',months:[11,12,1,2,3],shelf:'底〜中層の空中戦',rig:'底なら短め5本 / 中層なら長め7本',sinker:'赤 5〜7g',bait:'赤虫・紅サシ',tip:'連掛け向き・やや硬め',baseCatch:180,exposure:'dome',special:'蛍光オモリは嫌われがち。赤オモリが基本。マッチ棒サイズの小型が多い。',localItems:['天丼','自然薯の館','土井工房の針外し']},
{id:'minamikawa_bridge',lat:38.411,lon:140.905,label:'宮城｜南川ダム｜橋上',water:'南川ダム',style:'橋上',months:[10,11,12,1,2],shelf:'底中心',rig:'長め 4〜8本針',sinker:'7〜24g',bait:'何でもあり',tip:'硬め＋30cm延長吉',baseCatch:95,exposure:'outdoor',special:'朝、特に8時前が強い。風が吹くと一気に難化。',localItems:['コーヒー牛乳','防風手袋','南川会の最新投稿']},
{id:'wakuya_pier',lat:38.543,lon:141.134,label:'宮城｜涌谷町釣り公園｜桟橋',water:'涌谷町釣り公園',style:'桟橋',months:[10,11,12,1,2],shelf:'魚探シューティング',rig:'5本針前後',sinker:'3〜5g',bait:'白サシ',tip:'ガチガチ',baseCatch:18,exposure:'outdoor',special:'大型しか釣れない。猫は釣れてる人の後ろに張り付く。',localItems:['蓋付き魚入れ','白サシ']},
{id:'towada_dome',lat:40.442,lon:140.887,label:'秋田｜十和田湖・小坂側｜ドーム船',water:'十和田湖・小坂側',style:'ドーム船',months:[11,12,1,2,3],shelf:'深場中心',rig:'標準 5〜7本針',sinker:'4〜6g',bait:'サシ系',tip:'中間',baseCatch:60,exposure:'dome',special:'新しい釣り場。定番はまだ育成中。風で運休しやすい。',localItems:['温泉','甘酒']},
{id:'hibara_s_dome',lat:37.689,lon:140.071,label:'福島｜桧原湖南部｜屋形・ドーム',water:'桧原湖南部',style:'屋形・ドーム',months:[11,12,1,2,3],shelf:'底中心',rig:'標準〜短め',sinker:'3〜5g',bait:'白サシ・紅サシ・赤虫',tip:'繊細〜中間',baseCatch:85,exposure:'dome',special:'基本は底釣り。食い渋り時は小針と小さな誘いが吉。',localItems:['ソースカツ丼','目黒の釣果情報']},
{id:'hibara_s_ice',lat:37.689,lon:140.071,label:'福島｜桧原湖南部｜氷上',water:'桧原湖南部',style:'氷上',months:[1,2,3],shelf:'底中心',rig:'標準〜短め',sinker:'3〜5g',bait:'白サシ・紅サシ・赤虫',tip:'繊細〜中間',baseCatch:110,exposure:'ice',special:'基本は底釣り。終盤はさらに底が強くなる。',localItems:['ソースカツ丼','ホッカイロ']},
{id:'hibara_n_dome',lat:37.735,lon:140.056,label:'福島｜桧原湖北部｜屋形・ドーム',water:'桧原湖北部',style:'屋形・ドーム',months:[11,12,1,2,3],shelf:'底中心',rig:'短ハリス気味',sinker:'4〜5g',bait:'白サシ・紅サシ',tip:'繊細',baseCatch:75,exposure:'dome',special:'南部より小型傾向。小針と丁寧な釣りが合う。',localItems:['ミルクティー','ソースカツ丼']},
{id:'hibara_n_ice',lat:37.735,lon:140.056,label:'福島｜桧原湖北部｜氷上',water:'桧原湖北部',style:'氷上',months:[1,2,3],shelf:'底中心',rig:'短ハリス気味',sinker:'4〜5g',bait:'白サシ・紅サシ',tip:'繊細',baseCatch:100,exposure:'ice',special:'小型に寄せると数が伸びやすい。',localItems:['ホッカイロ','チョコパン']},
{id:'onogawa_dome',lat:37.664,lon:140.105,label:'福島｜小野川湖｜ドーム',water:'小野川湖',style:'ドーム',months:[11,12,1,2,3],shelf:'底中心、ときどき中層反応',rig:'標準 5〜7本針',sinker:'5〜7g',bait:'白サシ・紅サシ',tip:'中間〜やや硬め',baseCatch:90,exposure:'dome',special:'底に良型が混じる。桧原より少し重めのイメージ。',localItems:['ホットレモン','厚手手袋']},
{id:'onogawa_ice',lat:37.664,lon:140.105,label:'福島｜小野川湖｜氷上',water:'小野川湖',style:'氷上',months:[1,2,3],shelf:'底中心、ときどき中層反応',rig:'標準 5〜7本針',sinker:'5〜7g',bait:'白サシ・紅サシ',tip:'中間〜やや硬め',baseCatch:120,exposure:'ice',special:'中層は小型、底は良型のパターンが出やすい。',localItems:['ホットレモン','厚手手袋']}
];
const names=['愚者','魔術師','女教皇','女帝','皇帝','法王','恋人達','戦車','力','隠者','運命の輪','正義','吊るされたワカサギ','死神','節制','悪魔','塔','星','月','太陽','審判','世界'];
const nums=['0','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'];
const slugs=['fool','magician','priestess','empress','emperor','hierophant','lovers','chariot','strength','hermit','wheel','justice','hanged','death','temperance','devil','tower','star','moon','sun','judgement','world'];
const ranks=['B','A','A','A','A','A','A','S','A','B','S','A','C','B','A','C','D','A','B','SS','S','SS'];
const colors=['bronze','silver','silver','silver','silver','silver','silver','gold','silver','bronze','gold','silver','white','bronze','silver','white','black','silver','bronze','gold','gold','gold'];
const effects=[.95,1.12,1.06,1.14,1.15,1.08,1.1,1.28,1.14,1,1.24,1.12,.78,1.03,1.08,.74,.55,1.18,.92,1.42,1.22,1.5];
const tags=[['move'],['change'],['finesse'],['big'],['standard'],['advice'],['bait'],['rush'],['hookset'],['quiet'],['cycle'],['shelf'],['wait'],['reset'],['balance'],['tough'],['danger'],['morning'],['confuse'],['bigrush'],['return'],['complete']];
const taglines=['定番を外れた先に群れがいる。','小さな工夫が大きな差になる。','静かな穂先だけが答えを知る。','豊かな魚影と満ちた気配。','王道を守る者に安定が宿る。','現地の助言がそのまま近道になる。','当たり餌との相性が今日を決める。','群れが入ったら迷わず手返し。','一瞬の合わせが釣果を分ける。','静かな穴にだけ残る一匹がいる。','時合いは巡る。備えた者が取る。','棚が合えば湖は答えを返す。','今日は焦った者から見放される。','古い正解を捨てた先に流れが変わる。','誘いと止めの調和が鍵になる。','反応はあるのに口を使わぬ日。','今日は安全が最大の大漁。','早起きした者にだけ見える吉兆。','魚探の反応が真実とは限らない。','爆釣の光が湖を照らす。','去った群れがもう一度戻ってくる。','すべてが噛み合う完成の一日。'];
const cards=names.map((name,i)=>({n:nums[i],name,rank:ranks[i],color:colors[i],effect:effects[i],tags:tags[i],tagline:taglines[i],image:`assets/cards/${String(i).padStart(2,'0')}-${slugs[i]}.webp`}));
const $=id=>document.getElementById(id); locations.forEach(l=>{const o=document.createElement('option');o.value=l.id;o.textContent=l.label;$('location').appendChild(o)});$('tripDate').value=new Date().toISOString().slice(0,10);
function hash(s){let h=0;for(let i=0;i<s.length;i++){h=(h<<5)-h+s.charCodeAt(i);h|=0}return Math.abs(h)}
function chooseCard(mode,seed){
  let pool=cards,weights;
  if(mode==='oni'){
    pool=cards.filter(c=>['B','C','D'].includes(c.rank));
    weights=pool.map(c=>c.rank==='B'?5:c.rank==='C'?6:8);
  }else{
    weights=pool.map(c=>c.rank==='SS'?2:c.rank==='S'?5:c.rank==='A'?7:c.rank==='B'?4:c.rank==='C'?3:mode==='hard'?3:1);
  }
  let total=weights.reduce((a,b)=>a+b),r=(seed%100000)/100000*total;
  for(let i=0;i<pool.length;i++){if(r<weights[i])return pool[i];r-=weights[i]}
  return pool[0]
}
function season(month,l){if(!l.months.includes(month))return{factor:.35,label:'期間外',note:'現在は期間外。来季への準備運として占います。'};if(month===11)return{factor:.82,label:'開幕期',note:'シーズン序盤。群れはまだ不安定。'};if(month===1)return{factor:1.16,label:'盛期',note:'群れが安定しやすく、数釣りの期待が高まる時期。'};if(month===2)return{factor:.98,label:'変化期',note:'場所ムラや食い渋りも混ざりやすい時期。'};if(month===3)return{factor:.86,label:'終盤',note:'終盤戦。底釣りの比重が高まります。'};return{factor:1,label:'通常期',note:'湖はいつもの表情を見せています。'}}
function windDir(deg){const d=['北','北東','東','南東','南','南西','西','北西'];return d[Math.round((((deg||0)%360)+360)%360/45)%8]}
function weatherName(code){if(code===0)return'快晴';if(code<=2)return'晴れ時々くもり';if(code===3)return'くもり';if([45,48].includes(code))return'霧';if(code>=51&&code<=67)return'雨・みぞれ';if(code>=71&&code<=77)return'雪';if(code>=80&&code<=82)return'にわか雨';if(code>=85&&code<=86)return'にわか雪';if(code>=95)return'荒天';return'変わりやすい空'}
function divinationWeather(seed,l){const cond=['晴れ傾向','くもり傾向','雪の気配','寒気の気配','風の気配'][seed%5],dirs=['北','北東','東','南東','南','南西','西','北西'];let temp=-8+(seed%110)/10,wind=1+((seed>>3)%65)/10;return{condition:cond,temp:`${Math.round(temp*10)/10}℃前後`,windSpeed:Math.round(wind*10)/10,windDir:dirs[(seed>>5)%8],factor:wind>=7?.82:wind>=5?.92:1,source:'oracle'}}
async function weatherFor(date,l,seed){
  const target=new Date(date+'T12:00:00+09:00');const now=new Date();const days=Math.floor((target-now)/86400000);
  if(days<0||days>16)return divinationWeather(seed,l);
  try{
    const q=new URLSearchParams({latitude:l.lat,longitude:l.lon,timezone:'Asia/Tokyo',start_date:date,end_date:date,daily:'weather_code,temperature_2m_min,temperature_2m_max,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant'});
    const r=await fetch(`https://api.open-meteo.com/v1/forecast?${q}`);if(!r.ok)throw new Error('weather');const j=await r.json();
    const d=j.daily||{},min=d.temperature_2m_min?.[0],max=d.temperature_2m_max?.[0],wind=d.wind_speed_10m_max?.[0],deg=d.wind_direction_10m_dominant?.[0],code=d.weather_code?.[0];
    if(min==null||max==null||wind==null)throw new Error('weather-data');
    return{condition:weatherName(code),temp:`${Math.round(min)}〜${Math.round(max)}℃`,windSpeed:Math.round(wind*10)/10,windDir:windDir(deg),factor:wind>=7?.82:wind>=5?.92:1,source:'forecast'};
  }catch(e){return divinationWeather(seed,l)}
}
function guide(l,c,w,seed){let g={shelf:l.shelf,rig:l.rig,sinker:l.sinker,bait:l.bait,tip:l.tip};if(c.tags.includes('shelf'))g.shelf+='／10〜20cm刻み';if(c.tags.includes('finesse')||c.tags.includes('wait')){g.rig='短め・小針寄り';g.tip='繊細寄り'}if(c.tags.includes('bait'))g.bait+='／2種類比較';if(c.tags.includes('rush'))g.rig+='／手返し重視';if(c.tags.includes('big'))g.tip='やや硬め〜硬め';if(w.windSpeed>=5){if(l.id==='minamikawa_bridge')g.sinker='14〜24g';else if(l.id==='hanayama_dome')g.sinker='赤 7〜10g';else g.sinker=l.sinker+'寄り重め'}if(l.id==='wakuya_pier'){g.bait='白サシ固定';g.tip='ガチガチ固定'}if(l.id==='gandoko_ice')g.shelf=seed%2?'浅場神託 2〜5m':'深場神託 8〜16m';return g}
function catchCalc(l,s,w,c,mode,seed){
  const modeFactor=mode==='oni'?.58:mode==='hard'?1.1:1;
  const noise=mode==='oni'?(.55+(seed%55)/100):(.85+(seed%35)/100);
  let main=Math.round(l.baseCatch*s.factor*w.factor*c.effect*modeFactor*noise);
  if(c.tags.includes('danger'))main=Math.round(main*.6);
  main=Math.max(0,main);
  const spread=mode==='oni'?2.25:mode==='hard'?1.8:1.45;
  return{main,low:Math.round(main*(mode==='oni'?.35:.55)),high:Math.round(main*spread)}
}
function oracle(l,c,w,g,ct,inSeason){let intro=c.tags.includes('danger')?'風と寒さが湖の表情を変えています。今日は釣果より無事に帰ることが勝ちです。':c.tags.includes('bigrush')?'群れの波が一気に押し寄せます。考えるより先に手返し。':c.tags.includes('shelf')?'魚はいます。問題は、あなたの仕掛けがその層にいるかどうかです。':c.tags.includes('tough')?'反応はあるのに食わない、そんな悪戯な一日。':`${l.water} は今日も簡単には答えをくれません。`;let wl=(l.id==='minamikawa_bridge'||l.id==='wakuya_pier')?(w.windSpeed>=5?'風の数字以上に体感は厳しいでしょう。手元の防寒と安定が鍵。':'寒さ対策ができれば釣りに集中しやすい日。'):'まずは棚と群れの位置を読みたい日です。';return inSeason?`${intro} ${wl} 今日の神託棚は「${g.shelf}」。予想本命は${ct.main}匹。`:`${intro} 今は期間外なので釣果数は出しません。来季に向けて「${g.shelf}」を意識し、仕掛け・餌・防寒の準備を進める神託です。`}
function lucky(l,c,seed,mode){
  let p=[...l.localItems,'コーヒー牛乳','チョコ','あんぱん','カイロ','予備バッテリー','土井工房の針外し','土井工房カウンター'];
  if(mode==='hard')p.push('使い道のない六角レンチ','左だけの手袋','魚に謝る気持ち');
  if(mode==='oni')p=['使い道のない六角レンチ','左だけの手袋','謎のネジ1本','しゃもじ','魚に謝る気持ち','湖に選ばれたという思い込み','CHANEL N°5','予備バッテリー（残量12%）','土井工房の針外し',...l.localItems];
  return p[seed%p.length]
}
function rankMetal(color){return{gold:'GOLD',silver:'SILVER',bronze:'BRONZE',white:'WHITE',black:'BLACK'}[color]}
let oniDrawCount=0;
async function render(date,l,mode){
  const baseKey=`${date}_${l.id}_${mode}`;
  const seed=mode==='oni'?hash(`${baseKey}_${Date.now()}_${++oniDrawCount}_${Math.random()}`):hash(baseKey);
  const s=season(new Date(date+'T00:00:00').getMonth()+1,l),inSeason=s.label!=='期間外';
  const w=await weatherFor(date,l,seed),c=chooseCard(mode,seed),g=guide(l,c,w,seed),ct=inSeason?catchCalc(l,s,w,c,mode,seed):null;
  $('emptyState').classList.add('hidden');$('resultContent').classList.remove('hidden');$('resultLocation').textContent=l.label;
  $('resultMeta').textContent=`${date}｜${mode==='oni'?'鬼HARD':mode.toUpperCase()}｜${s.label}`;
  $('weatherCondition').textContent=w.source==='forecast'?`予報：${w.condition}`:`天候の神託：${w.condition}`;
  $('weatherTemp').textContent=w.temp;$('weatherWind').textContent=`${w.windDir} ${w.windSpeed}m/s`;
  const weatherNote=w.source==='forecast'?'天候・気温・風は実際の予報値です。':'予報期間外のため、天候の神託はまだ霞んでいます。予報圏内に入ると自動で実予報に切り替わります。';
  $('seasonAlert').textContent=(mode==='oni'?'【鬼HARD】高位カード封印・引くたび再抽選。対決や人数分抽選向け。 ':'')+s.note+' '+weatherNote;
  const displayRank=mode==='oni'?(c.rank==='B'?'C':c.rank==='C'?'D':'凶'):c.rank;
  const displayColor=mode==='oni'?(displayRank==='C'?'white':'black'):c.color;
  $('tarotCard').className=`tarot-card rank-${displayColor}`;$('tarotImage').src=c.image;$('tarotImage').alt=c.name;$('tarotRankBadge').textContent=`${displayRank} RANK`;$('rankDisc').textContent=displayRank;
  $('rankMetal').textContent=mode==='oni'?(displayRank==='C'?'WHITE':'BLACK'):rankMetal(c.color);$('tarotNumber').textContent=c.n;$('tarotName').textContent=c.name;$('tarotTagline').textContent=c.tagline;$('oracleText').textContent=oracle(l,c,w,g,ct,inSeason);
  $('guideShelf').textContent=g.shelf;$('guideRig').textContent=g.rig;$('guideSinker').textContent=g.sinker;$('guideBait').textContent=g.bait;$('guideTip').textContent=g.tip;
  $('catchMain').textContent=inSeason?`${ct.main}匹`:'算出なし';$('catchRange').textContent=inSeason?`神託範囲 ${ct.low}〜${ct.high}匹`:'期間外のため算出なし';
  $('catchText').textContent=inSeason?l.special:'来季への準備期間。営業・氷上解禁などの公式情報を確認してから釣行してください。';$('luckyItem').textContent=lucky(l,c,seed,mode);$('localTip').textContent=l.special;
  $('stars').textContent=mode==='oni'?(displayRank==='C'?'★ ★ ☆ ☆ ☆':displayRank==='D'?'★ ☆ ☆ ☆ ☆':'☆ ☆ ☆ ☆ ☆'):(c.rank==='SS'?'★ ★ ★ ★ ★':c.rank==='S'?'★ ★ ★ ★ ☆':c.rank==='A'?'★ ★ ★ ★ ☆':c.rank==='B'?'★ ★ ★ ☆ ☆':c.rank==='C'?'★ ★ ☆ ☆ ☆':'★ ☆ ☆ ☆ ☆');
  window.scrollTo({top:$('resultContent').offsetTop-20,behavior:'smooth'})
}
$('fortune-form').addEventListener('submit',e=>{e.preventDefault();const l=locations.find(x=>x.id===$('location').value);render($('tripDate').value,l,$('mode').value)});
function buildGallery(){const grid=$('galleryGrid');grid.innerHTML='';cards.forEach(c=>{const d=document.createElement('div');d.className='gallery-card';d.innerHTML=`<img loading="lazy" src="${c.image}" alt="${c.name}"><b>${c.n} ${c.name}</b>`;grid.appendChild(d)})}
$('galleryBtn').addEventListener('click',()=>{$('gallery').classList.remove('hidden');buildGallery();$('gallery').scrollIntoView({behavior:'smooth'})});$('closeGallery').addEventListener('click',()=>$('gallery').classList.add('hidden'));
