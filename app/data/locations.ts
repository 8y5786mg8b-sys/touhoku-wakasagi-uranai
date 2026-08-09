export type FishingMode = { id:string; label:string };
export type Location = {
  id:string; prefecture:string; name:string; modes:FishingMode[]; months:number[];
  base:[number,number]; size:string; rigs:string[]; sinkers:string[]; baits:string[]; rods:string[];
  notes:string[]; lucky:string[]; safety?:string; difficulty?:number; strict?:"large-only";
};
const m=(id:string,label:string)=>({id,label});
export const locations: Location[] = [
 {id:"hanayama",prefecture:"宮城",name:"花山湖",modes:[m("dome","屋形／ドーム"),m("boat","ボート")],months:[11,12,1,2,3],base:[70,240],size:"小〜中型中心",rigs:["狐1号前後・5〜7本針","底中心の標準仕掛け"],sinkers:["赤 5〜7g","強風時は赤 10g"],baits:["赤虫","紅サシ（現地販売あり）"],rods:["5〜10gに対応する標準穂先"],notes:["完全予約・受付8時","船外機／エレキ禁止","遊漁券あり"],lucky:["土井工房の針外し","土井工房カウンター","自然薯の館","天丼","配達弁当"]},
 {id:"nanakawa",prefecture:"宮城",name:"南川ダム",modes:[m("bridge","橋上")],months:[10,11,12,1,2],base:[20,110],size:"約10cmの良型傾向",rigs:["1号・4〜8本針・全長1m以上"],sinkers:["7g","10g","14g","18g","24g"],baits:["紅サシ","白サシ","赤虫"],rods:["延長30cm＋硬めフィルム穂先","硬めグラス穂先"],notes:["朝、特に8時前が重要","橋から底まで約18m・泥底","ボート不可"],lucky:["土井工房カウンター","朝焼けの魔法瓶","延長アダプター"]},
 {id:"wakuya",prefecture:"宮城",name:"涌谷町釣り公園",modes:[m("pier","桟橋／岸釣り")],months:[11,12,1,2],base:[6,45],size:"大型ワカサギ中心（小型中心にはならない）",rigs:["1.5号以上・5本針","魚探シューティング"],sinkers:["3〜5g"],baits:["白サシ"],rods:["大型対応の硬い穂先"],notes:["11月が好期","モロコが多い","年変動が非常に大きい"],lucky:["猫","土井工房の針外し","魚探バッテリー"],strict:"large-only"},
 {id:"anenumа",prefecture:"青森",name:"姉沼",modes:[m("ice","氷上")],months:[1,2],base:[30,260],size:"小〜中型・年変動大",rigs:["短めの氷上仕掛け","反応に合わせた多点針"],sinkers:["2〜5g"],baits:["紅サシ","赤虫"],rods:["浅場向け繊細穂先"],notes:["汽水湖・浅場","年変動が極端"],lucky:["土井工房カウンター","防水座布団"],safety:"汽水湖は氷が緩みやすい。現地の立入情報と氷況を必ず確認し、危険時は釣行しないでください。"},
 {id:"gando",prefecture:"岩手",name:"岩洞湖",modes:[m("ice","氷上"),m("dome","屋形／ドーム")],months:[1,2,3],base:[25,170],size:"小〜中型",rigs:["深場対応の長め仕掛け","浅場の手返し仕掛け"],sinkers:["3〜8g"],baits:["紅サシ","白サシ"],rods:["深場対応穂先","浅場用繊細穂先"],notes:["ドームは難易度高め","深場／浅場で攻略が分かれる","前日と同じポイントは失速する場合あり"],lucky:["ソフトクリーム","土井工房カウンター","新しい穴"]},
 {id:"saiko",prefecture:"岩手",name:"菜魚湖",modes:[m("ice","氷上")],months:[1,2],base:[20,120],size:"小〜中型",rigs:["氷上標準5〜7本針"],sinkers:["3〜7g"],baits:["紅サシ","白サシ"],rods:["標準氷上穂先"],notes:["現地ルールと解禁情報を優先"],lucky:["土井工房の針外し","温かい手袋"]},
 {id:"oshida",prefecture:"岩手",name:"大志田ダム",modes:[m("ice","氷上")],months:[1,2],base:[15,100],size:"小〜中型",rigs:["氷上標準仕掛け"],sinkers:["3〜7g"],baits:["紅サシ"],rods:["標準氷上穂先"],notes:["現地ルールと氷況を優先"],lucky:["土井工房カウンター","携帯カイロ"]},
 {id:"hibara-s",prefecture:"福島",name:"桧原湖南部",modes:[m("ice","氷上"),m("dome","屋形／ドーム")],months:[11,12,1,2,3],base:[45,210],size:"小〜中型",rigs:["狐0.8号・底釣り中心"],sinkers:["5g以下"],baits:["紅サシ","白サシ"],rods:["底アタリを取る繊細穂先"],notes:["南部データとして独立"],lucky:["ソースカツ丼","土井工房の針外し"]},
 {id:"hibara-n",prefecture:"福島",name:"桧原湖北部",modes:[m("ice","氷上"),m("dome","屋形／ドーム")],months:[11,12,1,2,3],base:[35,190],size:"小〜中型",rigs:["狐0.8号・底釣り中心"],sinkers:["5g以下"],baits:["紅サシ","白サシ"],rods:["底アタリを取る繊細穂先"],notes:["北部データとして独立"],lucky:["ソースカツ丼","土井工房カウンター"]},
 {id:"onogawa",prefecture:"福島",name:"小野川湖",modes:[m("ice","氷上"),m("dome","屋形／ドーム")],months:[12,1,2,3],base:[35,180],size:"小〜中型",rigs:["狐0.8号・底釣り中心"],sinkers:["5g以下"],baits:["紅サシ","白サシ"],rods:["繊細な底釣り穂先"],notes:["底釣り中心"],lucky:["土井工房の針外し","温かいスープ"]},
 {id:"towada-k",prefecture:"秋田",name:"十和田湖 小坂側",modes:[m("shore","岸／桟橋")],months:[10,11,12],base:[15,90],size:"中型傾向",rigs:["現地規則に沿った標準仕掛け"],sinkers:["5〜10g"],baits:["紅サシ"],rods:["標準穂先"],notes:["小坂側として独立","最新の解禁・立入情報を優先"],lucky:["土井工房カウンター","温泉タオル"]},
];
