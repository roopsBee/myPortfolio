const sgMail = require('@sendgrid/mail')
const emailHtml = require('./emailHTML')

exports.handler = async (event, context) => {
  try {
    const { name, subject, email, text } = JSON.parse(event.body)

    if (!name || !subject || !email || !text) {
      return { statusCode: 422, body: 'Missing data' }
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
      return { statusCode: 200, body: 'mail sent' }
    } else {
      return { statusCode: 405, body: 'Method not allowed' }
    }
  } catch (err) {
    console.error(err)
    if (err.response) {
      console.error(err.response.body)
    }
    return { statusCode: 500, body: err.toString() }
  }
}
