import { alpha, createTheme } from '@mui/material';
import {
  airForceBlue,
  aliceBlue,
  asparagus,
  avocado,
  black,
  darkSlateGray,
  dutchWhite,
  white,
} from './colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: avocado,
      dark: darkSlateGray,
      light: dutchWhite,
    },
    secondary: {
      main: aliceBlue,
      dark: airForceBlue,
      light: white,
    },
    text: {
      primary: asparagus,
      secondary: black,
      disabled: alpha(black, 0.5),
    },
    background: {
      default: white,
      paper: white,
    },
  },
});
