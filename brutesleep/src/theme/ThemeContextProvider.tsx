import { createTheme, Theme } from '@mui/material';
import { createContext, ReactNode, useContext } from 'react';
import { lightTheme } from './theme';

type ThemeContextType = {
  mode: string;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'ligt',
  theme: createTheme(),
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const value = { mode: 'light', theme: lightTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
