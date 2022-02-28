import { createTheme } from '@material-ui/core/styles'
const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontSize: '1rem',
      textTransform: 'none',
      fontWeight: 700,
      fontFamily: 'Raleway',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },

    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
  },
})

export default theme
