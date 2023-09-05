 let listDisplay = document.getElementById('list-display')
 let checker = document.getElementById('checker')
   

function grocer  (e) {
  e.preventDefault()
  let typeList = document.getElementById('type-list').value
  let newtype=typeList.toLowerCase()

  if (newtype.length === " "){
    console.log('enter text')
    listDisplay.innerHTML="please enter text"
   }else{
    listDisplay.innerHTML=newtype
    console.log(newtype)
   }

   newtype.split( ' ')
   listDisplay.innerHTML=newtype.split( ' ')
   console.log(newtype.split( ' '))
   let pushlist=[]
   for (let i=0; i<=newtype; i++) {
  pushlist.push(i)
  pushlist+='\n'

  // listDisplay.innerHTML=pushlist

   }

}



checker.addEventListener('click', grocer)