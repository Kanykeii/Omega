const goods = document.querySelector('.goods')
const baseURL = 'https://pbasics.pythonanywhere.com'

fetch(`${baseURL}/products/`)
  .then(res => res.json())
  .then(data => {
    data.map(({id, title, description, price, image_url}) => {
      goods.insertAdjacentHTML('beforeend', cardTemlate(id, title, description, price, image_url) )
    })
  })

  function cardTemlate (id, title, description, price, image_url) {
    return `
      <div class="T-short">
        <img class="t-short" src="${image_url}" alt="">
        <h1>$${price}</h1>
        <h3>${title}</h3>
        <h4>${description}</h4>
        <button id="${id}">Buy</button>
        <button id="${id}" onclick="deleteGood(${id})" class="button">Delete</button>
      </div>
    `
  }

  function deleteGood (id) {
      fetch(`${baseURL}/products/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      // .then(res => res.json())
      .then(r => console.log(r))
    }
    