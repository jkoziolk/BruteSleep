import { ChangeEvent, useState } from 'react';
import { searchLocalization } from '../services/localization';
import { ILocalization } from '../services/localizationModels';
import {
  SearchBox,
  SearchField,
  Suggestion,
  SuggestionsBox,
  SuggestionsList,
} from './styled';

export const LocalizationSearch = () => {
  const [localizations, searchLocalizations] = useState<ILocalization[]>();

  const onLocalizationSearch = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    searchLocalizations(await searchLocalization(event.target.value));
  };
  return (
    <SearchBox>
      <SearchField onChange={onLocalizationSearch} size="small"></SearchField>

      {localizations && localizations.length > 0 && (
        <SuggestionsBox>
          <SuggestionsList>
            {localizations.map((loc: ILocalization) => {
              return (
                <Suggestion onClick={() => alert(`${loc.lat} ${loc.lon}`)}>
                  {loc.display_name}
                </Suggestion>
              );
            })}
          </SuggestionsList>
        </SuggestionsBox>
      )}
    </SearchBox>
  );
};
