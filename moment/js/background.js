const images = ["1.jpg","2.jpg",  "3.jpg"];

const choImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src=`img/${choImage}`;

document.body.appendChild(bgImage);


//append : 가장 뒤에 오게함


//body에 넣고 싶은 위치에 정확히 넣는 방법
// const h2 = document.querySelector("#clock");
// document.body.insertBefore(bgImage, h2);