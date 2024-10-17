let pictures = ["images/pic1.jpg","images/pic2.webp","images/pic3.jpg","images/pic4.avif","images/pic5.jpg","images/pic6.jpg","images/pic7.jpg","images/pic8.jpg","images/pic9.jpg","images/pic10.jpg"];

let picEle = document.getElementById('js-pic');
picEle.setAttribute("src",pictures[0]);

let count = 0;

function carosel(){
  
  count++;
  if(count>9){
    count = 0
  }
  
  picEle.setAttribute("src",pictures[count]);

}

function caroselLeft(){

  count--;
  if (count < 0) {
    count = pictures.length - 1; 
  }

  picEle.setAttribute("src",pictures[count]);

}

setInterval(carosel, 2000);