//need to adjust the start fresh button to clear out the hard-coded meme

const submit = document.querySelector('#submit');
const clearall = document.querySelector('#clearall');
const wipmeme = document.querySelector('#wipmeme');
const memeContainer = document.querySelector('#memeContainer');
const wipuppertext = document.querySelector('#wipuppertext');
const wiplowertext = document.querySelector('#wiplowertext');
const wipimage = document.querySelector('#wipimage');


let linkinput = document.querySelector('#link')
let link = document.querySelector('input[name="link"]').value;
let picTop = document.querySelector('input[name="picTop"').value;
let picBottom = document.querySelector('input[name="picBottom"').value;
let fontsize = document.querySelector('input[name="font-size"').value;
let color = document.querySelector('input[name="color"').value;
let upperlocation = document.querySelector('input[name="upper-text-location"').value;
let lowerlocation = document.querySelector('input[name="lower-text-location"').value;
let size = "medium";



  wipuppertext.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+upperlocation+"%;")

  wiplowertext.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+lowerlocation+"%;");




//Event listener for clicks anywhere in the from. It occurns to me after the fact that someone who tabs instead of uses the mouse might have issues, and that with the way this shaped out I don't need this big if else, I should just use a separate event listener for each form input.
document.querySelector('#form').addEventListener('click', function(e){
  console.log("key listener is firing")
  if (e.target === document.querySelector('input[name="picTop"')) {
    e.target.addEventListener('keyup', function(){
      wipuppertext.innerText = e.target.value;
      console.log("top text is firing" + picTop);

    })
  } else if (e.target === document.querySelector('input[name="picBottom"')) {
    e.target.addEventListener('keyup', function(){
      wiplowertext.innerText = e.target.value;
      console.log("bottom text is firing" + picBottom)
    })
  } else if (e.target === document.querySelector('input[name="font-size"')) {
      fontsize = e.target.value;
      console.log("fontsize is firing" + fontsize);
  } else if (e.target === document.querySelector('input[name="color"')) {
      document.addEventListener('click', function () {
        color = e.target.value;
        console.log("color is firing" + color);
        wipuppertext.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+upperlocation+"%;");
        wiplowertext.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+lowerlocation+"%;");
      })
  } else if (e.target.getAttribute('name') === 'size') {
    console.log('size is firing');
    if (document.getElementById('smallsize').checked) {
      size = 'small';
      wipmeme.classList.remove('medium');
      wipmeme.classList.remove('large');
      wipmeme.classList.add('small');
      wipimage.classList.remove('medium');
      wipimage.classList.remove('large');
      wipimage.classList.add('small');

    } else if (document.getElementById('medsize').checked) {
      size= 'medium';
      wipmeme.classList.remove('small');
      wipmeme.classList.remove('large');
      wipmeme.classList.add('medium');
      wipimage.classList.remove('small');
      wipimage.classList.remove('large');
      wipimage.classList.add('medium');
    } else if (document.getElementById('largesize').checked) {
      size = 'large';
      wipmeme.classList.remove('small');
      wipmeme.classList.remove('medium');
      wipmeme.classList.add('large');
      wipimage.classList.remove('small');
      wipimage.classList.remove('medium');
      wipimage.classList.add('large');
    }
  } else if (e.target === document.querySelector('input[name="upper-text-location"')) {
    wipupperlocation = e.target.value;
    console.log("upper text location is firing" + upperlocation);

  } else if (e.target === document.querySelector('input[name="lower-text-location"')) {
    wiplowerlowerlocation = e.target.value;
    console.log("lower text location is firing" + lowerlocation);

  } else if (e.target === document.querySelector('#link')) {
    e.target.addEventListener('keyup', function(e){
      console.log("paste listener is firing");
      link = document.querySelector('input[name="link"]').value;
      wipimage.setAttribute('src',link)
    })
  }

    wipuppertext.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+upperlocation+"%;");
    wiplowertext.setAttribute("style","font-size:"+fontsize+"px;color:"+color+";top:"+lowerlocation+"%;");
})


document.getElementById("upper-text-location").addEventListener('click', function (e) {
  upperlocation = e.target.value;
})

document.getElementById("lower-text-location").addEventListener('click', function (e) {
  lowerlocation = e.target.value;
})












submit.addEventListener('click',function(e) {
  e.preventDefault();

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
  image.setAttribute('class',size);
  image.classList.add("image");
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
  newMeme.prepend(lower);
  newMeme.prepend(upper);
  memeContainer.prepend(newMeme);
  newMeme.append(del);
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
    e.target.parentElement.children[3].setAttribute("style",'opacity: .5;')

    setTimeout(function() {
      e.target.parentElement.children[3].setAttribute("style",'opacity: 0;')
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

