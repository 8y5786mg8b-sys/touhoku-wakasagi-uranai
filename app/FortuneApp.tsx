"use client";
import {useEffect,useMemo,useState} from "react";
import {locations,Location} from "./data/locations";
import {makeFortune,GameMode,Fortune} from "./lib/fortune";
import {getWeather} from "./lib/weather";
import {locationInfo} from "./data/locationInfo";
const today=()=>new Date().toISOString().slice(0,10);

export default function FortuneApp(){
 const [locationId,setLocationId]=useState("hanayama"),[date,setDate]=useState(today()),[mode,setMode]=useState("dome"),[game,setGame]=useState<GameMode>("normal"),[nonce,setNonce]=useState(0),[result,setResult]=useState<Fortune|null>(null),[revealing,setRevealing]=useState(false);
 const loc=useMemo(()=>locations.find(x=>x.id===locationId)!,[locationId]);
 const changeLocation=(id:string)=>{const n=locations.find(x=>x.id===id)!;setLocationId(id);setMode(n.modes[0].id);setResult(null)};
 const draw=async()=>{setRevealing(true);const weather=await getWeather(loc.id,date);setResult(makeFortune(loc,date,mode,game,nonce,weather));setNonce(n=>n+1);setRevealing(false);setTimeout(()=>window.scrollTo({top:420,behavior:"smooth"}),50)};
 return <main><div className="snow"/><header className="hero"><span className="eyebrow">氷下にきらめく、今日の神託</span><div className="fish-mark">◇ ── 𓆝 ── ◇</div><h1>東北ワカサギ占い</h1><p>実際の釣り場情報 × 天気 × タロット</p></header>
 <section className="panel form-panel"><div className="ornament">✦　釣行の条件　✦</div><label>釣行日<div className="date-shell"><input type="date" value={date} onChange={e=>{setDate(e.target.value);setResult(null)}}/></div></label><label>釣り場<select value={locationId} onChange={e=>changeLocation(e.target.value)}>{[...new Set(locations.map(x=>x.prefecture))].map(p=><optgroup label={p} key={p}>{locations.filter(x=>x.prefecture===p).map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</optgroup>)}</select></label><label>釣りモード<div className="segmented">{loc.modes.map(x=><button type="button" className={mode===x.id?"active":""} onClick={()=>{setMode(x.id);setResult(null)}} key={x.id}>{x.label}</button>)}</div></label><label>ゲームモード<div className="mode-grid"><button type="button" className={game==="normal"?"mode active":"mode"} onClick={()=>{setGame("normal");setResult(null)}}><b>NORMAL</b><small>釣り場データと天気を強く反映</small></button><button type="button" className={game==="hard"?"mode active hard":"mode hard"} onClick={()=>{setGame("hard");setResult(null)}}><b>HARD</b><small>道具と物語が大きく暴れる</small></button></div></label><button className="draw" onClick={draw} disabled={revealing}>{revealing?"天気と氷下の声を確認中…":"今日の一枚を引く"}</button><p className="hint">NORMALは現実寄り、HARDは安全条件以外が大きく変化します</p></section>
 {result&&<Result result={result} location={loc} date={date} mode={loc.modes.find(x=>x.id===mode)?.label||""} game={game} redraw={draw}/>}<footer>天気予報：Open-Meteo。現地の規則・公式発表・氷況を最優先してください。</footer></main>}

function Result({result:r,location,date,mode,game,redraw}:{result:Fortune;location:Location;date:string;mode:string;game:GameMode;redraw:()=>void}){
 const w=r.weather;
 const [cardOpen,setCardOpen]=useState(false);
 useEffect(()=>{if(!cardOpen)return;const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setCardOpen(false)};document.addEventListener("keydown",close);document.body.classList.add("modal-open");return()=>{document.removeEventListener("keydown",close);document.body.classList.remove("modal-open")}},[cardOpen]);
 return <section className="result"><div className="result-head"><span>{location.name}</span><span>{date.replaceAll("-",".")}</span><span>{mode}</span><span>{game.toUpperCase()}</span></div><div className="tarot-wrap"><button type="button" className="tarot-card tarot-button" onClick={()=>setCardOpen(true)} aria-label={`${r.card.roman} ${r.card.name}のカードを拡大表示`}><img src={r.card.image} alt={`${r.card.roman} ${r.card.name}`}/><span>タップで拡大</span></button><div><p className="eyebrow">TODAY&apos;S TAROT</p><h2>{r.card.roman}　{r.card.name}</h2><div className="rank"><small>釣行ランク</small><strong>{r.rank}</strong></div></div></div>
 {cardOpen&&<div className="card-lightbox" role="dialog" aria-modal="true" aria-label={`${r.card.roman} ${r.card.name} 拡大画像`} onClick={()=>setCardOpen(false)}><button type="button" className="lightbox-close" onClick={()=>setCardOpen(false)} aria-label="拡大表示を閉じる">×</button><img src={r.card.image} alt={`${r.card.roman} ${r.card.name}`} onClick={e=>e.stopPropagation()}/><p>{r.card.roman}　{r.card.name}</p><small>背景または × をタップして閉じる</small></div>}
 <article className="oracle"><span>本日の神託</span><p>{r.oracle}</p>{r.event&&<em>特殊イベント：{r.event}</em>}</article>
 <section className="weather-card"><div className="weather-title"><span>釣行日の天気予報</span><b>{w?w.label:"予報範囲外／取得できません"}</b></div>{w&&<div className="weather-grid"><div><small>気温</small><strong>{w.min.toFixed(1)}〜{w.max.toFixed(1)}℃</strong></div><div><small>風</small><strong>{w.directionLabel} {w.wind.toFixed(1)}km/h</strong></div><div><small>最大瞬間風速</small><strong>{w.gust.toFixed(1)}km/h</strong></div><div><small>降水確率</small><strong>{w.rain}%</strong></div></div>}<small className="weather-note">予報は占いの道具選びにも反映されます</small></section>
 {location.safety&&<div className="safety"><b>安全のお告げ</b><p>{location.safety}</p></div>}
 <div className="catch"><small>{r.outOfSeason?"OFF SEASON":"予想釣果"}</small><strong>{r.catchText}</strong><span>{location.size}</span></div>
 {!r.outOfSeason&&<div className="details expanded">{[["棚",r.shelf],["仕掛け",r.rig],["オモリ",r.sinker],["餌",r.bait],["穂先",r.rod],["時合",r.timing],["ラッキーアイテム",r.lucky]].map(([a,b])=><div className={a==="オモリ"||a==="仕掛け"||a==="穂先"?"wide":""} key={a}><small>{a}</small><b>{b}</b></div>)}</div>}
 <details><summary>釣り場の現実情報</summary><ul>{location.notes.map(n=><li key={n}>{n}</li>)}</ul></details><LocationInformation id={location.id}/><button className="again" onClick={redraw}>もう一度占う</button></section>
}

function LocationInformation({id}:{id:string}){
 const info=locationInfo[id]; if(!info)return null;
 return <section className="location-info"><div className="info-heading"><span>現地インフォメーション</span><b>釣行前に確認</b></div><dl><div><dt>漁期</dt><dd>{info.season}</dd></div><div><dt>料金</dt><dd>{info.fee}</dd></div>{info.hours&&<div><dt>時間</dt><dd>{info.hours}</dd></div>}</dl><p>{info.note}</p><div className="info-links">{info.links.map(link=><a className={link.kind==="primary"?"primary":""} href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label}<span>↗</span></a>)}</div><small>料金・営業期間は変更される場合があります。リンク先の最新情報を優先してください。</small></section>
}
