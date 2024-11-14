import { createSlice } from '@reduxjs/toolkit';
import { ILocalizationSlice } from '../types';
import { ILocalization } from '../../services/localizationModels';

const initialState: ILocalizationSlice = {
  name: 'Warszawa',
  lon: '21.01178',
  lat: '52.22977',
};

export const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    updateLocalization(state, action) {
      const loc = action.payload as ILocalization;
      state.name = loc.display_name as string;
      state.lon = loc.lon as string;
      state.lat = loc.lat as string;
    },
  },
});

export default localizationSlice.reducer;
export const { updateLocalization } = localizationSlice.actions;
