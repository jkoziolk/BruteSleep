import { ChangeEvent, useState } from 'react';
import { searchLocalization } from '../services/localization';
import { ILocalization } from '../services/localizationModels';
import { SearchBox, SearchField, SearchList, SearchSuggestion } from './styled';

export const LocalizationSearch = () => {
  const [localizations, searchLocalizations] = useState<ILocalization[]>();

  const onLocalizationSearch = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    searchLocalizations(await searchLocalization(event.target.value));
  };
  return (
    <SearchBox>
      <SearchField onChange={onLocalizationSearch}></SearchField>
      <SearchList>
        {localizations?.map((loc: ILocalization) => {
          return (
            <SearchSuggestion>
              {loc.display_name} {loc.lat} {loc.lon}
            </SearchSuggestion>
          );
        })}
      </SearchList>
    </SearchBox>
  );
};
