// start script home
let slid = document.querySelectorAll(".slid-container");
let index = 0;

function next() {
  if (index < 3) {
    slid[index].classList.remove("active");
    index = index + 1;
    slid[index].classList.add("active");
    console.log(index);
  } else if ((index = 3)) {
    slid[index].classList.remove("active");
    index = 0;
    slid[index].classList.add("active");
  }
}
function prev() {
  if (index > 0) {
    slid[index].classList.remove("active");
    index = index - 1;
    slid[index].classList.add("active");
    console.log(index);
  } else if (index <= 0) {
    slid[index].classList.remove("active");
    index = 3;
    slid[index].classList.add("active");
  }
}
// end script home

// start script built
let buil = document.querySelectorAll(".bullet1");
let i=index;
function next1() {
  if (i < 3) {
    buil[i].classList.remove("activebullet");
    i = i + 1;
    buil[i].classList.add("activebullet");
    console.log(i);
  } else if ((i = 3)) {
    buil[i].classList.remove("activebullet");
    i = 0;
    buil[i].classList.add("activebullet");
  }
}

function prev1() {
    if (i > 0) {
        buil[i].classList.remove("activebullet");
      i = i - 1;
      buil[i].classList.add("activebullet");
      console.log(i);
    } else if (i <= 0) {
        buil[i].classList.remove("activebullet");
      i = 3;
      buil[i].classList.add("activebullet");
    }
  }
// end script built
