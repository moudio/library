let myLibrary = [];

function Book(){
    constructor(title, author)
    {
        this.title = title; 
        this.author = author;
    }
}
 
 const addButton = document.getElementById("addBook").addEventListener("")
 const form = document.getElementById("form")
  form.addEventListener("click", myFunction())
  function myFunction(){
       
        if (form.style.visibility === "hidden") {
        form.style.visibility = "visible"
        } 
        else {
        form.style.visibility = "hidden"
        }
   }
    function addBookToLibrary() {
    let newBook = new Book('title', 'author')
    myLibrary.push(newBook)
}

