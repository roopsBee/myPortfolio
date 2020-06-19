import { useMediaQuery, useTheme } from '@material-ui/core'

const useResponsiveValue = (xsValue, smValue, mdValue, lgValue, xlValue) => {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const md = useMediaQuery(theme.breakpoints.only('md'))
  const lg = useMediaQuery(theme.breakpoints.only('lg'))

  return xs ? xsValue : sm ? smValue : md ? mdValue : lg ? lgValue : xlValue
}

export default useResponsiveValue
