
let dodger = document.getElementById("dodger")


// function moveX(dir){
//   let leftNumbers = dodger.style.left.replace("px", "");
//   let left = parseInt(leftNumbers, 10);
//
//   dir === "right" ? dodger.style.left = `${left + 1}px` : dodger.style.left = `${left - 1}px`
// }
//
//
// function moveY(dir){
//   let bottomNumbers = dodger.style.bottom.replace("px", "");
//   let bottom = parseInt(bottomNumbers, 10);
//   console.warn("working in Y")
//   dir === "up" ? dodger.style.bottom = `${bottom + 1}px` : dodger.style.bottom = `${bottom - 1}px`
// }



function moveDodgerRight(){
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);

  dodger.style.left = `${right + 1}px`;
}

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left - 1}px`;
}

function moveDodgerUp(){
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);

  dodger.style.bottom = `${bottom + 1}px`;
}

function moveDodgerDown(){
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);

  dodger.style.bottom = `${bottom - 1}px`;
}

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  // if (e.key === "ArrowLeft") {
  //   moveX("left")
  // }else if (e.key === "ArrowRight"){
  //   moveX("right")
  // }else if (e.key === "ArrowUp"){
  //   moveY("up")
  // }else if (e.key === "ArrowDown"){
  //   moveY("down")
  // }
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }else if (e.key === "ArrowRight"){
    moveDodgerRight()
  }else if (e.key === "ArrowUp"){
    moveDodgerUp()
  }else if (e.key === "ArrowDown"){
    moveDodgerDown()
  }

});
