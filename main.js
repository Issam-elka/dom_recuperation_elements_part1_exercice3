//#1
let div = document.getElementsByTagName('div')[2].firstElementChild;
console.log(div);

//#2
let div2 = document.getElementsByTagName('div')[2];
let secondDiv = div2.lastElementChild;
console.log(secondDiv);

//#3
// let pa = document.getElementsByTagName('div')[2].firstElementChild;
// console.log(pa);
let exo3 = div.nextElementSibling.firstElementChild;
console.log(exo3);

//#4
let p = document.getElementsByTagName('p')[0];
let dernierP = p.lastElementChild;
console.log(dernierP);



//#5
let i = document.getElementsByTagName('i')[0];
let parent = i.parentNode;
console.log(parent);

//#6

let b = document.getElementsByTagName('b')[0];
let parentB = b.parentNode;
console.log(parentB);

//#7
let dernierDiv = document.getElementsByTagName('div')[2].firstElementChild;
nextChild = dernierDiv.nextElementSibling;
console.log(nextChild);