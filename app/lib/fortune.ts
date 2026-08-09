import { Location } from "../data/locations";
import { TarotCard, tarotCards } from "../data/tarot";
import { Weather } from "./weather";
export type GameMode = "normal"|"hard";
export type Fortune = {card:TarotCard;rank:string;catchText:string;rig:string;sinker:string;bait:string;rod:string;shelf:string;timing:string;lucky:string;oracle:string;event?:string;outOfSeason:boolean;weather:Weather|null};
const hash=(s:string)=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const pick=<T,>(a:T[],n:number)=>a[n%a.length];
const hardRigs=["金針14本・全長2.4m","袖0.5号の3本針","狐2号・10本針","上下で色が全部違う仕掛け","一番最初に手に触れた仕掛け"];
const hardSinkers=["0.8gで限界まで攻める","赤14gを迷わず投入","左右で違う重さを準備","金色7g。理由はカードだけが知っている","今日は重さより形。六角オモリ"];
const hardBaits=["赤虫と白サシを交互","紅サシを極小カット","白サシ一本掛け","赤虫だけで勝負","餌箱を開けて最初に目が合った餌"];
const hardRods=["超柔らか穂先","ガチガチの深場穂先","左右で硬さを変える","最も出番の少ない穂先","カードの色に近い穂先"];
const silly=["蝉の抜け殻","片方だけの手袋","賞味期限を確認した海苔","青い洗濯ばさみ","木彫りの熊の写真","輪ゴム3本","使わない六角レンチ","ポケットのどんぐり","土井工房の針外し","土井工房のカウンター"];
const weatherGear=(w:Weather|null)=>!w?["予備バッテリー","温かい飲み物"]:w.max<=0?["貼るカイロ","予備の防寒手袋","魔法瓶"]:w.rain>=50?["防水手袋","替えの靴下","レインウェア"]:w.wind>=15?["風除けクリップ","予備ペグ","ネックウォーマー"]:["偏光グラス","魔法瓶","予備バッテリー"];
function normalSinker(location:Location,w:Weather|null,card:TarotCard,seed:number){
 const options=location.sinkers; const windy=(w?.wind??0)>=15; const chosen=windy?options[options.length-1]:pick(options,seed);
 if(windy)return `風速${w!.wind.toFixed(1)}km/h予報。今日は${chosen}まで準備。カード「${card.name}」は安定を優先。`;
 return `${chosen}が本日の最適候補。カード「${card.name}」は${card.rigBias==="light"?"軽め":"底取り優先"}と告げています。`;
}
export function makeFortune(location:Location,date:string,modeId:string,game:GameMode,nonce:number,weather:Weather|null):Fortune{
 const seed=hash(`${location.id}|${date}|${modeId}|${game}|${nonce}`); const month=new Date(`${date}T12:00:00`).getMonth()+1;
 const out=!location.months.includes(month), card=tarotCards[(seed>>>3)%22]; const hard=game==="hard";
 const swing=hard?.85:.24, center=(location.base[0]+location.base[1])/2, wave=((seed%1000)/999-.5)*2;
 const weatherEffect=weather?Math.max(.72,Math.min(1.12,1-(weather.wind>20?.15:0)-(weather.rain>60?.12:0)+(weather.code<=2?.05:0))):1;
 const modePenalty=modeId==="dome"&&location.id==="gando"?.65:1, cardEffect=1+card.rank*(hard?.09:.03);
 let count=Math.max(0,Math.round(center*(1+wave*swing)*modePenalty*cardEffect*(hard?1:weatherEffect)));
 if(location.id==="wakuya"){const olympic=new Date(`${date}T12:00:00`).getFullYear()%4===0;count=Math.min(olympic?135:55,Math.max(3,count))}
 const score=card.rank+(count>location.base[1]*.75?3:count>location.base[0]?1:-2),rank=score>=7?"SS":score>=5?"S":score>=3?"A":score>=1?"B":score>=-2?"C":"D";
 const specials=location.id==="wakuya"?["猫が後ろに座れば吉兆。"]:location.id==="gando"?["昨日と同じ穴なら、見切り時間を決めて新しい反応を探す。"]:location.id==="hanayama"?["Uber弁当の天丼が午後の流れを変える。"]:[];
 const normalLucky=[...location.lucky,...weatherGear(weather),"土井工房の針外し","土井工房のカウンター"];
 const shelf=hard?pick(["表層だけを追う","底から3m上","中層を大胆に横断","魚探反応と逆の棚"],seed>>>4):card.rigBias==="search"?"底を基準に反応のある棚まで探索":location.id==="nanakawa"?"泥底から5〜15cm上":"底〜底上20cm";
 return {card,rank:out?"—":rank,catchText:out?"期間外のため釣果予測なし":`${count}匹前後（${Math.max(1,Math.round(count*.68))}〜${Math.round(count*1.30)}匹）`,rig:hard?pick(hardRigs,seed>>>5):`${pick(location.rigs,seed>>>5)}。${card.action}`,sinker:hard?pick(hardSinkers,seed>>>7):normalSinker(location,weather,card,seed>>>7),bait:hard?pick(hardBaits,seed>>>9):`${pick(location.baits,seed>>>9)}。${weather?.max!==undefined&&weather.max<3?"低温のため小まめに交換":"鮮度を優先"}`,rod:hard?pick(hardRods,seed>>>11):`${pick(location.rods,seed>>>11)}。${weather&&weather.wind>=15?"風対策で一段硬めも準備":"カードの誘いを出せる硬さ"}`,shelf,timing:card.timing,lucky:hard?pick(silly,seed>>>13):pick(normalLucky,seed>>>13),oracle:out?`来季は「${card.action}」。準備の時間も釣行の一部です。`:card.omen,event:specials.length&&((seed>>>15)%3>0||hard)?pick(specials,seed>>>16):undefined,outOfSeason:out,weather};
}
