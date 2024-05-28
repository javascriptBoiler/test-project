import { useMemo } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from './palette';
import CustomShadows from './shadows';

export default function ThemeCustomization({ children }:{children: React.ReactNode}) {
  const theme = Palette();

  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        h1: {
          fontWeight: 600,
          fontSize: '2.375rem',
          lineHeight: 1.21
        },
        h2: {
          fontWeight: 600,
          fontSize: '1.875rem',
          lineHeight: 1.27
        },
        h3: {
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: 1.33
        },
        h4: {
          fontWeight: 600,
          fontSize: '1.1rem',
          lineHeight: 1.4,
          color: theme.palette.common.black,
          marginBottom: '15px'
        },
        body2:{
          lineHeight: 1.23,
          color: theme.palette.common.black,
        },
        button: {
          textTransform: 'capitalize'
        }
      }
    }),
    [theme, themeCustomShadows]
  );

  const themes = createTheme(themeOptions as any);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}