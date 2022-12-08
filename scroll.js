let lastKnownScrollPosition = 0;
let ticking = false;

let imgDiv = document.querySelector(".img-div");
let rightDiv = document.querySelector(".right-div");
let wholeDiv = document.querySelector(".lower-part");

function applyAnimation(scrollPos) {
  console.log(scrollPos);
  if (scrollPos<350){
    wholeDiv.style.opacity=0;
  }
  if (scrollPos>350){
    console.log("dunja je naj");
    wholeDiv.style.opacity = 100;
    imgDiv.style.animation = "thirdAnimation 1s forwards"
    rightDiv.style.animation = "fourthAnimation 1s forwards"
  }
}

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      applyAnimation(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});
