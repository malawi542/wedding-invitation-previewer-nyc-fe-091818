// This is for the buttons
// 1) This is for formal

const button = document.querySelector('#butone')

button.addEventListner('click', (event) => {
  const div = document.querySelector('#total')
  div.classList.add('nas')
  div.classList.remove('jay')
  div.classList.remove('big')
})

// 2) This is for spring

const button2 = document.querySelector('#buttwo')

button2.addEventListner('click', (event) => {
  const div = document.querySelector('#total')
  div.classList.add('#buttwo')
  div.classList.remove('#butone')
  div.classList.remove('#butthree')
})

// 3) This is for Art Deco 

const button3 = document.querySelector('#butthree')

button3.addEventListner('click', (event) => {
  const div = document.querySelector('#total')
  div.classList.add('#butthree')
  div.classList.remove('#butone')
  div.classList.remove('#buttwo')
})

// This is for the first div
// 1st Name

const div = document.querySelector('#first')

button.addEventListner('keyDown', (event) => {
  const div = document.querySelector('#total')
  div.classList.add('#first')
})

// 2nd Name

const div1 = document.querySelector('#second')

div1.addEventListner('keyDown', (event) => {
  const div = document.querySelector('#total')
  const div1 = div.createElement('div')
})

// Last Name

const div2 = document.querySelector('#last')

div2.addEventListner('keyDown', (event) => {
  const div = document.querySelector('#total')
  const div1 = div.createElement('div')
})

// Date

const div3 = document.querySelector('#date')

div3.addEventListner('keyDown', (event) => {
  const div = document.querySelector('#total')
  const div1 = div.createElement('div')
})

// location

const div4 = document.querySelector('#location')

div4.addEventListner('keyDown', (event) => {
  const div = document.querySelector('#total')
  const div1 = div.createElement('div')
})