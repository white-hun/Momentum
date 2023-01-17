const images = ["background2.jpg"]; // img를 array하고 변수화 *(변수images)

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 변수images의 max 갯수 중 하나를 floor하고 random으로 선택 *(변수 chosenImage)

const bgimage = document.createElement("img"); // html에 img element(<img>) 생성 *(변수bgimage)

bgimage.src = `img/${chosenImage}`; // 변수bgimage로 생성된 <img>에 변수chosenImage로 선택된 img source 추가(<img src="background.jpg />")

document.body.appendChild(bgimage); // body에 child로 img element 추가
