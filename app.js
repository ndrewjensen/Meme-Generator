const buttons = document.querySelector("[type=button");

buttons.addEventListener('click',function(e) {
  e.preventDefault();
}) //take this out after customizing each button

const submit = document.querySelector('#submit');
const memeContainer = document.querySelector('#memeContainer');

submit.addEventListener('click',function(e) {
  e.preventDefault();

  //save form values to variables
  const link = document.querySelector('input[name="link"]').value
  const picTop = document.querySelector('input[name="picTop"').value;
  const picBottom = document.querySelector('input[name="picBottom"').value;
  const fontsize = document.querySelector('input[name="font-size"').value;
  const color = document.querySelector('input[name="color"').value;
  const upperlocation = document.querySelector('input[name="upper-text-location"').value
  const lowerlocation = document.querySelector('input[name="lower-text-location"').value
  let size = "";
    if (document.getElementById('smallsize').checked) {
      size = 'small';
    } else if (document.getElementById('medsize').checked) {
      size= 'medium';
    } else if (document.getElementById('largesize').checked) {
      size = 'large';
    }

  //create upper text element
  const upper = document.createElement('p');
  upper.innerText = picTop;
  upper.setAttribute('class', 'upper');
  upper.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+upperlocation+"%;")

   //create lower text element
   const lower = document.createElement('p');
   lower.innerText = picBottom;
   lower.setAttribute('class', 'lower');
   lower.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";bottom:"+lowerlocation+"%;");

  //create image element
  const image = document.createElement('img');
  image.setAttribute("class", size);
  image.setAttribute("src",link);
  image.setAttribute("alt","Meme Image from URL");

  // //add delete button image to meme
  // const del = document.createElement('img');
  // del.setAttribute("class", 'del');
  // del.setAttribute('src', 'delete.png');
  // del.setAttribute('width','30px');


  //create meme container
  const newMeme = document.createElement('div');
  newMeme.classList.add('meme');

  //newMeme.setAttribute("size",size);
  newMeme.prepend(image);
  newMeme.prepend(upper);
  newMeme.append(lower);
  //newMeme.append(del);



  memeContainer.prepend(newMeme);

})

// document.addEventListener('mouseover', function(e){
//   e.AT_TARGET
//})
//use classes to define whether text is on pic or above