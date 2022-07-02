const submit = document.querySelector('#submit');
const clearall = document.querySelector('#clearall');
const memeContainer = document.querySelector('#memeContainer');

//colorful header from Colt Steele


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
   lower.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+lowerlocation+"%;");

  //create image element
  const image = document.createElement('img');
  image.setAttribute("class", size);
  image.classList.add("image")
  image.setAttribute("src",link);
  image.setAttribute("alt","Meme Image from URL");

  //add delete button image to meme
  const del = document.createElement('img');
  del.setAttribute("class", 'del');
  del.setAttribute('src', 'delete.png');
  del.setAttribute('width','10px');

  //create meme container
  const newMeme = document.createElement('div');
  newMeme.classList.add('meme');
  newMeme.prepend(image);
  newMeme.prepend(del);
  newMeme.prepend(lower);
  newMeme.prepend(upper);
  memeContainer.prepend(newMeme);
  newMeme.classList.add(size)

  //reset the form after submission; the page functionality is better if this is all commented out
  // document.querySelector('input[name="link"]').value = "";
  // document.querySelector('input[name="picTop"').value = "";
  // document.querySelector('input[name="picBottom"').value = "";
  // document.querySelector('input[name="font-size"').value = "16";
  // document.querySelector('input[name="color"').value = '#000000';
  // document.querySelector('input[name="upper-text-location"').value = "11";
  // document.querySelector('input[name="lower-text-location"').value = "8";
  // document.getElementById('medsize').checked = 'checked';

})

memeContainer.addEventListener("mouseover", function(e) {
  if (e.target.classList[1] === 'image') {
    e.target.parentElement.children[2].setAttribute("style",'opacity: .5;')

    setTimeout(function() {
      e.target.parentElement.children[2].setAttribute("style",'opacity: 0;')
    }, 3000);
  }
})

memeContainer.addEventListener('click', function(e){
  if (e.target.classList[0] === 'del') {
    e.target.parentElement.remove();
  }
})

clearall.addEventListener("click", function() {

  //delete all meme divs
  while (memeContainer.children.length > 0) {
    memeContainer.firstElementChild.remove();
  }

  //Reset Form
  document.querySelector('input[name="link"]').value = "";
  document.querySelector('input[name="picTop"').value = "";
  document.querySelector('input[name="picBottom"').value = "";
  document.querySelector('input[name="font-size"').value = "16";
  document.querySelector('input[name="color"').value = '#000000';
  document.querySelector('input[name="upper-text-location"').value = "11";
  document.querySelector('input[name="lower-text-location"').value = "8";
  document.getElementById('medsize').checked = 'checked';
})