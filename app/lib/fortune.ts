import { Location } from "../data/locations";
import { TarotCard, tarotCards } from "../data/tarot";
import { Weather } from "./weather";
import {GearProduct,rigProducts,rodProducts,RigMaker,RodMaker,RodAction} from "../data/products";
export type GameMode = "normal"|"hard";
type RodBend = "先調子"|"胴調子"|"万能調子";
export type Fortune = {card:TarotCard;rank:string;catchText:string;rig:string;sinker:string;bait:string;rod:string;shelf:string;timing:string;lucky:string;oracle:string;event?:string;outOfSeason:boolean;weather:Weather|null;rigProduct?:GearProduct;rodProduct?:GearProduct};
const hash=(s:string)=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const pick=<T,>(a:T[],n:number)=>a[n%a.length];
const hardRigs=["金針14本・全長2.4m","袖0.5号の3本針","狐2号・10本針","上下で色が全部違う仕掛け","一番最初に手に触れた仕掛け"];
const hardSinkers=["0.8gで限界まで攻める","赤14gを迷わず投入","左右で違う重さを準備","金色7g。理由はカードだけが知っている","今日は重さより形。六角オモリ"];
const hardBaits=["赤虫と白サシを交互","紅サシを極小カット","白サシ一本掛け","赤虫だけで勝負","餌箱を開けて最初に目が合った餌"];
const hardRods=["超柔らか穂先","ガチガチの深場穂先","左右で硬さを変える","最も出番の少ない穂先","カードの色に近い穂先"];
const silly=["蝉の抜け殻","片方だけの手袋","賞味期限を確認した海苔","青い洗濯ばさみ","木彫りの熊の写真","輪ゴム3本","使わない六角レンチ","ポケットのどんぐり","土井工房の針外し","土井工房のカウンター"];
const weatherGear=(w:Weather|null)=>!w?["予備バッテリー","温かい飲み物"]:w.max<=0?["貼るカイロ","予備の防寒手袋","魔法瓶"]:w.rain>=50?["防水手袋","替えの靴下","レインウェア"]:w.wind>=15?["風除けクリップ","予備ペグ","ネックウォーマー"]:["偏光グラス","魔法瓶","予備バッテリー"];
function normalSinker(location:Location,w:Weather|null,card:TarotCard,seed:number){
 const options=location.sinkers; const windy=(w?.wind??0)>=15;
 const calm=options.filter(x=>!x.includes("強風"));
 const chosen=windy?options[options.length-1]:pick(calm.length?calm:options,seed);
 const numbers=[...chosen.matchAll(/\d+(?:\.\d+)?/g)].map(x=>Number(x[0]));
 const maxGrams=numbers.length?Math.max(...numbers):99;
 if(windy)return {text:`風速${w!.wind.toFixed(1)}km/h予報。今日は${chosen}まで準備。カード「${card.name}」は安定を優先。`,maxGrams};
 return {text:`${chosen}が本日の最適候補。カード「${card.name}」は${card.rigBias==="light"?"軽め":"底取り優先"}と告げています。`,maxGrams};
}
function chooseRig(location:Location,maker:RigMaker,hooks:number,seed:number){
 const makerPool=rigProducts.filter(p=>maker==="おまかせ"||p.maker===maker);
 const hanayama=makerPool.filter(p=>p.locations?.includes("hanayama"));
 if(location.id==="hanayama"&&hanayama.length&&seed%4!==0){const exact=hanayama.filter(p=>p.hooks===hooks);return pick(exact.length?exact:hanayama,seed)}
 const pool=location.id==="hanayama"&&maker==="おまかせ"?makerPool.filter(p=>!p.locations?.includes("hanayama")):makerPool;
 const scored=pool.map(p=>({p,score:Math.abs((p.hooks??6)-hooks)*5-(p.locations?.includes(location.id)?12:0)+(p.locations&&!p.locations.includes(location.id)?3:0)}));
 const best=Math.min(...scored.map(x=>x.score)); const close=scored.filter(x=>x.score===best).map(x=>x.p);
 return pick(close,seed);
}
function productBend(product:GearProduct):RodBend{
 const text=`${product.variant} ${product.specs.join(" ")}`;
 if(/胴調子|5:5|レギュラースロー|R調子|ロング・胴調子/.test(text))return "胴調子";
 if(/先調子|速攻調子|1:9|0\.8:9\.2|F調子|深場対応|多点掛け/.test(text))return "先調子";
 return "万能調子";
}
function chooseRod(location:Location,modeId:string,maker:RodMaker,grams:number,action:RodAction,bend:RodBend,seed:number){
 const pool=rodProducts.filter(p=>maker==="おまかせ"||p.maker===maker);
 const hibaraQueen=pool.find(p=>p.id==="creek-hibara-queen");
 if(location.id==="nanakawa"&&hibaraQueen&&grams<=7&&seed%4!==0)return hibaraQueen;
 const scored=pool.map(p=>{const loadGap=grams<(p.loadMin??0)?(p.loadMin??0)-grams:grams>(p.loadMax??99)?grams-(p.loadMax??99):0;const modeScore=p.modes&&!p.modes.includes(modeId)?4:0;return {p,score:loadGap*5+(p.action===action?0:1)+(productBend(p)===bend?0:4)+modeScore-(p.locations?.includes(location.id)?6:0)+(p.locations&&!p.locations.includes(location.id)?2:0)}});
 const best=Math.min(...scored.map(x=>x.score)); const close=scored.filter(x=>x.score===best).map(x=>x.p);
 if(maker!=="おまかせ")return pick(close,seed);
 const makers=[...new Set(close.map(p=>p.maker))];
 const selectedMaker=pick(makers,seed);
 return pick(close.filter(p=>p.maker===selectedMaker),seed>>>3);
}
function hardRig(maker:RigMaker,seed:number){const pool=rigProducts.filter(p=>maker==="おまかせ"||p.maker===maker);return pick(pool,seed)}
function hardRod(maker:RodMaker,seed:number){const pool=rodProducts.filter(p=>maker==="おまかせ"||p.maker===maker);return pick(pool,seed)}
export function makeFortune(location:Location,date:string,modeId:string,game:GameMode,nonce:number,weather:Weather|null,rigMaker:RigMaker="おまかせ",rodMaker:RodMaker="おまかせ"):Fortune{
 const seed=hash(`${location.id}|${date}|${modeId}|${game}|${nonce}`); const month=new Date(`${date}T12:00:00`).getMonth()+1;
 const activeMonths=location.modeMonths?.[modeId]??location.months;
 const out=activeMonths.length>0&&!activeMonths.includes(month), card=tarotCards[(seed>>>3)%22]; const hard=game==="hard";
 const swing=hard?.85:.24, center=(location.base[0]+location.base[1])/2, wave=((seed%1000)/999-.5)*2;
 const weatherEffect=weather?Math.max(.72,Math.min(1.12,1-(weather.wind>20?.15:0)-(weather.rain>60?.12:0)+(weather.code<=2?.05:0))):1;
 const modePenalty=modeId==="dome"&&location.id==="gando"?.65:1, cardEffect=1+card.rank*(hard?.09:.03);
 let count=Math.max(0,Math.round(center*(1+wave*swing)*modePenalty*cardEffect*(hard?1:weatherEffect)));
 if(location.id==="wakuya"){const olympic=new Date(`${date}T12:00:00`).getFullYear()%4===0;count=Math.min(olympic?135:55,Math.max(3,count))}
 const score=card.rank+(count>location.base[1]*.75?3:count>location.base[0]?1:-2),rank=score>=7?"SS":score>=5?"S":score>=3?"A":score>=1?"B":score>=-2?"C":"D";
 const specials=location.id==="wakuya"?["猫が後ろに座れば吉兆。"]:location.id==="gando"?["昨日と同じ穴なら、見切り時間を決めて新しい反応を探す。"]:location.id==="hanayama"?["Uber弁当の天丼が午後の流れを変える。"]:[];
 const normalLucky=[...location.lucky,...weatherGear(weather),"土井工房の針外し","土井工房のカウンター"];
 const shelf=hard?pick(["表層だけを追う","底から3m上","中層を大胆に横断","魚探反応と逆の棚"],seed>>>4):card.rigBias==="search"?"底を基準に反応のある棚まで探索":location.id==="nanakawa"?"泥底から5〜15cm上":"底〜底上20cm";
 const sinkerChoice=normalSinker(location,weather,card,seed>>>7);
 const targetHooks=card.rigBias==="search"?7:card.rigBias==="light"?5:6;
 const targetAction:RodAction=weather&&weather.wind>=15||sinkerChoice.maxGrams>8?"硬め":sinkerChoice.maxGrams<=3?"柔らかめ":"標準";
 const targetBend:RodBend=weather&&weather.wind>=15||sinkerChoice.maxGrams>8?"先調子":card.rigBias==="search"?"先調子":card.rigBias==="light"?"胴調子":"万能調子";
 const rigProduct=hard?hardRig(rigMaker,seed>>>5):!out?chooseRig(location,rigMaker,targetHooks,seed>>>5):undefined;
 const rodProduct=hard?hardRod(rodMaker,seed>>>11):!out?chooseRod(location,modeId,rodMaker,sinkerChoice.maxGrams,targetAction,targetBend,seed>>>11):undefined;
 const rig=hard?pick(hardRigs,seed>>>5):`${targetHooks}本針・${targetHooks>=7?"広い棚を探れる長め":targetHooks<=5?"底を手返しよく攻める短め":"扱いやすい標準"}の仕掛け。${card.action}`;
 const rod=hard?pick(hardRods,seed>>>11):`${targetBend}。${targetBend==="先調子"?"誘いと掛けの反応を優先":targetBend==="胴調子"?"小さなアタリを大きく見せ、乗せやすさを優先":"誘い・掛け・乗せのバランスを優先"}。${weather&&weather.wind>=15?"風対策でブレにくさを重視":"今日のオモリを無理なく背負えるもの"}`;
 return {card,rank:out?"—":rank,catchText:out?"期間外のため釣果予測なし":`${count}匹前後（${Math.max(1,Math.round(count*.68))}〜${Math.round(count*1.30)}匹）`,rig,sinker:hard?pick(hardSinkers,seed>>>7):sinkerChoice.text,bait:hard?pick(hardBaits,seed>>>9):`${pick(location.baits,seed>>>9)}。${weather?.max!==undefined&&weather.max<3?"低温のため小まめに交換":"鮮度を優先"}`,rod,shelf,timing:card.timing,lucky:hard?pick(silly,seed>>>13):pick(normalLucky,seed>>>13),oracle:out?`来季は「${card.action}」。準備の時間も釣行の一部です。`:card.omen,event:specials.length&&((seed>>>15)%3>0||hard)?pick(specials,seed>>>16):undefined,outOfSeason:out,weather,rigProduct,rodProduct};
}
