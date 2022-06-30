const container = document.querySelector('.container')
const baseURL = 'https://pbasics.pythonanywhere.com'
const button = document.querySelector('button')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const price = document.querySelector('.price')
const image_url = document.querySelector('.image_url')
const category = document.querySelector('.category')


  button.addEventListener('click', e => {
    e.preventDefault()

    fetch(`${baseURL}/products/create/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description.value,
        price: price.value,
        image_url: image_url.value,
        category: category.value,
      })
    })
    .then(res => res.json())
    .then(() => window.open('./index.html'))
  })

