import { getResponce } from "./utils";

const __apiBase = 'https://api.openweathermap.org/data/2.5/onecall';
const __apiKey = 'aad424903171d5dc0e1853d19e33374b';

export const getWeatherData = async (coords, units) => {
  const str = `${__apiBase}?lat=${coords.lat}&lon=${coords.lon}&appid=${__apiKey}&exclude={minutely}&units=${units}`;

  const responce = await getResponce(str);

  const data = responce.isError ? responce : {
    isError: responce.isError,
    data: mapWeatherResponce(responce.data)
  };
  
  return data
}


const mapWeatherResponce = (data) => {
  return {
    current: data.current,
    forecast: {
      today: data.hourly,
      week: data.daily
    }
  }
}