import '/style.css';
let btn = document.querySelector('button');
let inp = document.querySelector('input');
btn.addEventListener('click', (e) => {
  localStorage.setItem(`child${Math.floor(Math.random()*10)}`, JSON.stringify(inp.value));
})
window.addEventListener('storage', (event) => {
  alert(event)
})