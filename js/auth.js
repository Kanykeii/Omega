const email = document.querySelector('.email')
const password = document.querySelector('.password')
const username = document.querySelector('.Username')
const register = document.querySelector('.register')
const baseURL = 'https://pbasics.pythonanywhere.com'

register.addEventListener('click', e => {
  e.preventDefault()

  fetch(`${baseURL}/auth/token/login/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      username: username.value
    })
  })
  .then(res => res.json())
  .then(() => window.open('./index.html'))
})