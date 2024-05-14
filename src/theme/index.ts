import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#604DD1', light: 'rgba(96, 77, 209, 0.2)' },
    success: { main: '#008080' },
    common: { white: '#FFFFFF' },
    error: {
      main: '#e92043',
      light: '#F4546B',
      contrastText: '#FF5C53',
    },
    grey: {
      50: '#FAFAFA',
      100: '#6E7781',
      200: '#EAEBEC',
      300: '#F2F2F2',
      400: '#767F88',
      500: '#767f8830',
      600: '#B6BBC0',
    },
  },
  spacing: 8,
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Poppins',
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h2',
          h4: 'h4',
          subtitle1: 'strong',
          subtitle2: 'span',
          body1: 'p',
        },
      },
    },
  },
});
