
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
const changeStatusButtons = document.getElementsByClassName('change-status-button')
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


// Functions
class Book {
  constructor(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
  }
}

function addBookToLibrary() {
  const titleValue = title.value;
  const authorValue = author.value;
  const statusValue = getReadValue();
  if (titleValue && authorValue) {
    const newBook = new Book(titleValue, authorValue, statusValue);
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
  let chunk = tableRow.innerHTML
  let title = chunk.match(/<td>(.*?)<\/td>/)[1];
  title = title.replace("<td>", "").replace("</td>", "").trim();

  for(let i = 0 ; i < myLibrary.length; i++){
    if (myLibrary[i].title === title) {
      myLibrary.splice(i, 1);
    }
  }
  
  
}

function render() {
  if (myLibrary.length > 0) {
    libraryDiv.style.display = "block";
    libraryBody.innerHTML = "";
    for (let book of myLibrary) {
      libraryBody.innerHTML += ` 
  <td>${book.title} </td>
    <td> ${book.author} </td>
    <td class="toggleReadStatus">${book.readStatus} <button class="btn btn-success btn-xs change-status-button">Change Status</button></td>
    <td class="removeBook"><button class='btn btn-danger'> Remove book </button></td> 
    `

    }

    for (let i = 0; i < removeBook.length; i++) {
      removeBook[i].addEventListener("click", removeBookFromLibrary);
    }


  } else {
    libraryDiv.style.display = "block";
    libraryBody.innerHTML =
      '<p class="bg-warning no-books"> No Books In Inventory. Add New Ones! </p>';
  }
 for (let button of changeStatusButtons){
   button.addEventListener("click", changeReadStatus)
  }

}


function getReadValue(){
  const read = document.getElementsByName('read-status');
let read_value;
for(let i = 0; i < read.length; i++){
    if(read[i].checked){
        read_value = read[i].value;
    }
}
return read_value;
}

function changeReadStatus(e){
  let tableRow = e.target.closest("tr");
  let chunk = tableRow.innerHTML
  let title = chunk.match(/<td>(.*?)<\/td>/)[1];
  title = title.replace("<td>", "").replace("</td>", "").trim();

  for(let i = 0 ; i < myLibrary.length; i++){
    if (myLibrary[i].readStatus === "Read") {
      myLibrary[i].readStatus = "Not Read"
    }
    else
    {
      myLibrary[i].readStatus = "Read"
    }
    render()
  }
}

