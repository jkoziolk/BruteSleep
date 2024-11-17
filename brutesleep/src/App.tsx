import { useEffect, useState } from 'react';
import { getWeather } from './services/weather';
import { IWeatherResult } from './services/weatherModels';
import { WeatherTable } from './components/WeatherTable';
import { H1, HeaderBar, HeaderConetent, PageContainer, Title } from './styled';
import { LocalizationSearch } from './components/LocalizationSearch';
import { useSelector } from 'react-redux';
import { localizationState } from './store/localization';
import { BasicMap } from './components/BasicMap';

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
        <HeaderConetent>
          <Title>
            <H1>Brute sleep</H1>
            <p>
              {localization.lat} {localization.lon}
            </p>
          </Title>
          <LocalizationSearch />
        </HeaderConetent>
      </HeaderBar>
      <PageContainer>
        <WeatherTable weather={weather} />
        <BasicMap />
      </PageContainer>
    </>
  );
};

export default App;
