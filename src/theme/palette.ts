import { createTheme } from '@mui/material/styles';

const Palette = () => {
  const paletteColor =  {
    primary: {
        main:'#2BD9AF',
        light: '#2BD9AF',
        dark: '#2BD9AF',
        contrastText: '#000'
    },
    secondary: {
        main:'#FF5E84',
        light: '#FF5E84',
        dark: '#FF5E84',
        contrastText: '#000'
    },
    grey:{
        50:'#7b1fa2',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
    },
    links:{
        active:'#fff',
        visited: '#fff'
    },
    price:'#0E42FD'
  };

  return createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400]
      },
      action: {
        disabled: paletteColor.grey[300],
        active: paletteColor.links.active,
        selected: paletteColor.links.visited

      },
      background: {
        paper: paletteColor.grey[50],
        default: paletteColor.grey.A100
      }
    }
  });
};

export default Palette;