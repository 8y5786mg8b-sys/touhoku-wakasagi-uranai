"use client";
import {useEffect,useMemo,useState} from "react";
import {locations,Location} from "./data/locations";
import {makeFortune,GameMode,Fortune} from "./lib/fortune";
import {getWeather} from "./lib/weather";
import {locationInfo} from "./data/locationInfo";
import {GearProduct,rigMakers,rodMakers,RigMaker,RodMaker} from "./data/products";
const today=()=>new Date().toISOString().slice(0,10);

interface InstallPromptEvent extends Event {
 prompt:()=>Promise<void>;
 userChoice:Promise<{outcome:"accepted"|"dismissed"}>;
}

export default function FortuneApp(){
 const [locationId,setLocationId]=useState("hanayama"),[date,setDate]=useState(today()),[mode,setMode]=useState("dome"),[game,setGame]=useState<GameMode>("normal"),[nonce,setNonce]=useState(0),[result,setResult]=useState<Fortune|null>(null),[revealing,setRevealing]=useState(false);
 const [rigMaker,setRigMaker]=useState<RigMaker>("おまかせ"),[rodMaker,setRodMaker]=useState<RodMaker>("おまかせ");
 const loc=useMemo(()=>locations.find(x=>x.id===locationId)!,[locationId]);
 const changeLocation=(id:string)=>{const n=locations.find(x=>x.id===id)!;setLocationId(id);setMode(n.modes[0].id);setResult(null)};
 const draw=async()=>{setRevealing(true);const weather=await getWeather(loc.id,date);setResult(makeFortune(loc,date,mode,game,nonce,weather,rigMaker,rodMaker));setNonce(n=>n+1);setRevealing(false);setTimeout(()=>window.scrollTo({top:420,behavior:"smooth"}),50)};
 useEffect(()=>{if("serviceWorker" in navigator)navigator.serviceWorker.register("/sw.js").catch(()=>undefined)},[]);
 return <main><div className="snow"/><header className="hero"><span className="eyebrow">氷下にきらめく、今日の神託</span><div className="fish-mark">◇ ── 𓆝 ── ◇</div><h1>東北ワカサギ占い</h1><p>実際の釣り場情報 × 天気 × タロット</p></header>
 <section className="panel form-panel"><div className="ornament">✦　釣行の条件　✦</div><label>釣行日<div className="date-shell"><input type="date" value={date} onChange={e=>{setDate(e.target.value);setResult(null)}}/></div></label><label>釣り場<select value={locationId} onChange={e=>changeLocation(e.target.value)}>{[...new Set(locations.map(x=>x.prefecture))].map(p=><optgroup label={p} key={p}>{locations.filter(x=>x.prefecture===p).map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</optgroup>)}</select></label><label>釣りモード<div className="segmented">{loc.modes.map(x=><button type="button" className={mode===x.id?"active":""} onClick={()=>{setMode(x.id);setResult(null)}} key={x.id}>{x.label}</button>)}</div></label><label>ゲームモード<div className="mode-grid"><button type="button" className={game==="normal"?"mode active":"mode"} onClick={()=>{setGame("normal");setResult(null)}}><b>NORMAL</b><small>釣り場データと天気を強く反映</small></button><button type="button" className={game==="hard"?"mode active hard":"mode hard"} onClick={()=>{setGame("hard");setResult(null)}}><b>HARD</b><small>道具と物語が大きく暴れる</small></button></div></label><div className="maker-field"><span>商品メーカー <small>任意</small></span><div className="maker-grid"><label>仕掛け<select value={rigMaker} onChange={e=>{setRigMaker(e.target.value as RigMaker);setResult(null)}}>{rigMakers.map(x=><option key={x}>{x}</option>)}</select></label><label>穂先<select value={rodMaker} onChange={e=>{setRodMaker(e.target.value as RodMaker);setResult(null)}}>{rodMakers.map(x=><option key={x}>{x}</option>)}</select></label></div><small>おまかせは釣り場・針数・オモリ負荷に近い商品を選びます</small></div><button className="draw" onClick={draw} disabled={revealing}>{revealing?"天気と氷下の声を確認中…":"今日の一枚を引く"}</button><p className="hint">NORMALは現実寄り、HARDは安全条件以外が大きく変化します</p></section>
 {result&&<Result result={result} location={loc} date={date} mode={loc.modes.find(x=>x.id===mode)?.label||""} game={game} redraw={draw}/>}<PWAInstall/><footer>天気予報：Open-Meteo。現地の規則・公式発表・氷況を最優先してください。</footer></main>}

function PWAInstall(){
 const [prompt,setPrompt]=useState<InstallPromptEvent|null>(null),[open,setOpen]=useState(false),[installed,setInstalled]=useState(false),[isIOS,setIsIOS]=useState(false);
 useEffect(()=>{
  const init=window.setTimeout(()=>{setInstalled(window.matchMedia("(display-mode: standalone)").matches||(navigator as Navigator&{standalone?:boolean}).standalone===true);setIsIOS(/iphone|ipad|ipod/i.test(navigator.userAgent))},0);
  const ready=(event:Event)=>{event.preventDefault();setPrompt(event as InstallPromptEvent)};
  const done=()=>setInstalled(true);
  window.addEventListener("beforeinstallprompt",ready);window.addEventListener("appinstalled",done);
  return()=>{window.clearTimeout(init);window.removeEventListener("beforeinstallprompt",ready);window.removeEventListener("appinstalled",done)};
 },[]);
 if(installed)return null;
 const install=async()=>{if(prompt){await prompt.prompt();const choice=await prompt.userChoice;if(choice.outcome==="accepted")setInstalled(true);setPrompt(null)}else setOpen(v=>!v)};
 return <section className="pwa-install" aria-label="アプリとして使う"><button type="button" className="pwa-install-button" onClick={install}><img src="/icons/icon-192.png" alt=""/><span><b>ホーム画面に追加</b><small>釣行前にすぐ開けます</small></span><i>›</i></button>{open&&<div className="pwa-install-help"><b>{isIOS?"iPhone・iPadでの追加方法":"ホーム画面への追加方法"}</b><p>{isIOS?"ブラウザの共有ボタンをタップし、「ホーム画面に追加」→「追加」を選んでください。":"ブラウザのメニューから「アプリをインストール」または「ホーム画面に追加」を選んでください。"}</p><small>追加後は専用アイコンからアプリのように起動できます。</small></div>}</section>
}

function Result({result:r,location,date,mode,game,redraw}:{result:Fortune;location:Location;date:string;mode:string;game:GameMode;redraw:()=>void}){
 const w=r.weather;
 const weatherLink=locationInfo[location.id]?.links.find(link=>link.url.includes("tsuritenki.jp"));
 const [cardOpen,setCardOpen]=useState(false);
 useEffect(()=>{if(!cardOpen)return;const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setCardOpen(false)};document.addEventListener("keydown",close);document.body.classList.add("modal-open");return()=>{document.removeEventListener("keydown",close);document.body.classList.remove("modal-open")}},[cardOpen]);
 return <section className="result"><div className="result-head"><span>{location.name}</span><span>{date.replaceAll("-",".")}</span><span>{mode}</span><span>{game.toUpperCase()}</span></div><div className="tarot-wrap"><button type="button" className="tarot-card tarot-button" onClick={()=>setCardOpen(true)} aria-label={`${r.card.roman} ${r.card.name}のカードを拡大表示`}><img src={r.card.image} alt={`${r.card.roman} ${r.card.name}`}/><span>タップで拡大</span></button><div><p className="eyebrow">TODAY&apos;S TAROT</p><h2>{r.card.roman}　{r.card.name}</h2><div className="rank"><small>釣行ランク</small><strong>{r.rank}</strong></div></div></div>
 {cardOpen&&<div className="card-lightbox" role="dialog" aria-modal="true" aria-label={`${r.card.roman} ${r.card.name} 拡大画像`} onClick={()=>setCardOpen(false)}><button type="button" className="lightbox-close" onClick={()=>setCardOpen(false)} aria-label="拡大表示を閉じる">×</button><img src={r.card.image} alt={`${r.card.roman} ${r.card.name}`} onClick={e=>e.stopPropagation()}/><p>{r.card.roman}　{r.card.name}</p><small>背景または × をタップして閉じる</small></div>}
 <article className="oracle"><span>本日の神託</span><p>{r.oracle}</p>{r.event&&<em>特殊イベント：{r.event}</em>}</article>
 <section className="weather-card"><div className="weather-title"><span>釣行日の天気予報</span><b>{w?w.label:"予報範囲外／取得できません"}</b></div>{w&&<div className="weather-grid"><div><small>気温</small><strong>{w.min.toFixed(1)}〜{w.max.toFixed(1)}℃</strong></div><div><small>風</small><strong>{w.directionLabel} {(w.wind/3.6).toFixed(1)}m/s</strong></div><div><small>最大瞬間風速</small><strong>{(w.gust/3.6).toFixed(1)}m/s</strong><span className="speed-equivalent">時速{w.gust.toFixed(1)}km相当</span></div><div><small>降水確率</small><strong>{w.rain}%</strong></div></div>}<small className="weather-note">予報は占いの道具選びにも反映されます</small>{weatherLink&&<a className="weather-detail-link" href={weatherLink.url} target="_blank" rel="noreferrer"><span>{weatherLink.label}</span><b>詳しく見る ↗</b></a>}</section>
 {location.safety&&<div className="safety"><b>安全のお告げ</b><p>{location.safety}</p></div>}
 <div className="catch"><small>{r.outOfSeason?"OFF SEASON":"予想釣果"}</small><strong>{r.catchText}</strong><span>{location.size}</span></div>
 {!r.outOfSeason&&<div className="details expanded">{[["棚",r.shelf],["仕掛け",r.rig],["オモリ",r.sinker],["餌",r.bait],["穂先",r.rod],["時合",r.timing],["ラッキーアイテム",r.lucky]].map(([a,b])=><div className={a==="オモリ"||a==="仕掛け"||a==="穂先"?"wide":""} key={a}><small>{a}</small><b>{b}</b></div>)}</div>}
 {(game==="hard"||!r.outOfSeason)&&(r.rigProduct||r.rodProduct)&&<section className={`gear-recommendations ${game==="hard"?"hard-pick":""}`}><div className="gear-heading"><span>{game==="hard"?"HARD実在商品抽選":"条件に合う実在商品"}</span><small>{game==="hard"?"非該当・適合保証なし":"公式・実釣掲載から選定"}</small></div>{r.rigProduct&&<GearCard product={r.rigProduct}/>} {r.rodProduct&&<GearCard product={r.rodProduct}/>}<p className="gear-note">{game==="hard"?"HARDは釣り場・針数・オモリ負荷に合わない商品も出ます。実釣時は上段の安全条件と商品の適合負荷を優先してください。":"カード全体をタップするとメーカー公式または商品を確認できる掲載情報を開きます。上州屋は許諾済みの商品画像がある候補のみ画像を掲載し、その他は商品名・仕様・リンクで表示しています。在庫と現行仕様はリンク先または店頭でご確認ください。"}</p></section>}
 <details><summary>釣り場の現実情報</summary><ul>{location.notes.map(n=><li key={n}>{n}</li>)}</ul></details><LocationInformation id={location.id}/><button className="again" onClick={redraw}>もう一度占う</button></section>
}

function GearCard({product}:{product:GearProduct}){
 return <a className={`gear-card ${product.image?"has-image":"no-image"}`} href={product.link} target="_blank" rel="noreferrer" aria-label={`${product.name} ${product.variant}の商品情報を見る`}>{product.image?<div className="gear-photo"><img src={product.image} alt={`${product.name} ${product.variant}`}/><span>{product.category==="rig"?"仕掛け":"穂先"}</span></div>:<div className="gear-placeholder"><span>{product.category==="rig"?"仕掛け":"穂先"}</span><b>{product.maker}</b><small>PRODUCT<br/>DATA</small></div>}<div className="gear-copy"><small>{product.maker}</small><h3>{product.name}</h3><b>{product.variant}</b><ul>{product.specs.map(spec=><li key={spec}>{spec}</li>)}</ul><p>{product.use}</p>{product.price&&<em>{product.price}</em>}<strong>商品・掲載情報を見る ↗</strong></div></a>
}

function LocationInformation({id}:{id:string}){
 const info=locationInfo[id]; if(!info)return null;
 return <section className="location-info"><div className="info-heading"><span>現地インフォメーション</span><b>釣行前に確認</b></div><dl><div><dt>漁期</dt><dd>{info.season}</dd></div><div><dt>料金</dt><dd>{info.fee}</dd></div>{info.hours&&<div><dt>時間</dt><dd>{info.hours}</dd></div>}</dl><p>{info.note}</p><div className="info-links">{info.links.map(link=><a className={link.kind==="primary"?"primary":""} href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label}<span>↗</span></a>)}</div><small>料金・営業期間は変更される場合があります。リンク先の最新情報を優先してください。</small></section>
}
