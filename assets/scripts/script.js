let add = document.getElementById("add");
let allitems = document.getElementById("list");
let ul = document.querySelector("ul");
// let button = document.createElement('button')
let li = document.createElement("li");
ul.append(li);
// ul.append(button)

//

// function btn () {
//   li.innerHTML= " "
//   allitems= ' '
//   // h2= ' '
//   console.log(li)
//   // console.log(h2)
// }

// button.addEventListener('click', btn)

let inputt = document.querySelector("#input");

inputt.addEventListener("input", function () {
  // li.textContent= inputt.value
  if ("input" === inputt) {
    increment(e);
  }
});

let delett = document.getElementById("delete");
function toDelete(event) {
  event.preventDefault();
  li.innerHTML = "";
}

delett.addEventListener("click", () => {
  toDelete(event);
});

function increment(e) {
  e.preventDefault();
  let div = document.getElementById("carry");
  let h2 = document.createElement("h2");
  let button = document.createElement("button");
  h2.textContent = " " + inputt.value
  button.style.backgroundColor = 'red'
  button.style.width = '50px'
  button.style.height = '20px'
  button.style.padding = '5px'
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

add.addEventListener("click", increment);
