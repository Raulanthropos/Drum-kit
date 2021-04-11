const keys = Array.from(document.querySelectorAll('.little-boxes__little-box'));
const boxTitle = document.querySelectorAll(`.little-boxes__title`);

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function funky(evt) {
  if(evt.key === "a" || "s" || "d" || "f" || "g" || "h" || "j" || "k" || "l") {
    //  boxTitle.classList.add(`little-boxes__little-funky-box`);
    boxTitle.object.style.boxShadow="10px 20px 30px blue";
   }
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

window.addEventListener("keydown", funky);

