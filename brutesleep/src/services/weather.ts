import axios from "axios";

export const getWeather = async () => {
    const weather = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours,wind_speed_10m_max&timezone=Europe%2FBerlin');
    return weather;
}