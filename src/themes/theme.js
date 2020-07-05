import { createMuiTheme } from '@material-ui/core/styles'
import { red, blue, yellow, lightGreen } from '@material-ui/core/colors'

const palette = {
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
        color: '#f50057',
        border: '1px solid rgba(254,0,87,0.7)',
        borderRadius: 3,
        backgroundColor: 'rgba(0,0,0,0.8)',
        '&$selected': {
          '&:hover': {
            color: '#fafafa',
            // backgroundColor: blue[500],
          },
          background:
            'linear-gradient(90deg, rgba(255,0,87,0.9220063025210083) 0%, rgba(254,0,87,0.23012955182072825) 69%)',
          color: '#fafafa',
        },
        '&:hover': {
          color: '#fafafa',
          background:
            'linear-gradient(90deg, rgba(255,0,87,0.9220063025210083) 0%, rgba(254,0,87,0.23012955182072825) 69%)',
          '& .MuiListItemIcon-root': {
            color: 'white',
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#f50057',
      },
    },
    MuiDrawer: {
      paper: {
        background:
          'linear-gradient(180deg, rgba(164,0,56,0.9) 0%, rgba(254,0,87,0.5) 53%, rgba(254,0,87,0.1) 100%)',
      },
    },
    MuiPaper: { root: { backgroundColor: red[700] } },
    MuiAppBar: {
      colorPrimary: {
        background:
          'linear-gradient(90deg, rgba(254,0,87,0.7) 0%, rgba(254,0,87,0.3) 51%, rgba(254,0,87,0.1) 100%)',
        backgroundColor: 'transparent',
      },
    },
  },
})
export default theme
