function toggleText() {
let btn = document.querySelector('.toggle-text-button');
let txt = document.querySelector('#text');

txt.hidden = false;

btn.addEventListener('click', () => {
  txt.hidden = !txt.hidden
})
}
