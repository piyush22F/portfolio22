let display = document.querySelector(".display");
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function (val) {
  crsr.style.left = val.x - 7.5 + "px";
  crsr.style.top = val.y - 7.5 + "px";
});

let counter = 0;

plusBtn.addEventListener("click", function () {
  counter++;
  counter = counter < 10 ? "0" + counter : counter;
  display.innerHTML = counter;
});

minusBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    counter = counter < 10 ? "0" + counter : counter;
    display.innerHTML = counter;
  }
});

// let images = document.querySelectorAll(".imgs");

let mainImg = document.querySelector("#mainImg");
let images = document.querySelector(".bottom-imgs");

let imgList = [
  { src: "images/image-product-1.jpg" },
  { src: "images/image-product-2.jpg" },
  { src: "images/image-product-3.jpg" },
  { src: "images/image-product-4.jpg" },
];

let clutter = "";

function addImages() {
  imgList.forEach(function (elem, ind) {
    clutter += `<img id="${ind}" class="imgs" src="${elem.src}" alt="product1">`;
  });
  // console.log(clutter);
  images.innerHTML = clutter;

  images.addEventListener("click", function (elem) {
    mainImg.src = imgList[elem.target.id].src;
    // console.log(elem.target.id);
  });
}

let addBtn = document.querySelector(".addBtn");
let mainCart = document.querySelector(".mainCart");
let body = document.querySelector("body");

function cartfunk() {
  addBtn.addEventListener("click", function () {
    mainCart.style.display = "block";
    mainCart.innerHTML = ` <div class="cart-item">
    <img src="${imgList[0].src}">
    <div class="det">
        <h5>Fall Limited Edition Sneakers</h5>
        <p>$125.00</p>
    </div>
</div>`;
  });
}

cartfunk();

addImages();
