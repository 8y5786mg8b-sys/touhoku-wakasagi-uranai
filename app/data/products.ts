export type RigMaker="おまかせ"|"上州屋"|"ゴールドハウス目黒"|"ダイワ"|"バリバス";
export type RodMaker="おまかせ"|"上州屋"|"ダイワ"|"CREEK"|"バリバス"|"シマノ";
export type RodAction="柔らかめ"|"標準"|"硬め";

export type GearProduct={id:string;category:"rig"|"rod";name:string;variant:string;maker:Exclude<RigMaker|RodMaker,"おまかせ">;image?:string;specs:string[];use:string;link:string;price?:string;hooks?:number;loadMin?:number;loadMax?:number;action?:RodAction;locations?:string[];modes?:string[]};
const rig=(id:string,maker:GearProduct["maker"],name:string,variant:string,hooks:number|undefined,specs:string[],use:string,link:string,extra:Partial<GearProduct>={}):GearProduct=>({id,category:"rig",maker,name,variant,hooks,specs,use,link,...extra});
const rod=(id:string,maker:GearProduct["maker"],name:string,variant:string,loadMin:number,loadMax:number,action:RodAction,specs:string[],use:string,link:string,extra:Partial<GearProduct>={}):GearProduct=>({id,category:"rod",maker,name,variant,loadMin,loadMax,action,specs,use,link,...extra});

const hanayama7={image:"/assets/products/hanayama-7hook.jpg",locations:["hanayama"]};
const hanayamaMix={image:"/assets/products/hanayama-mix.jpg",locations:["hanayama"]};
const hanayamaBottom={image:"/assets/products/hanayama-bottom.jpg",locations:["hanayama"]};

export const rigProducts:GearProduct[]=[
 rig("hanayama-7-fox1","上州屋","花山湖 わかさぎドーム船仕掛","狐1号",7,["全長77cm","7本針","朱留"],"花山湖の中層反応と多点掛けを狙う","https://www.johshuya.co.jp/shop/detail.php?no=598875&s=169",hanayama7),
 rig("hanayama-7-sode15","上州屋","花山湖 わかさぎドーム船仕掛","袖1.5号",7,["全長77cm","7本針","朱留"],"花山湖の中層反応と多点掛けを狙う","https://www.johshuya.co.jp/shop/detail.php?no=598875&s=169",hanayama7),
 rig("hanayama-mix-fox1","上州屋","瞬速 花山MIX","狐1号",6,["全長80cm","6本針","赤留・夜光留MIX"],"花山湖で中層から底まで探る標準型","https://www.johshuya.co.jp/shop/detail.php?no=406064&s=169",hanayamaMix),
 rig("hanayama-mix-sode15","上州屋","瞬速 花山MIX","袖1.5号",6,["全長80cm","6本針","赤留・夜光留MIX"],"花山湖で中層から底まで探る標準型","https://www.johshuya.co.jp/shop/detail.php?no=406064&s=169",hanayamaMix),
 rig("hanayama-bottom-fox1","上州屋","瞬速 花山MIX ボトムver.","狐1号",5,["全長55cm","5本針","赤留・夜光留MIX"],"花山湖の底べったりと渋い時間に","https://www.johshuya.co.jp/shop/detail.php?no=474265&s=102",hanayamaBottom),
 rig("hanayama-bottom-sode15","上州屋","瞬速 花山MIX ボトムver.","袖1.5号",5,["全長55cm","5本針","赤留・夜光留MIX"],"花山湖の底べったりと渋い時間に","https://www.johshuya.co.jp/shop/detail.php?no=474265&s=102",hanayamaBottom),
 rig("johshuya-gando-ll2","上州屋","岩洞湖オリジナル仕掛け","LLバージョン 2号",6,["岩洞湖専用","ロング仕様","2号"],"岩洞湖の深場と良型を狙う","https://www.johshuya.co.jp/sp/shop/choka.php?page=2&s=114",{locations:["gando"]}),
 rig("johshuya-gando-fluoro15","上州屋","岩洞湖オリジナル仕掛け","フロロバージョン 1.5号",6,["岩洞湖専用","フロロ仕様","1.5号"],"深場で仕掛けの張りと掛けを優先","https://www.johshuya.co.jp/sp/shop/choka.php?page=2&s=114",{locations:["gando"]}),
 rig("johshuya-gando-large15","上州屋","岩洞湖オリジナル仕掛け","ラージエリア 袖1.5号",7,["岩洞湖専用","広い棚向け","袖1.5号"],"広い棚に散った岩洞湖の群れを探る","https://www.johshuya.co.jp/shop/choka.php?page=5&s=114",{locations:["gando"]}),
 rig("johshuya-gando-xiii","上州屋","岩洞湖XIII エクステンド","0.8〜1号",6,["岩洞湖専用","エクステンド","0.8〜1号"],"岩洞湖の深場で底付近を丁寧に探る","https://tsuri-tohoku.com/26973/",{locations:["gando"]}),
 rig("johshuya-hibara-stealth01","上州屋","桧原湖ステルス01","秋田狐1号",6,["桧原湖専用","ステルス仕様","秋田狐1号"],"桧原湖の小型魚と低活性を静かに狙う","https://www.johshuya.co.jp/shop/choka.php?page=49&s=125",{locations:["hibara-s","hibara-n"]}),
 rig("johshuya-redshot2","上州屋","レッドショットⅡ","フロロ・短エダス",5,["5本針","フロロカーボン","短エダス"],"浅場で素早く掛け、手返しを上げる","https://tsuri-tohoku.com/37905/",{locations:["gando"]}),
 rig("ghm-hayabusa-4","ゴールドハウス目黒","はやぶさ 目黒オリジナル仕掛け","4本鉤",4,["4本鉤","レンタル採用","目黒オリジナル"],"桧原湖南部で短い仕掛けを手返しよく扱う","https://gmeguro.com/driveinn/wakasagi/",{locations:["hibara-s"]}),
 rig("ghm-queen3-pro7","ゴールドハウス目黒","GHMクイーンⅢプロ7","目黒オリジナル",7,["7本鈎","桧原湖向け","目黒オリジナル"],"桧原湖の群れを広めに探り、多点掛けを狙う","https://ameblo.jp/g-meguro/entry-12878999612.html",{locations:["hibara-s"]}),
 rig("ghm-queen-selection2","ゴールドハウス目黒","G-目黒クイーンセレクションⅡ","目黒オリジナル",undefined,["桧原湖向け","クイーンセレクション","目黒オリジナル"],"桧原湖南部の状況に合わせる地域仕掛け候補","https://www.fishing-v.jp/program/program_data.php?pcd=6210110",{locations:["hibara-s"]}),
 rig("ghm-super-pro3-7","ゴールドハウス目黒","G-目黒スーパープロⅢ","フロロ仕様 7本鈎",7,["7本鈎","フロロ仕様","目黒オリジナル"],"張りを生かして広い棚を探り、掛けを優先","https://www.fishing-v.jp/program/program_data.php?pcd=6210110",{locations:["hibara-s"]}),
 rig("ghm-super-pro-ss2","ゴールドハウス目黒","G-目黒スーパープロS.SⅡ","目黒オリジナル",undefined,["桧原湖向け","S.SⅡ","目黒オリジナル"],"桧原湖南部で当日の反応に合わせる地域仕掛け候補","https://www.fishing-v.jp/program/program_data.php?pcd=6210110",{locations:["hibara-s"]}),
 rig("daiwa-sokko-5","ダイワ","快適ワカサギ仕掛け 速攻","5本針",5,["5本針","低抵抗設計","速攻タイプ"],"底・深場・渋い時の手返しを優先","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-sokko-6","ダイワ","快適ワカサギ仕掛け 速攻","6本針・全長79cm",6,["全長79cm","6本針","オールラウンド"],"迷った時の標準構成","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-sokko-7","ダイワ","快適ワカサギ仕掛け 速攻","7本針・全長86cm",7,["全長86cm","7本針","多点掛け対応"],"高活性の群れを広く拾う","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-yuwaku-wide5","ダイワ","快適ワカサギ仕掛け 誘惑","ワイドピッチ 5本針",5,["5本針","ワイドピッチ","誘惑シリーズ"],"深場や散った群れ、低活性時に","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-long7","ダイワ","快適ワカサギ仕掛け 誘惑","ロング 7本針",7,["7本針","ロング構成","広い棚を探索"],"中層を含む広い棚を探る","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-teiban-6","ダイワ","快適ワカサギ仕掛け 定番","6本針・全長80cm",6,["全長80cm","6本針","定番タイプ"],"扱いやすいオールラウンド構成","https://www.daiwa.com/jp/product/dfcsalk"),
 rig("daiwa-teppan-compact6","ダイワ","快適ワカサギ仕掛け 鉄板","コンパクト 6本針",6,["6本針","コンパクト","フロロカーボン"],"短めでトラブルを抑え、手返しよく釣る","https://www.daiwa.com/jp/product/qsf10a5"),
 rig("daiwa-sokko-gold5","ダイワ","快適ワカサギ仕掛け 速攻","ケイムラ金 5本針",5,["全長74cm","5本針","ケイムラ金"],"底・深場・朝夕の低光量時に","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-sokko-gold6","ダイワ","快適ワカサギ仕掛け 速攻","ケイムラ金 6本針",6,["全長85cm","6本針","ケイムラ金"],"標準の手返しに集魚力を加える","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-sokko-red5","ダイワ","快適ワカサギ仕掛け 速攻","サクサス赤留 5本針",5,["5本針","短ハリス","サクサス赤留"],"濁り・ローライト・底の食い渋りに","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-sokko-red6","ダイワ","快適ワカサギ仕掛け 速攻","サクサス赤留 6本針",6,["6本針","短ハリス","サクサス赤留"],"赤留で寄せつつ標準の手返しを維持","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-sokko-red7","ダイワ","快適ワカサギ仕掛け 速攻","サクサス赤留 7本針",7,["7本針","全長86cm級","サクサス赤留"],"高活性時の多点掛けを狙う","https://www.daiwa.com/jp/product/cpho2cd"),
 rig("daiwa-yuwaku-wide4","ダイワ","快適ワカサギ仕掛け 誘惑","ワイドピッチ 4本針",4,["4本針","針間約25cm","ワイドピッチ"],"警戒した群れと広く散った棚に","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-short8","ダイワ","快適ワカサギ仕掛け 誘惑","ショートピッチ 8本針",8,["8本針","ショートピッチ","高活性向け"],"濃い群れから多点掛けを狙う","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-short10","ダイワ","快適ワカサギ仕掛け 誘惑","ショートピッチ 10本針",10,["10本針","ショートピッチ","数釣り仕様"],"高活性の群れを一気に掛ける","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-long5","ダイワ","快適ワカサギ仕掛け 誘惑","ロング ケイムラ留 5本針",5,["全長62cm","5本針","ケイムラ留"],"底付近をナチュラルに誘う","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-shibuko5","ダイワ","快適ワカサギ仕掛け 誘惑","渋攻桃蛍留 5本針",5,["5本針","極細ハリス","桃蛍留"],"激渋時に餌を自然に動かす","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-middle6","ダイワ","快適ワカサギ仕掛け 誘惑","ミドル桃蛍留 6本針",6,["6本針","ミドルハリス","桃蛍留"],"入れ食いから食い渋りまで幅広く対応","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-yuwaku-color5","ダイワ","快適ワカサギ仕掛け 誘惑","ミドル 色攻Ⅱ 5本針",5,["5本針","ハリス3.9cm","カラ針"],"色で反応を探りながらバラシを抑える","https://www.daiwa.com/jp/product/70twd8u"),
 rig("daiwa-teiban-5","ダイワ","快適ワカサギ仕掛け 定番","5本針・全長68cm",5,["全長68cm","5本針","ナイロン"],"初心者にも扱いやすい短めの基本形","https://www.daiwa.com/jp/product/dfcsalk"),
 rig("daiwa-teiban-7","ダイワ","快適ワカサギ仕掛け 定番","7本針・全長98cm",7,["全長98cm","7本針","ナイロン"],"広めの棚と多点掛けに対応","https://www.daiwa.com/jp/product/dfcsalk"),
 rig("daiwa-teiban-wide4","ダイワ","快適ワカサギ仕掛け 定番","ワイドピッチ 4本針",4,["全長80cm","4本針","ナイロン"],"深場や薄い魚探反応を広く探る","https://www.daiwa.com/jp/product/dfcsalk"),
 rig("daiwa-teiban-wide5","ダイワ","快適ワカサギ仕掛け 定番","ワイドピッチ 5本針",5,["全長100cm","5本針","ナイロン"],"広棚を扱いやすい針数で探る","https://www.daiwa.com/jp/product/dfcsalk"),
 rig("daiwa-teppan-fluoro5","ダイワ","快適ワカサギ仕掛け 鉄板","フロロ 5本針",5,["5本針","フロロカーボン","太幹糸"],"手前まつりを抑えて底を攻める","https://www.daiwa.com/jp/product/qsf10a5"),
 rig("daiwa-teppan-fluoro7","ダイワ","快適ワカサギ仕掛け 鉄板","フロロ 7本針",7,["7本針","フロロカーボン","サクサス"],"丈夫な仕掛けで広い棚を数釣りする","https://www.daiwa.com/jp/product/qsf10a5"),
 rig("daiwa-teppan-compact8","ダイワ","快適ワカサギ仕掛け 鉄板","コンパクト 8本針",8,["8本針","針間10cm","フロロカーボン"],"高活性時に短い全長で多点掛けを狙う","https://www.daiwa.com/jp/product/qsf10a5"),
 rig("varivas-hibara5-05","バリバス","桧原MAX 5本鈎","狐0.5号",5,["全長60cm","5本鈎","狐0.5号"],"桧原湖の底・低活性・小型魚に","https://www.varivas.co.jp/lineup/products/id-4990/",{locations:["hibara-s","hibara-n"]}),
 rig("varivas-hibara5-1","バリバス","桧原MAX 5本鈎","狐1号",5,["全長60cm","5本鈎","狐1号"],"桧原湖の底釣りを手返しよく","https://www.varivas.co.jp/lineup/products/id-4990/",{locations:["hibara-s","hibara-n"]}),
 rig("varivas-hibara6-05","バリバス","桧原MAX 6本鈎","狐0.5号",6,["全長77cm","6本鈎","狐0.5号"],"桧原湖の小型魚と渋い反応に","https://www.varivas.co.jp/Product/searchgroup/id%3A4991",{locations:["hibara-s","hibara-n"]}),
 rig("varivas-hibara6-08","バリバス","桧原MAX 6本鈎","狐0.8号",6,["全長77cm","6本鈎","狐0.8号"],"桧原湖の標準的な状況に","https://www.varivas.co.jp/Product/searchgroup/id%3A4991",{locations:["hibara-s","hibara-n"]}),
 rig("varivas-hibara6-1","バリバス","桧原MAX 6本鈎","狐1号",6,["全長77cm","6本鈎","狐1号"],"桧原湖で中層から底まで広く対応","https://www.varivas.co.jp/Product/searchgroup/id%3A4991",{locations:["hibara-s","hibara-n"]}),
];

export const rodProducts:GearProduct[]=[
 rod("ws-style-01","上州屋","WS style #01","Regular調子",2,6,"標準",["全長320mm","オモリ負荷2〜6g","自重 約3.3g"],"ブレを抑え、小さなアタリを見やすくする万能型","https://www.johshuya.co.jp/news/detail.php?no=595667",{image:"/assets/products/ws-style-01.jpg",price:"掲載時 税込4,500円"}),
 rod("daiwa-sokko290sss","ダイワ","クリスティア ワカサギ LTD AGS","速攻290SSS",0.5,6,"柔らかめ",["全長290mm","オモリ負荷0.5〜6g","速攻調子"],"浅場から深場まで、手返しと多点掛けを狙う","https://www.daiwa.com/jp/product/jw3bsd1"),
 rod("daiwa-yuwaku335ss","ダイワ","クリスティア ワカサギ LTD AGS","誘惑335SS",2,7,"柔らかめ",["全長335mm","オモリ負荷2〜7g","柔らかい先調子"],"小さなアタリを目で追い、丁寧に掛ける","https://www.daiwa.com/jp/product/jw3bsd1"),
 rod("daiwa-yuwaku330s","ダイワ","クリスティア ワカサギ LTD AGS","誘惑330S",5,10,"硬め",["全長330mm","オモリ負荷5〜10g","やや硬め"],"重めのオモリや深場で操作感を保つ","https://www.daiwa.com/jp/product/jw3bsd1"),
 rod("daiwa-55-ssss","ダイワ","クリスティア ワカサギ 55","285SSSS",0.5,5,"柔らかめ",["全長285mm","オモリ負荷0.5〜5g","5:5胴調子"],"激渋時の小さなアタリを大きく見せる","https://www.daiwa.com/jp/product/7j8qbv1",{price:"希望本体価格 税抜7,950円",modes:["dome","ice"]}),
 rod("daiwa-55-sss","ダイワ","クリスティア ワカサギ 55","285SSS",0.5,6,"標準",["全長285mm","オモリ負荷0.5〜6g","5:5胴調子"],"初めの一本にも使いやすい万能型","https://www.daiwa.com/jp/product/7j8qbv1",{price:"希望本体価格 税抜7,950円",modes:["dome","ice","boat"]}),
 rod("daiwa-55-ss","ダイワ","クリスティア ワカサギ 55","285SS",1,8,"硬め",["全長285mm","オモリ負荷1〜8g","5:5胴調子"],"高活性・深場・多点掛けに対応","https://www.daiwa.com/jp/product/7j8qbv1",{price:"希望本体価格 税抜7,950円",modes:["dome","boat"]}),
 rod("daiwa-73-sss","ダイワ","クリスティア ワカサギ 73","285SSS",1,8,"柔らかめ",["全長285mm","オモリ負荷1〜8g","7:3先調子"],"繊細なアタリを見ながら掛ける","https://www.daiwa.com/jp/product/t2jf0br",{price:"希望本体価格 税抜7,950円",modes:["dome","ice","boat"]}),
 rod("daiwa-73-ss","ダイワ","クリスティア ワカサギ 73","285SS",3,10,"標準",["全長285mm","オモリ負荷3〜10g","7:3先調子"],"標準から深場まで誘いと合わせを両立","https://www.daiwa.com/jp/product/t2jf0br",{price:"希望本体価格 税抜7,950円",modes:["dome","ice","boat"]}),
 rod("daiwa-73-s","ダイワ","クリスティア ワカサギ 73","285S",6,14,"硬め",["全長285mm","オモリ負荷6〜14g","7:3先調子"],"重いオモリを積極的に誘って掛ける","https://www.daiwa.com/jp/product/t2jf0br",{price:"希望本体価格 税抜7,950円",modes:["dome","ice","boat"]}),
 rod("creek-cobra","CREEK","Diablo Cobra","オールラウンド",3,6,"標準",["オモリ負荷3〜6g","オールラウンド","グラス穂先"],"状況を選びにくい基本の一本","https://tk-creek.com/menu/"),
 rod("creek-juggler","CREEK","Juggler","深場・多点掛け",4,8,"硬め",["オモリ負荷4〜8g","深場対応","多点掛け向け"],"深場・流れ・浮いた群れを操作する","https://tk-creek.com/menu/"),
 rod("creek-joker","CREEK","Diablo Joker","小型魚対応",4,6,"柔らかめ",["オモリ負荷4〜6g","小型魚対応","延長対応"],"小型当歳魚のバラシを抑えて多点掛けへ","https://tk-creek.com/menu/"),
 rod("creek-sniper2","CREEK","Sniper2","先調子",3,6,"硬め",["オモリ負荷3〜6g","先調子","短いフィルム"],"低活性の短いアタリを一匹ずつ掛ける","https://tk-creek.com/menu/"),
 rod("creek-hibara-queen","CREEK","Hibara Queen","桧原湖モデル",4,7,"標準",["オモリ負荷4〜7g","桧原湖向け","滑らかな曲がり"],"桧原湖で誘いと乗せを両立。南川では7g前後の軽負荷日に優先","https://tk-creek.com/menu/",{locations:["hibara-s","hibara-n","nanakawa"]}),
 rod("creek-eruza8","CREEK","ERUZA 8","ロング・胴調子",3,9,"標準",["全長385mm","オモリ負荷3〜9g","ロング穂先"],"誘い中の触りも拾い、小型魚まで対応","https://tk-creek.com/menu/"),
 rod("varivas-hibara333","バリバス","Super桧原MAX333 RX","レギュラースロー",2,7,"柔らかめ",["全長333mm","最適負荷2〜7g","5:5調子"],"桧原湖で繊細さと多点掛けを両立","https://www.varivas.co.jp/graphiteworks/graphiteworks_list/superhibaramax333/",{locations:["hibara-s","hibara-n"]}),
 rod("varivas-icemax309","バリバス","Ice-MAX309","エクストラファースト",0,12,"硬め",["全長309mm","負荷0〜12g","1:9先調子"],"氷上の渋い小型魚を鋭く掛ける","https://www.varivas.co.jp/lineup/products/id-5059/",{modes:["ice"]}),
 rod("varivas-racing321","バリバス","RacingMAX321WRX","極先調子",2,7,"硬め",["全長321mm","最適負荷2〜7g","0.8:9.2調子"],"低活性を一匹ずつ拾う攻めの調子","https://www.varivas.co.jp/graphiteworks/graphiteworks_list/racingmax321wrx/"),
 rod("varivas-max299","バリバス","MAX299改","ライトオールラウンド",2,8,"標準",["全長299mm","最適負荷2〜8g","万能テーパー"],"釣り場を選ばず幅広い誘いに対応","https://www.varivas.co.jp/lineup/products/id-5163/"),
 rod("shimano-s01r","シマノ","レイクマスター SH","S01R",0,3.5,"柔らかめ",["全長220mm","オモリ負荷0〜3.5g","R調子"],"軽いオモリで繊細な反応を見る","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-m01f","シマノ","レイクマスター SH","M01F",0.5,6,"標準",["全長270mm","オモリ負荷0.5〜6g","F調子"],"軽量から標準域までテンポよく掛ける","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-m02r","シマノ","レイクマスター SH","M02R",2,10,"標準",["全長270mm","オモリ負荷2〜10g","R調子"],"標準からやや重めまで乗せやすく対応","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-l01f","シマノ","レイクマスター SH","L01F",0.5,7,"柔らかめ",["全長320mm","オモリ負荷0.5〜7g","F調子"],"長めの穂先で繊細なアタリを見せる","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-l02r","シマノ","レイクマスター SH","L02R",2,10,"標準",["全長320mm","オモリ負荷2〜10g","R調子"],"重さの幅が広い万能ロングタイプ","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-l03f","シマノ","レイクマスター SH","L03F",3,12,"硬め",["全長320mm","オモリ負荷3〜12g","F調子"],"深場や風のある日に操作性を優先","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-ll03r","シマノ","レイクマスター SH","LL03R",1.5,16,"標準",["全長410mm","オモリ負荷1.5〜16g","R調子"],"長さを生かして広い負荷域を乗せる","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
 rod("shimano-ll04r","シマノ","レイクマスター SH","LL04R",3,25,"硬め",["全長410mm","オモリ負荷3〜25g","R調子"],"深場・流れ・重量オモリを安定して扱う","https://fish.shimano.com/ja-JP/product/rod/wakasagi/a075f000049mq5qqaq.html"),
];

export const rigMakers:RigMaker[]=["おまかせ","上州屋","ゴールドハウス目黒","ダイワ","バリバス"];
export const rodMakers:RodMaker[]=["おまかせ","上州屋","ダイワ","CREEK","バリバス","シマノ"];
