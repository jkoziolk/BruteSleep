import { ChangeEvent, useEffect, useState } from 'react';
import { searchLocalization } from '../../services/localization';
import { ILocalization } from '../../services/localizationModels';
import { useDebounce } from '@uidotdev/usehooks';
import { useDispatch } from 'react-redux';
import { updateLocalization } from '../../store/localization';
import {
  SearchBox,
  SearchField,
  Suggestion,
  SuggestionsBox,
  SuggestionsList,
} from './styled';

export const LocalizationSearch = () => {
  const dispatch = useDispatch();
  const [isFocus, setFocus] = useState<boolean>(false);
  const [localizations, setLocalizations] = useState<ILocalization[]>();

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (debouncedValue) {
      const search = async () => {
        setLocalizations(await searchLocalization(debouncedValue));
        setFocus(true);
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
    setFocus(false);
  };

  return (
    <SearchBox>
      <SearchField
        onBlur={() => setTimeout(() => setFocus(false), 100)}
        onChange={onChange}
        value={value}
        size="small"
        placeholder="wyszukaj miejsce"
      ></SearchField>

      {isFocus && localizations && localizations.length > 0 && (
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
