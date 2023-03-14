// //get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// //get an elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// //get an elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);

//ADDING & CHANGING CONTENT

// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = "Hello Mars!";

// const paras = document.querySelectorAll('p');

// // paras.forEach(para =>{
// //     console.log(para.innerText);
// //     para.innerText += "new text";
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML = '<h2>This is the new H2.</h2>';

// const people = ["ali", "osman", "hakan"];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

//GETTING & SETTING ATTRIBUTES

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.twitter.com');
// link.innerText = "Twitter";

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: red;');

//CHANGING CSS STYLES

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = 80px;
// title.style.margin = '';

//ADDING & REMOVING CLASSES

// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

// const errors = document.querySelectorAll("p");

// errors.forEach(errors =>{
//     if(errors.textContent.includes("error")){
//         errors.classList.add("error");
//     };

//     if(errors.textContent.includes("success")){
//         errors.classList.add("success");
//     };
// });

// const title = document.querySelector(".title");

// title.classList.toggle("test");
// title.classList.toggle("test");

//PARENTS, CHILDREN & SIBLINGS

// const article = document.querySelector("article");
// // console.log(article.children);
// // console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add("article-element");
// });

const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);