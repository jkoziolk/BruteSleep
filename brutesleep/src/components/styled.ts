import { AppBar, Paper, TextField, Typography, styled } from '@mui/material';

export const HeaderBar = styled(AppBar)(() => ({
  minHeight: '3vh',
  backgroundColor: '#7b9c35',
  padding: '0 2rem',
  display: 'flex',
}));

export const H1 = styled(Typography)(() => ({
  fontSize: '2.5rem',
  color: '#f5f2b8',
}));

export const PageContainer = styled('body')(() => ({
  padding: '1rem',
  display: 'flex',
}));

export const BrutePaper = styled(Paper)(() => ({
  borderRadius: 0,
  backgroundColor: '#bfbfbf',
  border: 'solid 3px',
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

export const SearchList = styled('ul')(() => ({
  minWidth: '100%',
  listStyleType: 'none',
  border: 'solid 1px',
  borderBlockColor: 'black',
  display: 'block',
}));

export const SearchSuggestion = styled('li')(() => ({
  minWidth: '100%',
  fontSize: '0.75rem',
  cursor: 'pointer',
  '&hover': {
    color: 'green',
  },
}));
