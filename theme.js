import { Flex } from '@theme-ui/components';
import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  colors: {
    ...roboto.colors,
    primaryMain: '#5C83AD',
  },

  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
  },

  mainSectionUser: {
    title: {
      fontSize: '30px',
      color: 'primaryMain',
      marginRight: 'auto',
    },
  },

  navBar: {
    Logo: {
      cursor: 'pointer',
    },

    links: {
      textDecoration: 'none',
      '& li a ': {
        textDecoration: 'none',
      },
    },
  },

  Request: {
    color: 'primaryMain',
    width: '60%',
    display: 'flex',
    padding: '1em',
    'align-items': 'center',
    justifyContent: 'center',
    '> div:not(:first-child)': { marginLeft: '1.2em' },
    background:
      'linear-gradient(to left top, rgba(255,255,255,1),rgba(255,255,255,0.8))',
    '& .Title': {
      fontSize: '1.1em',
      fontWeight: 700,
      marginBottom: '1em',
    },
    borderRadius: '1em',

    '.middlePart': {
      width: '50%',
    },

    '.description': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: 'gray',
      fontWeight: '700',
    },
    '.downPayment , .totalPayment': {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
  },
  styles: {
    ...roboto.styles,

    // a: {
    //   color: 'text',
    // },
  },
};

// console.log(theme);

export default theme;
