let myLibrary = [];

class Book {
    constructor(title, author)
    {
        this.title = title; 
        this.author = author;
    }
}

 
 const addBook = document.getElementById("addBook");
 const form = document.getElementById("form");
 const showFormButton = document.getElementById("showForm")
 addBook.addEventListener('click', addBookToLibrary());
  showFormButton.addEventListener("click", function(){
        if (form.style.display === "block") {
        form.style.display = "none"
        showFormButton.innerHTML = "Show Form"

        } 
        else {
        form.style.display = "block"
        showFormButton.innerHTML = "Hide Form"
        }
   });



    function addBookToLibrary() {
        const title = document.getElementById("title").value
        const author = document.getElementById("author").value
        console.log(title)
            const newBook = new Book(title, author)
            console.log(newBook)
            myLibrary.push(newBook);
            console.log(myLibrary)
    

    }


