let moreInfo = document.querySelector('.card');
let cardImg = document.querySelector('.img-fluid');
let cardTitle = document.querySelector('.card-title');
let cardText1 = document.querySelector('.text1')
let cardText2 = document.querySelector('.text2')
let cardText3 = document.querySelector('.text3')
let cardText4 = document.querySelector('.text4')


fetch(`https://api.tvmaze.com/shows/${window.location.href.substring(window.location.href.lastIndexOf('?')+1)}`).then(response => response.json()).then(json => {
      cardImg.setAttribute('src' , `${json.image.original}`);
      cardTitle.innerText = json.name;
      cardText1.innerText=json.language;
      cardText2.innerText=json.premiered;
      cardText3.innerText=json.ended;
      cardText4.innerText=json.summary;
      
})