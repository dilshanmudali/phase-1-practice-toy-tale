let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyDiv = document.querySelector('#toy-collection')
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

//   //fetching toys 

// const url = 'http://localhost:3000/toys'

// function getToys(){
//   fetch(url)
//     .then(res => res.json())
//     .then(data => data.forEach(toy => renderToys(toy)))
// }


//   function renderToys(toy){
//     console.log(toy)

//     const toyCard = document.createElement('div')
//     // toyCard.id = `${toy.id}`
//     toyCard.className = 'card'

//     const toyImg = document.createElement('img')
//     toyImg.src = toy.image
//     toyImg.className = 'toy-avatar'
//     toyImg.alt = `${toy.name}image`

//     const h2 = document.createElement('h2')
//     h2.textContent = toy.name

//     const p = document.createElement('p')
//     p.textContent = toy.likes

//     const button = document.createElement('button')
//     button.className = 'like-btn'
//     button.id = `${toy.id}`
//     addBtn.textContent = 'like'





//     toyCard.append(toyImg, h2, p, button)
//     toyDiv.appendChild(toyCard)
//   }

// function init(){
//   getToys()
// }


// init()

//-------------------------------------------
const form = document.querySelector('.add-toy-form')
const toyCollection =  document.querySelector('#toy-collection')

// fetching toys
function getToys(){
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(data => data.forEach(toy => renderToys(toy)))

}


//render toys to dom
function renderToys(toy){
  const toyCard = document.createElement('div')
  toyCard.className = 'card'
  toyCard.id = `${toy.id}`

  const toyName = document.createElement('h2')
  toyName.textContent = toy.name 

  const toyImg = document.createElement('img')
  toyImg.className = 'toy-avatar'
  toyImg.src = toy.image 

  const toyLikes = document.createElement('p')
  toyLikes.textContent = `${toy.likes} likes`

  const toyBttn = document.createElement('button')
  toyBttn.textContent = 'like'
  toyBttn.id = `${toy.id}` 
  toyBttn.className = 'like-btn'
  toyBttn.addEventListener('click', () => addLikes(toy,toyLikes))
  
  toyCard.append(toyName,toyImg,toyLikes,toyBttn)
  toyCollection.appendChild(toyCard)


  //handle likes

  function addLikes(toy, toyLikes){  
    ++toy.likes
    toyLikes.textContent = `${toy.likes} likes`
  }

}

//create toy

function createToy(e){
  e.preventDefault()
  
  const name = document.querySelector("#name").value;
  const img = e.target.querySelector("#image").value;
  console.log(name,img)
  console.log(e)
  newtoy = {
    // id: ,
    name:name,
    image:img,
    likes: 1
  }

renderToys(newtoy)
e.target.reset()
}


//initialize application
function init(){
  getToys()
  form.addEventListener('submit', createToy)
}

init()
});
