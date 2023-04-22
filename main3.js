//single element

//const form = document.getElementById('my-form');
//const query = document.querySelector('my-form');//newer then getElement and select classes and etc.

//multiple element

//const queryAll = document.querySelectorAll('.item');//make an array

// const classAll = document.getElemntsByClassName('item'); //cant use array methods 
// const tagAll = document.getElemntsByTagName('li');

//------------------
//better options to select
//const query = document.querySelector('my-form');
//const queryAll = document.querySelectorAll('.item');

//------------------

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//------------------

//const ul = document.querySelector('.items');

//ul.remove(); // we can remove
//ul.lastElementChild.remove(); // or remove last element of "array"(ul with 3x li)
//ul.firstElementChild.remove();//or remove first element



//types to change text 
// ul.firstElementChild.textContent = 'Hello'; //we can change text 
// ul.children[1].innerText = 'Brad';//ul is an array that's why we can choose element with index
// ul.lastElementChild.innerHTML = '<h4>H4</h4>';//we can change html settings 

//we can change style by using js
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
    
// btn.addEventListener('click', (e) =>{//we can make mouseover(point on element) or mouseout(mouse out of element)
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h4>Hello</h4>';
//     // console.log(e.target.className);
// }); //(e) is event

