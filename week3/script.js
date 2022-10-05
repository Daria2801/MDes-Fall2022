const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const image = document.getElementById("image");

const showImage = (clickEvent) => {
  const newSrc = clickEvent.target.src;
  image.src = newSrc;
};

button1.addEventListener("click", showImage);
button2.addEventListener("click", showImage);
button3.addEventListener("click", showImage);
button4.addEventListener("click", showImage);

// let colorBtn = document.getElementById("colorChange")
// const mainSct = document.getElementById("mainSection")
// const textBtn = document.getElementById("addText")
// const imgBtn = document.getElementById("imageBtn")

// console.log(colorBtn)

// const addSomeText = () => {
//   const someText = "here is a bit of text."
//   const htmlElem = document.createElement("h1")
//   htmlElem.innerText = someText

//   mainSct.appendChild(htmlElem)
// }

// const addImage = () => {
//   const imgURL = "https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
//   const imgElem = document.createElement("img")
//   imgElem.src = imgURL
//   imgElem.alt = "circle logo"

//   mainSct.appendChild(imgElem)
// }
// imgBtn.addEventListener("click", addImage)

// textBtn.addEventListener("click", addSomeText)

// colorBtn.addEventListener("click", () => {
//   let red = Math.random()*255
//   let blue = Math.random()*255
//   let green = Math.random()*255
//   console.log(blue)

//   mainSct.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
// })
