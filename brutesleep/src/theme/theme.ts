import { alpha, createTheme } from '@mui/material';
import {
  antiflashWhite,
  black,
  blackOlive,
  darkMossGreen,
  fireBrick,
  powderBlue,
  taupeGray,
  white,
} from './colors';

// declare module '@mui/material/styles' {
//   interface Palette {
//     something: string;
//   }
// }

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: darkMossGreen,
      dark: blackOlive,
      light: alpha(darkMossGreen, 0.5),
    },
    secondary: {
      main: powderBlue,
      dark: taupeGray,
      light: antiflashWhite,
    },
    text: {
      primary: black,
      secondary: darkMossGreen,
      disabled: alpha(black, 0.5),
    },
    error: {
      main: fireBrick,
    },
    background: {
      default: white,
      paper: white,
    },
  },
});
