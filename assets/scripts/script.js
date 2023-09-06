let add = document.getElementById('add')
let allitems=document.getElementById('list')
let ul=document.querySelector('ul')
let li=document.createElement('li')
ul.append(li)

let delett = document.getElementById('delete')
function toDelete () {
  // event.preventDefault()
  allitems.value=""
    li.innerHTML=""
  
}

delett.addEventListener('click', ()=>{
  toDelete()
})


let inputt=document.querySelector('#input')

inputt.addEventListener('input', function () {
li.textContent= inputt.value
if('input'=== inputt){
  increment()
}
})



function increment (e) {
  let div= document.getElementById('carry')

  e.preventDefault()
  let h2= document.createElement('h2')

h2.textContent= " " + inputt.value

h2.addEventListener('click', ()=>{
  h2.style.textDecoration= "line-through"
})
 div.insertAdjacentElement('beforeend', h2)

 inputt.value=""
 h2.value=""
}

add.addEventListener('click', increment)





// function eventkey () {
//   if(key='Enter') {
//     addItems()
//   }
// }

// function addItems () {
//   li.innerHTML= input.value
  
//   }

//   li.addEventListener('click', function () {
//     li.style.textDecoration='line-through'

//   allitems.innerHTML=('beforeend', li)
// })


