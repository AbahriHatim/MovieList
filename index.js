//Debut Des image block2
let newImage1 = new Image();
newImage1.src = "image/download1.png";
let newImage2 = new Image();
newImage2.src = "image/download.png";
let newImage3 = new Image();
newImage3.src = "image/download2.png";
let newImageRight1 = new Image();
newImageRight1.src = "image/images1.png";
let newImageRight2 = new Image();
newImageRight2.src = "image/images2.png";
let newImageRight3 = new Image();
newImageRight3.src = "image/images3.png";
let newImageRight4 = new Image();
newImageRight4.src = "image/1.png";
let newImageRight5 = new Image();
newImageRight5.src = "image/2.png";
let newImageRight6 = new Image();
newImageRight6.src = "image/3.png";
let newImageRight7 = new Image();
newImageRight7.src = "image/4.png";

let imgGauche = document.querySelector("#imgGauche");
let imgRight1 = document.querySelector("#imgDroite1");
let imgRight2 = document.querySelector("#imgDroite2");
let imgRight3 = document.querySelector("#imgDroite3");
let titre = document.querySelector("#titre");
let btnLeft = document.querySelector(".left-button");
let btnRight = document.querySelector(".right-button");

const arrayImgLeft = [
  { imgGauche: newImage1, titre: "joker" },
  {
    imgGauche: newImage2,
    titre: "Asbestas",
  },
  {
    imgGauche: newImage3,
    titre: "Annete",
  },
];
const arrayImgRight = [
  {
    imgRight1: newImageRight1,
  },
  {
    imgRight1: newImageRight2,
  },
  {
    imgRight1: newImageRight3,
  },
  {
    imgRight1: newImageRight3,
  },
  {
    imgRight1: newImageRight4,
  },
  {
    imgRight1: newImageRight5,
  },
  {
    imgRight1: newImageRight6,
  },
  {
    imgRight1: newImageRight7,
  },
];
const arrayImgRight2 = [
  {
    imgRight2: newImageRight1,
  },
  {
    imgRight2: newImageRight2,
  },
  {
    imgRight2: newImageRight3,
  },
  {
    imgRight2: newImageRight3,
  },
  {
    imgRight2: newImageRight4,
  },
  {
    imgRight2: newImageRight5,
  },
  {
    imgRight2: newImageRight6,
  },
  {
    imgRight2: newImageRight7,
  },
];
const arrayImgRight3 = [
  {
    imgRight3: newImageRight1,
  },
  {
    imgRight3: newImageRight2,
  },
  {
    imgRight3: newImageRight3,
  },
  {
    imgRight3: newImageRight3,
  },
  {
    imgRight3: newImageRight4,
  },
  {
    imgRight3: newImageRight5,
  },
  {
    imgRight3: newImageRight6,
  },
  {
    imgRight3: newImageRight7,
  },
];
btnLeft.addEventListener("click", () => {
  let res = Math.floor(Math.random() * 3);
  imgGauche.src = arrayImgLeft[res].imgGauche.src;
  titre.innerHTML = arrayImgLeft[res].titre;
  imgRight1.forEach((img, index) => {
    img.src = arrayImgRight[index].imgRight1.src;
  });
});

btnRight.addEventListener("click", () => {
  let res = Math.floor(Math.random() * 3);
  imgGauche.src = arrayImgLeft[res].imgGauche.src;
  titre.innerHTML = arrayImgLeft[res].titre;
});

btnRight.addEventListener("click", () => {
  let res = Math.floor(Math.random() * 7);
  let res1 = Math.floor(Math.random() * 7);
  let res2 = Math.floor(Math.random() * 7);
  imgRight1.src = arrayImgRight[res].imgRight1.src;
  imgRight2.src = arrayImgRight2[res2].imgRight2.src;
  imgRight3.src = arrayImgRight3[res1].imgRight3.src;
});
function changePicture() {
  // Define a function to change the picture
  const changeImage = () => {
    let res = Math.floor(Math.random() * 3);
    imgGauche.src = arrayImgLeft[res].imgGauche.src;
    titre.innerHTML = arrayImgLeft[res].titre;
  };

  changeImage();

  setInterval(changeImage, 1000);
}
changePicture();
//Fin Des image block2
//Debut Du text + button Block1

const imageContainers = document.querySelectorAll(".container2 .img");

imageContainers.forEach((container) => {
  const overlay = container.querySelector(".ovrley");

  container.addEventListener("mouseover", () => {
    overlay.classList.add("show-overlay");
  });

  container.addEventListener("mouseout", () => {
    overlay.classList.remove("show-overlay");
  });
});
// Pop-up start
let popUpBox = document.querySelector(".pop-up");
let btnInfos = document.querySelectorAll(".info");

// Add event listeners to all buttons with class "info"
btnInfos.forEach((btn) => {
  btn.addEventListener("click", displayPopUp);
});

let testBtn = true;

function displayPopUp() {
  if (testBtn) {
    popUpBox.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    testBtn = false;
  } else {
    popUpBox.style.visibility = "hidden";
    document.body.style.overflow = "auto";
    testBtn = true;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Define your array of images
  const arraySwip = [
    "image/mv-item2.jpg",
    "image/mv-item3.jpg",
    "image/mv-item4.jpg",
    "image/mv-item5.jpg",
    "image/mv-item6.jpg",
    "image/mv-item7.jpg",
    "image/mv-item8.jpg",
  ];

  // Initialize Swiper
  var swiper = new Swiper(".container3", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Add event listener for slide change
  swiper.on("slideChange", function () {
    // Get current active slide index
    let activeIndex = swiper.realIndex;
    // Get the next image from arraySwip
    let nextImage = arraySwip[(activeIndex + 1) % arraySwip.length];
    // Update imgSwp src with the new image
    let imgSwp = document.querySelector("#imgSwp");
    imgSwp.src = nextImage;
  });
});
