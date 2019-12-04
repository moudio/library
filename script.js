// VARIABLES
const addBook = document.getElementById("addBook");
const form = document.getElementById("form");
const author = document.getElementById("author");
const title = document.getElementById("title");
const showFormButton = document.getElementById("showForm");
const showLibrary = document.getElementById("showLibrary");
const libraryDiv = document.getElementById("library");
const libraryBody = document.getElementById("library-table-body");
const removeBook = document.getElementsByClassName("removeBook");
let myLibrary = [];

// Event Listeners

showLibrary.addEventListener("click", render);
addBook.addEventListener("click", addBookToLibrary);

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
  const authorValue = author.value;
  if (titleValue && authorValue) {
    const newBook = new Book(titleValue, authorValue);
    myLibrary.push(newBook);
    title.value = "";
    author.value = "";
    render();
  } else {
    alert("Form not valid");
  }
}

function removeBookFromLibrary(e) {
  let tableRow = e.target.closest("tr");
  libraryBody.removeChild(tableRow);
}

function render() {
  if (myLibrary.length > 0) {
    libraryDiv.style.display = "block";
    libraryBody.innerHTML = "";
    for (let book of myLibrary) {
      libraryBody.innerHTML += ` 
  <td>${book.title} </td>
    <td> ${book.author} </td>
    <td class="removeBook"><button class='btn btn-danger'> Remove book </button></td> 
    `;
    }

    for (let i = 0; i < removeBook.length; i++) {
      removeBook[i].addEventListener("click", removeBookFromLibrary);
    }
  } else {
    libraryDiv.style.display = "block";
    libraryBody.innerHTML =
      '<p class="bg-warning no-books"> No Books In Inventory. Add New Ones! </p>';
  }
}
