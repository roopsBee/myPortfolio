import axios from 'axios'

const sendMail = async values => {
  try {
    const { data } = await axios.post('/.netlify/functions/send-grid', values)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
export default sendMail
