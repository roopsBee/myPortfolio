import { createMuiTheme } from '@material-ui/core/styles'
import { red, blue, yellow, lightGreen } from '@material-ui/core/colors'

const palette = {
  primary: { main: red[700] },
  secondary: { main: blue[600] },
  text: { primary: '#fafafa' },
  error: yellow,
  success: { main: lightGreen['A400'] },
}

const theme = createMuiTheme({
  palette: {
    ...palette,
  },
  transitions: { duration: { leavingScreen: 100 } },
  overrides: {
    MuiListItem: {
      button: {
        color: '#000000',
        backgroundColor: blue[600],
        '&$selected': {
          '&:hover': {
            backgroundColor: blue[500],
          },
          color: '#fafafa',
          backgroundColor: blue[700],
        },
        '&:hover': {
          color: '#fafafa',
          backgroundColor: blue[500],
        },
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: red[700],
      },
    },
    MuiPaper: { root: { backgroundColor: red[700] } },
  },
})
export default theme
