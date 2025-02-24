// console.log('external file');

// option 2 to handle events
function makeYellowGreen() {
  document.body.style.backgroundColor = "yellowgreen";
}

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//option 3: get element by Id and then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
//console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option 4: different version
const btnMakePurple = document.getElementById("btn-make-purple");
//console.log(btnMakePurple);

btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
