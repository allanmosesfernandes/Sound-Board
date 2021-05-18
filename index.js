
const audioObject = new Audio();
const buttons = Array.from(document.querySelectorAll('.btn')) //Selecting all buttons 


//Playing Sound on Click
function playsound (e) {
    e.target.classList.add('playing');
    console.log(e.target);
    audioObject.src = `./sounds/${e.target.id}.mp3`;
    audioObject.currentTime = 0;
    audioObject.play();
    e.classList.add('playing');
}


//Playing Sound on User Keyboard Input
function playKeyboard(id) {
  audioObject.src = `./sounds/${id}.mp3`;
  audioObject.play();
}


//remove small transition that gets added when a button is clicked,
//picked this up from a tutorial I did ages ago, 

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(this)
  this.classList.remove('playing');
}

//it's a better version instead of using setTimeOut

buttons.forEach(button => button.addEventListener('click', playsound))
buttons.forEach(key => key.addEventListener('transitionend', removeTransition));


document.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.btn[data-key = "${e.keyCode}"]`);
    playKeyboard(key.id);
    key.classList.add('playing');
})




