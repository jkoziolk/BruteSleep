import { ChangeEvent, useEffect, useState } from 'react';
import { searchLocalization } from '../services/localization';
import { ILocalization } from '../services/localizationModels';
import {
  SearchBox,
  SearchField,
  Suggestion,
  SuggestionsBox,
  SuggestionsList,
} from './styled';
import { useDebounce } from '@uidotdev/usehooks';
import { useDispatch } from 'react-redux';
import { updateLocalization } from '../store/localization';

export const LocalizationSearch = () => {
  const dispatch = useDispatch();
  const [localizations, setLocalizations] = useState<ILocalization[]>();

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (debouncedValue) {
      const search = async () => {
        setLocalizations(await searchLocalization(debouncedValue));
      };
      search();
    }
  }, [debouncedValue]);

  const onChange = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value);
  };

  const onClick = (loc: ILocalization) => {
    dispatch(updateLocalization(loc));
  };

  return (
    <SearchBox>
      <SearchField onChange={onChange} value={value} size="small"></SearchField>

      {localizations && localizations.length > 0 && (
        <SuggestionsBox>
          <SuggestionsList>
            {localizations.map((loc: ILocalization) => {
              return (
                <Suggestion onClick={() => onClick(loc)}>
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
