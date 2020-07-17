import axios from 'axios'

const sendMail = async values => {
  try {
    const { data } = await axios.post('/.netlify/functions/send-grid', values)
    if (data) {
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
