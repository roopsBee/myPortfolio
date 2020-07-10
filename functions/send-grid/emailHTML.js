const emailHTML = (name, email, text) => {
  return `
    <div>
      <h3>Name: ${name}</h3>
      <h3>Email: ${email}</h3>
      <p>${text}</p>
    </div>
  `
}

module.exports = emailHTML
