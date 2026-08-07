const locations = [
  {
    id: 'anenuma_ice', label: '青森｜姉沼｜氷上', region: '青森', water: '姉沼', style: '氷上',
    months: [1,2], shelf: '浅場中心', rig: '短め 4〜6本針', sinker: '2〜4g', bait: '白サシ・紅サシ',
    tip: '繊細〜中間', baseCatch: 120, exposure: 'outdoor', special: '当たり年は短時間でも爆発。不調年は一気に沈黙。',
    localItems: ['カイロ', '甘い缶コーヒー']
  },
  {
    id: 'gandoko_ice', label: '岩手｜岩洞湖｜氷上', region: '岩手', water: '岩洞湖', style: '氷上',
    months: [1,2,3], shelf: '浅場か深場を神託', rig: '標準〜多点掛け', sinker: '3〜5g', bait: '白サシ・紅サシ',
    tip: '先調子〜中間', baseCatch: 140, exposure: 'ice', special: '同じ穴2日目は落ちやすい。ただしごく稀に禁忌が奇跡になる。',
    localItems: ['ソフトクリーム', '予備バッテリー']
  },
  {
    id: 'gandoko_dome', label: '岩手｜岩洞湖｜ドーム船', region: '岩手', water: '岩洞湖', style: 'ドーム船',
    months: [11,12,1,2,3], shelf: '底中心', rig: '5〜7本針', sinker: '4〜5g', bait: '白サシ・紅サシ',
    tip: '柔らかめ〜中間', baseCatch: 45, exposure: 'dome', special: '暖かさと釣果は比例しない修行枠。',
    localItems: ['温かいココア', 'ソフトクリーム']
  },
  {
    id: 'sai_ice', label: '岩手｜菜魚湖・大志田ダム｜氷上', region: '岩手', water: '菜魚湖・大志田ダム', style: '氷上',
    months: [1,2], shelf: '底中心', rig: '標準 5本前後', sinker: '3〜5g', bait: 'サシ系',
    tip: '中間', baseCatch: 90, exposure: 'ice', special: '年ごとの開催状況に左右される。まずは現地確認が吉。',
    localItems: ['湯たんぽ', 'カップ麺']
  },
  {
    id: 'hanayama_dome', label: '宮城｜花山湖｜ドーム船', region: '宮城', water: '花山湖', style: 'ドーム船',
    months: [11,12,1,2,3], shelf: '底〜中層の空中戦', rig: '底なら短め5本 / 中層なら長め7本', sinker: '赤 5〜7g', bait: '赤虫・紅サシ',
    tip: '連掛け向き・やや硬め', baseCatch: 180, exposure: 'dome', special: '蛍光オモリは嫌われがち。赤オモリが基本。マッチ棒サイズの小型が多い。',
    localItems: ['天丼', '自然薯の館', '土井工房の針外し']
  },
  {
    id: 'minamikawa_bridge', label: '宮城｜南川ダム｜橋上', region: '宮城', water: '南川ダム', style: '橋上',
    months: [10,11,12,1,2], shelf: '底中心', rig: '長め 4〜8本針', sinker: '7〜24g', bait: '何でもあり',
    tip: '硬め＋30cm延長吉', baseCatch: 95, exposure: 'outdoor', special: '朝、特に8時前が強い。風が吹くと一気に難化。',
    localItems: ['コーヒー牛乳', '防風手袋', '南川会の最新投稿']
  },
  {
    id: 'wakuya_pier', label: '宮城｜涌谷町釣り公園｜桟橋', region: '宮城', water: '涌谷町釣り公園', style: '桟橋',
    months: [10,11,12,1,2], shelf: '魚探シューティング', rig: '5本針前後', sinker: '3〜5g', bait: '白サシ',
    tip: 'ガチガチ', baseCatch: 18, exposure: 'outdoor', special: '大型しか釣れない。猫は釣れてる人の後ろに張り付く。オリンピックイヤーは覚醒。',
    localItems: ['蓋付き魚入れ', '猫用の視線対策', '白サシ']
  },
  {
    id: 'towada_dome', label: '秋田｜十和田湖・小坂側｜ドーム船', region: '秋田', water: '十和田湖・小坂側', style: 'ドーム船',
    months: [11,12,1,2,3], shelf: '深場中心', rig: '標準 5〜7本針', sinker: '4〜6g', bait: 'サシ系',
    tip: '中間', baseCatch: 60, exposure: 'dome', special: '新しい釣り場。定番はまだ育成中。風で運休しやすい。',
    localItems: ['温泉', '甘酒']
  },
  {
    id: 'hibara_s_dome', label: '福島｜桧原湖南部｜屋形・ドーム', region: '福島', water: '桧原湖南部', style: '屋形・ドーム',
    months: [11,12,1,2,3], shelf: '底中心', rig: '標準〜短め', sinker: '3〜5g', bait: '白サシ・紅サシ・赤虫',
    tip: '繊細〜中間', baseCatch: 85, exposure: 'dome', special: '基本は底釣り。食い渋り時は小針と小さな誘いが吉。',
    localItems: ['ソースカツ丼', '目黒の釣果情報']
  },
  {
    id: 'hibara_s_ice', label: '福島｜桧原湖南部｜氷上', region: '福島', water: '桧原湖南部', style: '氷上',
    months: [1,2,3], shelf: '底中心', rig: '標準〜短め', sinker: '3〜5g', bait: '白サシ・紅サシ・赤虫',
    tip: '繊細〜中間', baseCatch: 110, exposure: 'ice', special: '基本は底釣り。終盤はさらに底が強くなる。',
    localItems: ['ソースカツ丼', 'ホッカイロ']
  },
  {
    id: 'hibara_n_dome', label: '福島｜桧原湖北部｜屋形・ドーム', region: '福島', water: '桧原湖北部', style: '屋形・ドーム',
    months: [11,12,1,2,3], shelf: '底中心', rig: '短ハリス気味', sinker: '4〜5g', bait: '白サシ・紅サシ',
    tip: '繊細', baseCatch: 75, exposure: 'dome', special: '南部より小型傾向。小針と丁寧な釣りが合う。',
    localItems: ['ミルクティー', 'ソースカツ丼']
  },
  {
    id: 'hibara_n_ice', label: '福島｜桧原湖北部｜氷上', region: '福島', water: '桧原湖北部', style: '氷上',
    months: [1,2,3], shelf: '底中心', rig: '短ハリス気味', sinker: '4〜5g', bait: '白サシ・紅サシ',
    tip: '繊細', baseCatch: 100, exposure: 'ice', special: '小型に寄せると数が伸びやすい。',
    localItems: ['ホッカイロ', 'チョコパン']
  },
  {
    id: 'onogawa_dome', label: '福島｜小野川湖｜ドーム', region: '福島', water: '小野川湖', style: 'ドーム',
    months: [11,12,1,2,3], shelf: '底中心、ときどき中層反応', rig: '標準 5〜7本針', sinker: '5〜7g', bait: '白サシ・紅サシ',
    tip: '中間〜やや硬め', baseCatch: 90, exposure: 'dome', special: '底に良型が混じる。桧原より少し重めのイメージ。',
    localItems: ['ホットレモン', '厚手手袋']
  },
  {
    id: 'onogawa_ice', label: '福島｜小野川湖｜氷上', region: '福島', water: '小野川湖', style: '氷上',
    months: [1,2,3], shelf: '底中心、ときどき中層反応', rig: '標準 5〜7本針', sinker: '5〜7g', bait: '白サシ・紅サシ',
    tip: '中間〜やや硬め', baseCatch: 120, exposure: 'ice', special: '中層は小型、底は良型のパターンが出やすい。',
    localItems: ['ホットレモン', '厚手手袋']
  }
];

const cards = [
  { n:'0', name:'放浪のワカサギ', rank:'B', color:'bronze', effect:0.95, tags:['move'], tagline:'定番を外れた先に群れがいる。' },
  { n:'I', name:'仕掛けの魔術師', rank:'A', color:'silver', effect:1.12, tags:['change'], tagline:'小さな工夫が大きな差になる。' },
  { n:'II', name:'氷下の巫女', rank:'A', color:'silver', effect:1.06, tags:['finesse'], tagline:'静かな穂先だけが答えを知る。' },
  { n:'III', name:'女帝', rank:'A', color:'silver', effect:1.14, tags:['big'], tagline:'豊かな魚影と満ちた気配。' },
  { n:'IV', name:'皇帝', rank:'A', color:'silver', effect:1.15, tags:['standard'], tagline:'王道を守る者に安定が宿る。' },
  { n:'V', name:'法王', rank:'A', color:'silver', effect:1.08, tags:['advice'], tagline:'現地の助言がそのまま近道になる。' },
  { n:'VI', name:'恋人達', rank:'A', color:'silver', effect:1.1, tags:['bait'], tagline:'当たり餌との相性が今日を決める。' },
  { n:'VII', name:'戦車', rank:'S', color:'gold', effect:1.28, tags:['rush'], tagline:'群れが入ったら迷わず手返し。' },
  { n:'VIII', name:'力', rank:'A', color:'silver', effect:1.14, tags:['hookset'], tagline:'一瞬の合わせが釣果を分ける。' },
  { n:'IX', name:'隠者', rank:'B', color:'bronze', effect:1.0, tags:['quiet'], tagline:'静かな穴にだけ残る一匹がいる。' },
  { n:'X', name:'運命の輪', rank:'S', color:'gold', effect:1.24, tags:['cycle'], tagline:'時合いは巡る。備えた者が取る。' },
  { n:'XI', name:'正義', rank:'A', color:'silver', effect:1.12, tags:['shelf'], tagline:'棚が合えば湖は答えを返す。' },
  { n:'XII', name:'吊るされたワカサギ', rank:'C', color:'white', effect:0.78, tags:['wait'], tagline:'今日は焦った者から見放される。' },
  { n:'XIII', name:'死神', rank:'B', color:'bronze', effect:1.03, tags:['reset'], tagline:'古い正解を捨てた先に流れが変わる。' },
  { n:'XIV', name:'節制', rank:'A', color:'silver', effect:1.08, tags:['balance'], tagline:'誘いと止めの調和が鍵になる。' },
  { n:'XV', name:'悪魔', rank:'C', color:'white', effect:0.74, tags:['tough'], tagline:'反応はあるのに口を使わぬ日。' },
  { n:'XVI', name:'塔', rank:'D', color:'black', effect:0.55, tags:['danger'], tagline:'今日は安全が最大の大漁。' },
  { n:'XVII', name:'朝まずめの星', rank:'A', color:'silver', effect:1.18, tags:['morning'], tagline:'早起きした者にだけ見える吉兆。' },
  { n:'XVIII', name:'月', rank:'B', color:'bronze', effect:0.92, tags:['confuse'], tagline:'魚探の反応が真実とは限らない。' },
  { n:'XIX', name:'太陽', rank:'SS', color:'gold', effect:1.42, tags:['bigrush'], tagline:'爆釣の光が湖を照らす。' },
  { n:'XX', name:'審判', rank:'S', color:'gold', effect:1.22, tags:['return'], tagline:'去った群れがもう一度戻ってくる。' },
  { n:'XXI', name:'世界', rank:'SS', color:'gold', effect:1.5, tags:['complete'], tagline:'すべてが噛み合う完成の一日。' }
];

const locationSelect = document.getElementById('location');
locations.forEach(loc => {
  const opt = document.createElement('option');
  opt.value = loc.id;
  opt.textContent = loc.label;
  locationSelect.appendChild(opt);
});

document.getElementById('tripDate').value = new Date().toISOString().slice(0,10);

document.getElementById('fortune-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('tripDate').value;
  const loc = locations.find(l => l.id === locationSelect.value);
  const mode = document.getElementById('mode').value;
  if (!date || !loc) return;
  renderFortune(date, loc, mode);
});

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pickWeighted(list, weights, seed) {
  const total = weights.reduce((a,b)=>a+b,0);
  let roll = seed % 100000 / 100000 * total;
  for (let i=0;i<list.length;i++) {
    if (roll < weights[i]) return list[i];
    roll -= weights[i];
  }
  return list[list.length-1];
}

function chooseCard(mode, seed) {
  const pools = {
    normal: { SS: 2.5, S: 12, A: 51, B: 22, C: 10, D: 2.5 },
    hard:   { SS: 4,   S: 14, A: 40, B: 22, C: 14, D: 6 }
  };
  const w = pools[mode];
  const cardWeights = cards.map(c => {
    if (c.rank === 'SS') return w.SS / 2;
    if (c.rank === 'S') return w.S / 3;
    if (c.rank === 'A') return w.A / 10;
    if (c.rank === 'B') return w.B / 4;
    if (c.rank === 'C') return w.C / 2;
    return w.D;
  });
  return pickWeighted(cards, cardWeights, seed);
}

function getSeasonProfile(month, location) {
  const inSeason = location.months.includes(month);
  if (!inSeason) {
    return { label:'期間外', factor:0.35, note:'現在はワカサギ釣り期間外です。来季への準備運として占います。', style:'off' };
  }
  if (month === 11) return { label:'開幕期', factor:0.82, note:'シーズン序盤。群れは不安定で、様子見の空気が残ります。', style:'early' };
  if (month === 12) return { label:'安定前期', factor:1.0, note:'定番パターンが育ちはじめる時期です。', style:'mid' };
  if (month === 1) return { label:'盛期', factor:1.16, note:'群れが安定しやすく、数釣りの期待が高まる時期です。', style:'peak' };
  if (month === 2) return { label:'変化期', factor:0.98, note:'場所ムラや食い渋りも混ざりやすい時期です。', style:'late' };
  if (month === 3) return { label:'終盤', factor:0.86, note:'終盤戦。底釣りの比重が高まり、丁寧な釣りが吉。', style:'bottom' };
  if (month === 10) return { label:'開幕準備', factor:0.78, note:'場所によっては開幕直後。情報戦の空気が濃い時期です。', style:'early' };
  return { label:'通常期', factor:1.0, note:'湖はいつもの表情を見せています。', style:'mid' };
}

function simulateWeather(date, location, season, seed) {
  const month = new Date(date).getMonth() + 1;
  let baseTemp = 0;
  if ([12,1,2].includes(month)) baseTemp = -5;
  else if (month === 3) baseTemp = 1;
  else if (month === 11) baseTemp = 4;
  else if (month === 10) baseTemp = 9;
  if (location.region === '青森' || location.region === '岩手') baseTemp -= 2;
  if (location.region === '福島') baseTemp += 1;
  const temp = Math.round((baseTemp + ((seed % 13) - 6)) * 10) / 10;

  const windSpeed = Math.max(0.8, Math.round((1.5 + ((Math.floor(seed/7) % 85) / 10)) * 10) / 10);
  const dirs = ['北', '北東', '東', '南東', '南', '南西', '西', '北西'];
  const windDir = dirs[Math.floor(seed / 19) % dirs.length];
  const conditions = ['晴れ', 'くもり', '雪', '小雪', '晴れのちくもり'];
  const condition = conditions[Math.floor(seed / 31) % conditions.length];

  let factor = 1;
  if (windSpeed >= 7) factor -= 0.15;
  else if (windSpeed >= 5) factor -= 0.08;
  else if (windSpeed <= 2.5) factor += 0.04;
  if (condition.includes('雪')) factor -= 0.03;
  if (temp < -8 && location.exposure !== 'dome') factor -= 0.05;

  return { temp, windSpeed, windDir, condition, factor };
}

function buildGuidance(location, card, season, weather, mode, seed) {
  let shelf = location.shelf;
  let rig = location.rig;
  let sinker = location.sinker;
  let bait = location.bait;
  let tip = location.tip;

  if (location.water.includes('桧原') || location.water.includes('小野川')) {
    shelf = season.style === 'bottom' ? '底＋0〜30cm' : '基本は底、反応次第で少し切る';
  }
  if (location.id === 'gandoko_ice') {
    shelf = (seed % 2 === 0) ? '浅場神託 2〜5m帯' : '深場神託 8〜16m帯';
  }
  if (card.tags.includes('shelf')) shelf += '／棚を10〜20cm刻みで探る';
  if (card.tags.includes('finesse') || card.tags.includes('wait')) {
    rig = '短め・小針寄り';
    bait = bait.includes('・') ? bait + ' を小さく' : bait + ' を小さく';
    tip = '繊細寄り';
  }
  if (card.tags.includes('rush') || card.tags.includes('bigrush')) {
    rig = location.rig.includes('多') ? location.rig : location.rig + '／手返し重視';
    tip = '連掛け対応';
  }
  if (card.tags.includes('change') || card.tags.includes('reset')) {
    rig += '／途中で交換吉';
  }
  if (card.tags.includes('bait')) {
    bait += '／2種類比較推奨';
  }
  if (card.tags.includes('big')) {
    tip = 'やや硬め〜硬め';
  }
  if (card.tags.includes('danger')) {
    sinker += '／無理をしない';
  }

  if (weather.windSpeed >= 5) {
    sinker = adjustSinkerHeavier(location.sinker, location.id);
    if (location.exposure === 'outdoor' || location.exposure === 'ice') tip += '／風対策優先';
  }

  if (location.id === 'wakuya_pier') {
    bait = '白サシ固定';
    tip = 'ガチガチ固定';
    rig = '5本針前後・魚探シューティング';
  }
  if (location.id === 'hanayama_dome') {
    sinker = weather.windSpeed >= 5 ? '赤 7〜10g' : '赤 5〜7g';
  }
  if (location.id === 'minamikawa_bridge') {
    shelf = '底中心／反応が切れたら底から30cmまで';
  }
  return { shelf, rig, sinker, bait, tip };
}

function adjustSinkerHeavier(base, id) {
  if (id === 'minamikawa_bridge') return '14〜24g';
  if (id === 'wakuya_pier') return '4〜5g';
  if (id === 'hanayama_dome') return '赤 7〜10g';
  if (id.includes('hibara') || id.includes('onogawa')) return '5〜7g';
  if (id.includes('gandoko')) return '4〜5g';
  return base;
}

function calcCatch(location, season, weather, card, mode, seed) {
  const modeFactor = mode === 'hard' ? 1.1 : 1.0;
  const noise = 0.85 + ((Math.floor(seed / 11) % 35) / 100);
  let main = Math.round(location.baseCatch * season.factor * weather.factor * card.effect * modeFactor * noise);
  if (location.id === 'wakuya_pier') {
    const olympic = (new Date(seed).getFullYear() || new Date().getFullYear()) % 4 === 0;
    main = olympic ? Math.max(main, 80 + (seed % 30)) : Math.min(main, 28 + (seed % 9));
  }
  if (card.tags.includes('danger')) main = Math.max(0, Math.round(main * 0.6));
  main = Math.max(0, main);
  const low = Math.max(0, Math.round(main * 0.55));
  const high = Math.max(low, Math.round(main * (mode === 'hard' ? 1.8 : 1.45)));
  return { main, low, high };
}

function chooseLuckyItem(location, card, seed, mode) {
  const common = ['コーヒー牛乳', 'チョコ', 'あんぱん', 'カイロ', '予備バッテリー'];
  const dojo = ['土井工房の針外し', '土井工房カウンター'];
  const gag = ['CHANEL N°5', '使い道のない六角レンチ', '左だけの手袋', '魚に謝る気持ち'];
  let pool = [...location.localItems, ...common, ...dojo];
  if (mode === 'hard') pool = pool.concat(gag);
  if (card.tags.includes('bigrush')) pool.push('土井工房の針外し', '予備バッテリー');
  if (location.id === 'wakuya_pier') pool.push('蓋付き魚入れ');
  return pool[seed % pool.length];
}

function buildOracleText(location, card, season, weather, guidance, catchData) {
  if (season.style === 'off') {
    return `${season.note} それでもカードは語ります。次の釣行で持つべきもの、捨てるべき迷いを整える日です。`;
  }
  const intros = {
    danger: `風と寒さが湖の表情を変えています。今日は釣果よりも無事に帰ることが勝ちです。`,
    shelf: `魚はいます。問題は、あなたの仕掛けがその層にいるかどうかです。`,
    bigrush: `群れの波が一気に押し寄せます。考えるより先に落とし、掛け、外し、また落とす日です。`,
    rush: `回遊の勢いを取れるかどうかで今日の差がつきます。`,
    tough: `反応はあるのに食わない、そんな悪戯な一日。餌と間の取り方で粘る価値があります。`,
    wait: `今日は動かしすぎると離れます。止める勇気がアタリを呼びます。`,
    default: `${location.water} は今日も簡単には答えをくれません。ですが、正しい一手を選べば道は開きます。`
  };
  let intro = intros.default;
  for (const tag of card.tags) {
    if (intros[tag]) { intro = intros[tag]; break; }
  }

  let weatherLine = '';
  if (location.id === 'minamikawa_bridge' || location.id === 'wakuya_pier') {
    weatherLine = weather.windSpeed >= 5
      ? `風の数字以上に体感は厳しいでしょう。手元の防寒とオモリの安定が鍵です。`
      : `風はまだ許容範囲。寒さ対策ができれば釣りに集中しやすい日です。`;
  } else if (location.exposure === 'ice') {
    weatherLine = weather.temp < -8 ? '氷上はしっかり冷え込みます。焦らず準備を整えてから穴に向かいましょう。'
      : '氷上としては標準的な表情。まずは棚と群れの位置を読みたい日です。';
  } else {
    weatherLine = '屋形・ドーム系では外の天候はやや緩和されますが、群れの機嫌までは守ってくれません。';
  }

  return `${intro} ${weatherLine} 今日の神託棚は「${guidance.shelf}」。予想本命は${catchData.main}匹。${location.special}`;
}

function buildCatchText(location, card, season, catchData, weather) {
  if (season.style === 'off') return '期間外のため釣果は神託イメージです。来季の準備を整えるほど運が育ちます。';
  if (card.tags.includes('danger')) return '今日は撤退判断も立派な大吉。無理に数字を追わず、安全優先で。';
  if (location.id === 'minamikawa_bridge') return '朝の群れを拾えれば三桁が見えます。出遅れると数字は一気に痩せます。';
  if (location.id === 'wakuya_pier') return '数より型の湖です。少なくても一匹の存在感は大きく、猫の視線も濃くなります。';
  if (card.tags.includes('bigrush')) return '釣れている間は迷わず手返し。餌や電池の補充は早めに。';
  if (weather.windSpeed >= 5) return '風が強く、仕掛けの安定感がそのまま釣果差になります。';
  return '大崩れはしにくい日。小さな調整を丁寧に続けた人に上振れが来ます。';
}

function renderFortune(date, location, mode) {
  const seed = hashString(`${date}_${location.id}_${mode}`);
  const month = new Date(date).getMonth() + 1;
  const season = getSeasonProfile(month, location);
  const weather = simulateWeather(date, location, season, seed);
  const card = chooseCard(mode, seed);
  const guidance = buildGuidance(location, card, season, weather, mode, seed);
  const catchData = calcCatch(location, season, weather, card, mode, seed);
  const luckyItem = chooseLuckyItem(location, card, seed, mode);
  const oracle = buildOracleText(location, card, season, weather, guidance, catchData);
  const catchText = buildCatchText(location, card, season, catchData, weather);

  document.getElementById('emptyState').classList.add('hidden');
  document.getElementById('resultContent').classList.remove('hidden');

  document.getElementById('resultLocation').textContent = location.label;
  document.getElementById('resultMeta').textContent = `${date}｜${mode.toUpperCase()}｜${season.label}`;
  document.getElementById('weatherCondition').textContent = `試作気象：${weather.condition}`;
  document.getElementById('weatherTemp').textContent = `${weather.temp}℃`;
  document.getElementById('weatherWind').textContent = `${weather.windDir} ${weather.windSpeed}m/s`;
  document.getElementById('seasonAlert').textContent = season.note + (season.style === 'off' ? ' それでもカードはめくれます。' : '');

  const tarotCard = document.getElementById('tarotCard');
  tarotCard.className = `tarot-card rank-${card.color}`;
  document.getElementById('tarotRankBadge').textContent = `${card.rank} RANK`;
  document.getElementById('tarotNumber').textContent = card.n;
  document.getElementById('tarotName').textContent = card.name;
  document.getElementById('tarotTagline').textContent = card.tagline;
  document.getElementById('oracleText').textContent = oracle;

  document.getElementById('guideShelf').textContent = guidance.shelf;
  document.getElementById('guideRig').textContent = guidance.rig;
  document.getElementById('guideSinker').textContent = guidance.sinker;
  document.getElementById('guideBait').textContent = guidance.bait;
  document.getElementById('guideTip').textContent = guidance.tip;

  document.getElementById('catchMain').textContent = `${catchData.main}匹`;
  document.getElementById('catchRange').textContent = `神託範囲 ${catchData.low}〜${catchData.high}匹`;
  document.getElementById('catchText').textContent = catchText;

  document.getElementById('luckyItem').textContent = luckyItem;
  document.getElementById('localTip').textContent = location.special;
}
