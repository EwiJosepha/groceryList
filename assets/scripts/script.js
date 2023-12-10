const add = document.getElementById('add')
const ul = document.querySelector('ul')
const li = document.createElement('li')
ul.append(li)
const inputt = document.querySelector('#input')

inputt.addEventListener('input', function () {
  // li.textContent= inputt.value
  if (inputt === 'input') {
    increment()
  }
})

function increment (e) {
  e.preventDefault()
  const div = document.getElementById('carry')
  const h2 = document.createElement('h2')
  const button = document.createElement('button')
  h2.textContent = '' + inputt.value
  button.style.backgroundColor = 'red'
  button.style.width = '50px'
  button.style.height = '20px'
  button.style.padding = '5px'
  button.style.border = 'none'
  button.style.borderRadius = '15px'
  button.style.marginLeft = '80px'

  h2.addEventListener('click', () => {
    h2.style.textDecoration = 'line-through'
    h2.style.padding = '40px'
    h2.style.marginLeft = '20px'
  })

  button.addEventListener('click', () => {
    h2.innerHTML = ''

    console.log(button)
  })
  div.insertAdjacentElement('beforeend', h2)
  h2.insertAdjacentElement('beforeend', button)

  inputt.value = ''
  h2.value = ''
}

add.addEventListener('click', increment)
