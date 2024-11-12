import { TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { searchLocalization } from '../services/localization';
import { ILocalization } from '../services/localizationModels';

export const LocalizationSearch = () => {
  const [localizations, searchLocalizations] = useState<ILocalization[]>();

  const onLocalizationSearch = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    searchLocalizations(await searchLocalization(event.target.value));
  };
  return (
    <>
      <TextField onChange={onLocalizationSearch}></TextField>
      {localizations?.map((loc: ILocalization) => {
        return (
          <p>
            {loc.display_name} {loc.lat} {loc.lon}
          </p>
        );
      })}
    </>
  );
};
