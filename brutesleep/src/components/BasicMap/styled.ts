import { styled } from '@mui/material';
import { MapContainer } from 'react-leaflet';

export const StyledMap = styled(MapContainer)(() => ({
  margin: 0,
  padding: 0,
  height: '30vh',
}));
