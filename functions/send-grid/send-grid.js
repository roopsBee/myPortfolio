const sgMail = require('@sendgrid/mail')
const axios = require('axios')
const emailHtml = require('./emailHTML')

exports.handler = async (event, context) => {
  try {
    const { name, subject, email, text, token } = JSON.parse(event.body)

    if (!name || !subject || !email || !text || !token) {
      return { statusCode: 422, body: 'Missing data' }
    }

    // verify recaptcha token

    const secret = process.env.RECAPTCHA_SECRET_KEY
    const response = token

    // console.log({ secret, response })

    const data = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}`
    )

    console.log(data.data)
    if (!data.data.success) {
      return { statusCode: 422, body: 'Invalid data' }
    }

    const msg = {
      to: 'portfolio@roopeshpatel.com',
      from: 'portfolio@roopeshpatel.com',
      subject: subject,
      html: emailHtml(name, email, text),
    }

    sgMail.setApiKey(process.env.SENDGRID_API)

    if (event.httpMethod === 'POST') {
      await sgMail.send(msg)
      return { statusCode: 200, body: 'Mail sent' }
    } else {
      return { statusCode: 405, body: 'Method not allowed' }
    }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: err.toString() }
  }
}
