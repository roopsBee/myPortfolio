import axios from 'axios'

const sendMail = async (values, token) => {
  try {
    const { data } = await axios.post('/.netlify/functions/send-grid', {
      ...values,
      token,
    })
    if (data === 'Mail sent') {
      console.log(data)
      return true
    }
    return false
  } catch (err) {
    console.log(err)
    return false
  }
}
export default sendMail
