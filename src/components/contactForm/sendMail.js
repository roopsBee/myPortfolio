import axios from 'axios'

const sendMail = async values => {
  try {
    const { data } = await axios.post('/.netlify/functions/send-grid', values)
    console.log(data)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
export default sendMail
