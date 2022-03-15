"use strict";

let div = document.querySelector('#807');
document.addEventListener('DOMContentLoaded', show);

const Bookstore = []

const book1 = {
    "title":"The Hobbit" ,
    "Author": "J.R.R. Tolkien",
    "PublishedIn": "1937",
    "AlreadyRead": (true),
}


const book2 = {
    "title":"The Lord of the Rings" ,
    "Author": "J.R.R. Tolkien",
    "PublishedIn": "1954",
    "AlreadyRead": (true),
}

const book3 = {
    "title":"The Simarillion" ,
    "Author": "J.R.R. Tolkien",
    "PublishedIn": "1977",
    "AlreadyRead": (true),
}

const book4 = {
    "title":"Tree and Leaf" ,
    "Author": "J.R.R. Tolkien",
    "PublishedIn": "1964",
    "AlreadyRead": (false),
}

/*Bookstore.splice(0, 0, book1);
Bookstore.splice(1, 0, book2);
Bookstore.splice(2, 0, book3);
Bookstore.splice(3, 0, book4);
*/

function show(){

var BookstoreLength = Bookstore.length;
for (var i=0;BookstoreLength;i++){
    Bookstore.push(div[i].innerHTML);
}

console.log(bookstore);


if (AlreadyRead === true){
    console.log("You already read the " + title);
}
else
    console.log("The book " + title + " has not been read, you still need to read " + title);

}