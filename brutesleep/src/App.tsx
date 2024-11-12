import { useEffect, useState } from 'react';
import './App.css';
import { getWeather } from './services/weather';
import { IWeatherResult } from './services/weatherModels';
import { WeatherTable } from './components/WeatherTable';
import { PageContainer } from './components/styled';
import { LocalizationSearch } from './components/LocalizationSearch';

export const App = () => {
  const [weather, setWeather] = useState<IWeatherResult>();
  useEffect(() => {
    if (weather) return;

    getWeather().then((res: IWeatherResult) => {
      setWeather(res);
    });
  });
  return (
    <>
      <header className="App-header">Brute sleep - śpij jak zwierze</header>
      <PageContainer>
        <LocalizationSearch />
        <WeatherTable weather={weather} />
        <WeatherTable weather={weather} />
        <WeatherTable weather={weather} />
      </PageContainer>
    </>
  );
};

export default App;
