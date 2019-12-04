// VARIABLES
const addBook = document.getElementById("addBook");
const form = document.getElementById("form");
const author = document.getElementById("author");
const title = document.getElementById("title")
const showFormButton = document.getElementById("showForm");
const showLibrary = document.getElementById("showLibrary");
const libraryDiv = document.getElementById("library");
const libraryBody = document.getElementById("library-table-body")
const removeBook = document.getElementsByClassName("removeBook")
let myLibrary = [];

console.log(removeBook)
// Event Listeners 
showLibrary.addEventListener("click", listOutBooks);
addBook.addEventListener("click", addBookToLibrary);
for (let removeButton of removeBook){
    removeButton.addEventListener("click", removeBookFromLibrary)
}
showFormButton.addEventListener("click", function() {
    if (form.style.display === "block") {
      form.style.display = "none";
      showFormButton.innerHTML = "Show Form";
    } else {
      form.style.display = "block";
      showFormButton.innerHTML = "Hide Form";
    }
  });



class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}




function addBookToLibrary() {
  const titleValue = title.value;
  const authorValue = author.value
  const newBook = new Book(titleValue, authorValue);
  myLibrary.push(newBook);
  title.value = "";
  author.value = "";
}

function removeBookFromLibrary(){
    console.log("ok")
}

function listOutBooks() {
  for (let book of myLibrary) {
    
    libraryBody.innerHTML += 
    ` <td>${book.title} </td>
    <td> ${book.author} </td>
    <td><button class = "removeBook"> Remove book </button></td> `
  }
}
