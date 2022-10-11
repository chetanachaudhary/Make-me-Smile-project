let img=document.querySelector('img');
let btn=document.querySelector('#changeImage');

//addEventListener to change image
btn.addEventListener('click',()=>{
    img.src='happy.jpg'; //Image Source
});

let btn1=document.querySelector('#btn1');

//To Change innerHtml on Click
btn1.addEventListener('click',()=>{
    btn1.innerHTML='Thankyou';
})

//Creating Element for console part
let elem=document.createElement('span');
elem.getElementsByClassName='text';
let tnode=document.createTextNode('Make Me Smile Project');
elem.appendChild(tnode);
console.log(elem);

