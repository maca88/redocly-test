import { lighten, darken, readableColor, transparentize } from 'polished';

export const theme = {
  logo: {
    height: '2.5rem',
    maxHeight: '100%',
    maxWidth: '120%',
  },
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },
  // breakpoints: {
  //   xs: 0,
  //   small: '550px',
  //   medium: '900px',
  //   large: '1200px',
  // },
  colors: {
    // tonalOffset: 0.2,
    accent: {
      main: '#FF00FF',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      contrastText: ({ colors }) => readableColor(colors.primary.main),
    }, 
    primary: {
      main: '#00EEEE',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    success: {
      main: '#198038',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.success.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
      contrastText: ({ colors }) => readableColor(colors.success.main),
    },
    error: {
      main: '#DA1E28',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.error.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
      contrastText: ({ colors }) => readableColor(colors.error.main),
    },
    warning: {
      main: '#F1C21B',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.warning.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
      contrastText: '#ffffff',
    },
    // info: {
    //   main: '#4782cb',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.info.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.info.main),
    //   contrastText: ({ colors }) => readableColor(colors.info.main),
    // },
    text: {
      primary: '#002675',
      secondary: '#4e566d',
    },
    // border: {
    //   dark: 'rgba(0,0,0, 0.15)',
    //   light: '#ffffff',
    // },
    responses: {
      success: {
        borderColor: 'transparent',
        color: ({ colors }) => colors.success.main,
        backgroundColor: ({ colors }) => transparentize(0.9, colors.success.main),
      },
      error: {
        borderColor: 'transparent',
        color: ({ colors }) => colors.error.main,
        backgroundColor: ({ colors }) => transparentize(0.9, colors.error.main),
      },
      redirect: {
        borderColor: 'transparent',
        color: '#ffa500',
        backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
      },
      info: {
        borderColor: 'transparent',
        color: '#0043CE',
        backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
      },
    },
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999',
      link: '#31bbb6',
      head: '#c167e4',
    },
    navbar: {
      main: 'rgba(0, 38, 117, 1)',
    //   gradient: ({ colors }) => darken(colors.tonalOffset / 2, colors.navbar.main),
    //   contrastText: 'white'
    },
    footer: {
      main: 'rgba(0, 38, 117, 1)',
      contrastText: '#FFFFFF',
    },
  },

  sidebar: {
    backgroundColor: '#F2F4F8',
    borderRadius: 0,
  },
  // tocPanel: {
  //   width: '240px',
  // },

  typography: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: '"Noto Sans Display", sans-serif',
    headings: {
      fontFamily: '"Noto Sans Display", sans-serif',
      fontWeight: '600',
    },
    // heading1: {
    //   fontSize: '1.85714em',
    //   fontWeight: '600',
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   color: ({ colors }) => colors.primary.main,
    //   capitalize: true,
    // },
    // heading2: {
    //   fontSize: '1.57143em',
    //   fontWeight: '600',
    //   color: ({ colors }) => colors.text.primary,
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   capitalize: false,
    // },
    // heading3: {
    //   fontSize: '1.27em',
    //   fontWeight: '600',
    //   color: ({ colors }) => colors.text.primary,
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   capitalize: false,
    // },
    // heading4: {
    // // ...
    // },
    // heading5: {
    // // ...
    // },
    // heading6: {
    // // ...
    // },
    code: {
      fontSize: '0.875rem',
      fontFamily: 'Courier, monospace',
      fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
    },
    links: {
      color: ({ colors }) => colors.primary.main,
      visited: ({ typography }) => typography.links.color,
      hover: '#FF00FF',
    },
  },
  rightPanel: {
    backgroundColor: '#002675',
    width: '40%',
    textColor: '#ffffff',
  },
  schema: {
    nestedBackground: '#fafafa',
    // linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
    // defaultDetailsWidth: '75%',
    // typeNameColor: theme => theme.colors.text.secondary,
    // typeTitleColor: theme => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    // labelsTextSize: '0.9em',
    // nestingSpacing: '1em',
    // arrow: {
    //   size: '1.1em',
    //   color: theme => theme.colors.text.secondary,
    // },
  },
  codeSample: {
    backgroundColor: '#002675',
    borderRadius: 0,
  },
  codeBlock: {
    backgroundColor: '#002675',
    borderRadius: 0,
    tokens: {},
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    buttons: {
      borderRadius: 0,
      //hoverStyle: 'background-color: "#FF00FF"; color: #FFFFFF;',
      fontWeight: 600,
    },
    panels: {
      borderRadius: 0,
      backgroundColor: '#FFFFFF',
      iconColor: '#002675',
    },
  },
};