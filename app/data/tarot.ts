export type TarotCard = {
  id: number; roman: string; name: string; image: string; rank: number;
  omen: string; action: string; timing: string; rigBias: "light" | "steady" | "search";
};

const rows = [
  ["0","愚者",0,"まだ誰も試していない穴に気配あり","最初の反応に固執せず軽やかに移動","朝一番","search"],
  ["I","魔術師",3,"道具が応える日。小さな工夫が連掛けを呼ぶ","誘い幅と止めを三通り試す","開始直後","steady"],
  ["II","女教皇",2,"静かな水の下に答えが隠れている","余計な誘いを減らしアタリを待つ","薄明","light"],
  ["III","女帝",4,"群れは豊か。餌の鮮度が福を育てる","餌をこまめに交換する","午前","steady"],
  ["IV","皇帝",3,"底を制する者が一日を制す","棚を迷わず底中心に組み立てる","朝","steady"],
  ["V","法王",2,"定石の中に今日の正解がある","現地の基本仕掛けを崩さない","午前","steady"],
  ["VI","恋人達",3,"二つの選択が釣果を分ける","餌か仕掛けを一つずつ比較する","昼前","light"],
  ["VII","戦車",4,"群れを追えば流れをつかめる","反応が消えたら素早く探る","朝二番","search"],
  ["VIII","力",4,"強い引き。大物を受け止める準備を","無理に急がず一定の誘いを続ける","午前","steady"],
  ["IX","隠者",1,"離れた静かな場所に一匹の答え","人の動きより魚探と手感を信じる","夕方","light"],
  ["X","運命の輪",5,"群れの回遊が運を大きく回す","時合が来たら手返しを最優先","短い回遊時","search"],
  ["XI","正義",2,"棚と重さの均衡が結果を整える","オモリと穂先の釣り合いを確認","午前","steady"],
  ["XII","吊るされた男",-2,"待つ時間が長いほど一瞬が重要になる","同じ場所に固執する時間を決める","昼","light"],
  ["XIII","死神",-3,"今の組み立てを終わらせる時","反応が無ければ場所か仕掛けを総替え","切替後","search"],
  ["XIV","節制",2,"強すぎない誘いが群れを留める","誘いと静止を半々にする","一日安定","light"],
  ["XV","悪魔",-1,"爆釣の誘惑と外道の騒ぎが隣り合う","数に夢中にならず餌と針を点検","午後","steady"],
  ["XVI","塔",-4,"急変あり。昨日の正解が崩れる","安全と撤退判断を最優先する","天候変化時","search"],
  ["XVII","星",4,"遠い反応が次第に近づく","小さな兆しを見逃さず丁寧に続ける","朝夕","light"],
  ["XVIII","月",0,"見えない変化。思い込みに注意","魚探反応と実釣を照合する","薄暗い時間","light"],
  ["XIX","太陽",5,"明るい群れ。今日の氷下は賑やか","手返し良く楽しく釣る","午前","steady"],
  ["XX","審判",4,"止まっていた群れが再び応える","一度見切った場所も最後に再確認","終盤","search"],
  ["XXI","世界",5,"道具・場所・時合が一つにつながる","基本を守り最後までリズムを崩さない","一日","steady"],
] as const;

const imageFiles = ["00-fool.jpeg","01-magician.jpeg","02-high-priestess.jpeg","03-empress.jpeg","04-emperor.jpeg","05-hierophant.jpeg","06-lovers.jpeg","07-chariot.jpeg","08-strength.jpeg","09-hermit.jpeg","10-wheel-of-fortune.jpeg","11-justice.jpeg","12-hanged-man.jpeg","13-death.jpeg","14-temperance.jpeg","15-devil.jpeg","16-tower.jpeg","17-star.jpeg","18-moon.jpeg","19-sun.jpeg","20-judgement.jpeg","21-world.jpeg"] as const;

export const tarotCards: TarotCard[] = rows.map((r, id) => ({
  id, roman:r[0], name:r[1], image:`/assets/cards/${imageFiles[id]}`,
  rank:r[2], omen:r[3], action:r[4], timing:r[5], rigBias:r[6],
}));
