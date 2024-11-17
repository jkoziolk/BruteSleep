import { useMemo, useRef } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BrutePaper } from '../../styled';
import { useSelector } from 'react-redux';
import { localizationState } from '../../store/localization';
import { StyledMap } from './styled';

export const BasicMap = () => {
  const mapRef = useRef(null);
  const localization = useSelector(localizationState);
  const latitude: number = useMemo(
    () => localization.lat as unknown as number,
    [localization],
  );
  const longitude: number = useMemo(
    () => localization.lon as unknown as number,
    [localization],
  );

  return (
    <BrutePaper elevation={3}>
      <h3>Mapa okolicy</h3>
      <StyledMap center={[latitude, longitude]} zoom={13} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>Twoja lokalizacja</Popup>
        </Marker>
        {/* Additional map layers or components can be added here */}
      </StyledMap>
    </BrutePaper>
  );
};
