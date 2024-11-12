import axios from 'axios';
import { ILocalization } from './localizationModels';

export const searchLocalization = async (
  query: string,
): Promise<ILocalization[]> => {
  try {
    const localization = await axios.get(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&polygon_geojson=1&format=jsonv2`,
    );
    return localization.data;
  } catch (error) {
    throw new Error('invalid localization ' + error);
  }
};
