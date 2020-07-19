/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
require('typeface-roboto')

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Le4ALMZAAAAAB4Y3eB5IA7RKsqPRD31CF_Z6U7e">
      {element}
    </GoogleReCaptchaProvider>
  )
}
