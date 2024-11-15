import { useEffect, useState } from 'react';
import { getWeather } from './services/weather';
import { IWeatherResult } from './services/weatherModels';
import { WeatherTable } from './components/WeatherTable';
import { H1, HeaderBar, PageContainer, Title } from './styled';
import { LocalizationSearch } from './components/LocalizationSearch';
import { useSelector } from 'react-redux';
import { localizationState } from './store/localization';

export const App = () => {
  const localization = useSelector(localizationState);
  const [weather, setWeather] = useState<IWeatherResult>();

  useEffect(() => {
    if (!localization || !localization.lat || !localization.lon) return;

    getWeather(localization.lat, localization.lon).then(
      (res: IWeatherResult) => {
        setWeather(res);
      },
    );
  }, [localization]);

  return (
    <>
      <HeaderBar position="static">
        <Title>
          <H1>Brute sleep</H1>
          <p>
            {localization.lat} {localization.lon}
          </p>
        </Title>
        <LocalizationSearch />
      </HeaderBar>
      <PageContainer>
        <WeatherTable weather={weather} />
      </PageContainer>
    </>
  );
};

export default App;
