import { Paper, TextField, styled } from '@mui/material';

export const SearchBox = styled('div')(() => ({
  minWidth: '30vw',
  maxWidth: '30vw',
  backgroundColor: 'white',
}));

export const SearchField = styled(TextField)(() => ({
  minWidth: '100%',
  maxWidth: '100%',
}));

export const SuggestionsBox = styled(Paper)(() => ({
  minWidth: '100%',
  maxWidth: '100%',
  padding: 0,
  margin: 0,
  borderRadius: 0,
}));

export const SuggestionsList = styled('ul')(() => ({
  listStyleType: 'none',
  padding: '0.5rem',
}));

export const Suggestion = styled('li')(({ theme }) => ({
  fontSize: '1rem',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
