import { AppBar, Paper, styled } from '@mui/material';
//import forest from './assets/las.jpg';

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  minHeight: '3vh',
  //background: `linear-gradient(90deg, ${theme.palette.primary.main} 35%, rgba(0,0,0,0) 100%)`,
  backgroundColor: theme.palette.primary.main,
  //background: `url(${forest}), linear-gradient(90deg, ${theme.palette.primary.main} 35%, rgba(0,0,0,0) 100%)`,
  padding: '0 2rem',
  display: 'flex',
}));

export const H1 = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  color: theme.palette.secondary.main,
  margin: '0.2rem',
}));

export const PageContainer = styled('body')(() => ({
  padding: '1rem',
  display: 'flex',
  backgroundColor: '#ffffff',
}));

export const BrutePaper = styled(Paper)(({ theme }) => ({
  margin: '1rem',
  overflow: 'scroll',
  backgroundColor: theme.palette.secondary.light,
  borderRadius: '0px',

  h3: {
    marginTop: 0,
    padding: '1rem',
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },

  width: '50vw',
  '@media (width <= 800px)': {
    width: '100vw',
  },
}));
