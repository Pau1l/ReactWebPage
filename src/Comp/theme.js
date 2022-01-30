import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#c93f2e',
      },
      secondary: {
        main: '#da3927',
      },
      background: {
        default: '#eb5443',
        paper: '#e1b3b6',
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
  });