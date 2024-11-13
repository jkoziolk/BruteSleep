import { AppBar, Paper, TextField, Typography, styled } from '@mui/material';

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  minHeight: '3vh',
  backgroundColor: theme.palette.primary.main,
  padding: '0 2rem',
  display: 'flex',
}));

export const H1 = styled(Typography)(() => ({
  fontSize: '2.5rem',
  color: '#DED0AEff',
}));

export const PageContainer = styled('body')(() => ({
  padding: '1rem',
  display: 'flex',
  backgroundColor: '#ffffff',
}));

export const BrutePaper = styled(Paper)(() => ({
  margin: '1rem',
  padding: '1rem',
  overflow: 'scroll',

  width: '50vw',
  '@media (width <= 800px)': {
    width: '100vw',
  },
}));

export const SearchBox = styled('div')(() => ({
  minWidth: '30vw',
  backgroundColor: 'white',
}));

export const SearchField = styled(TextField)(() => ({
  minWidth: '100%',
}));

export const SuggestionsBox = styled('div')(() => ({
  minWidth: '100%',
  borderRadius: '5px',
  border: 'solid 1px',
  borderBlockColor: 'grey',
  padding: '0.3rem',
}));

export const SuggestionsList = styled('ul')(() => ({
  padding: '0.3rem',
  minWidth: '100%',
  listStyleType: 'none',
}));

export const Suggestion = styled('li')(() => ({
  minWidth: '100%',
  fontSize: '0.75rem',
  cursor: 'pointer',
  hover: {
    color: 'green',
  },
}));
