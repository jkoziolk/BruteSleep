import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { lightTheme } from './theme';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
