import { Paper, TextField, styled } from '@mui/material';

export const SearchBox = styled('div')(({ theme }) => ({
  minWidth: '30vw',
  maxWidth: '30vw',
  backgroundColor: theme.palette.primary.main,
  marginRigh: 0,
  marginLeft: 'auto',
  position: 'relative',
}));

export const SearchField = styled(TextField)(() => ({
  minWidth: '30vw',
  maxWidth: '100%',
  margin: 0,

  '.MuiInputBase-root': {
    backgroundColor: 'white',
    borderRadius: 0,
  },
}));

export const SuggestionsBox = styled(Paper)(({ theme }) => ({
  minWidth: '30vw',
  maxWidth: '100%',
  padding: 0,
  margin: 0,
  borderRadius: 0,
  backgroundColor: theme.palette.secondary.light,
  position: 'absolute',
  zIndex: 10,
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
