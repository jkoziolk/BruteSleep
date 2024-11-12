interface IDailyWeather {
  time?: string[];
  weather_code?: number[];
  temperature_2m_max?: number[];
  temperature_2m_min?: number[];
  sunrise?: string[];
  sunset?: string[];
  precipitation_sum?: number[];
  precipitation_hours?: number[];
  wind_speed_10m_max?: number[];
}

export interface IWeatherResult {
  daily?: IDailyWeather;
}
