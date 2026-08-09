export type Weather = {
  available:boolean; label:string; code:number; min:number; max:number;
  wind:number; gust:number; direction:number; directionLabel:string; rain:number;
};

const coordinates:Record<string,[number,number]> = {
  hanayama:[38.78,140.87], nanakawa:[38.43,140.84], wakuya:[38.54,141.13],
  "anenumа":[40.76,141.37], gando:[39.82,141.38], saiko:[40.17,141.30],
  oshida:[39.88,141.27], "hibara-s":[37.66,140.08], "hibara-n":[37.73,140.05],
  onogawa:[37.68,140.13], "towada-k":[40.45,140.88],
};
const weatherLabel=(c:number)=>c===0?"快晴":c<=2?"晴れ":c===3?"曇り":c<=48?"霧":c<=57?"霧雨":c<=67?"雨":c<=77?"雪":c<=82?"にわか雨":c<=86?"にわか雪":"雷の可能性";
const dir=(d:number)=>["北","北東","東","南東","南","南西","西","北西"][Math.round(d/45)%8];

export async function getWeather(locationId:string,date:string):Promise<Weather|null>{
  const xy=coordinates[locationId]; if(!xy)return null;
  const query=new URLSearchParams({latitude:String(xy[0]),longitude:String(xy[1]),start_date:date,end_date:date,timezone:"Asia/Tokyo",daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant"});
  try{
    const res=await fetch(`https://api.open-meteo.com/v1/forecast?${query}`);
    if(!res.ok)return null; const d=await res.json(); if(!d.daily?.time?.length)return null;
    const code=d.daily.weather_code[0], direction=d.daily.wind_direction_10m_dominant[0];
    return {available:true,label:weatherLabel(code),code,min:d.daily.temperature_2m_min[0],max:d.daily.temperature_2m_max[0],wind:d.daily.wind_speed_10m_max[0],gust:d.daily.wind_gusts_10m_max[0],direction,directionLabel:dir(direction),rain:d.daily.precipitation_probability_max[0]??0};
  }catch{return null}
}
