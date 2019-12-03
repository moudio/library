let myLibrary = [];

function Book {
    constructor(title, author){
        this.title = title; 
        this.author = author;
    }
}



function addBookToLibrary() {
    let newBook = new Book('title', 'author')
    myLibrary.push(newBook)
}