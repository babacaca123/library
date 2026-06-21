

let myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
  };


function addBookToLibrary(title, author, pages, read, id) {
    
    const book = new Book(title, author, pages, read, id)
    myLibrary.push(book)

}

addBookToLibrary("The Count of Monte Cristo", "Alexander Dumas", 1200, true);
addBookToLibrary("Wounded by Love", "Saint Porphyrios", 200, true);
addBookToLibrary("Narnia", "C.S. Lewis", 289, true);

renderLibrary();


console.log(myLibrary)


// step 3

function renderLibrary(){




    const listContainer = document.getElementById('book-list')

    listContainer.innerHTML = "";


    myLibrary.forEach(book => {

    const bookDiv = document.createElement('div');
    bookDiv.className = "book-card"

    bookDiv.innerHTML = `
        <h1>${book.title}</h1>
        <h3>Author: ${book.author}</h3>
        <h3>Pages: ${book.pages}</h3>
        <h3>Read before: ${book.read}</h3>
        <p>${book.id}</p>
        <button class="delete-btn">Delete</button>
        <button class="toggle-read">Read Status</button>
    `;

    listContainer.appendChild(bookDiv);


    //step 5

    const deleteBtn = bookDiv.querySelector(".delete-btn");


        deleteBtn.addEventListener("click", () => {

            console.log('delete')


            myLibrary = myLibrary.filter(libraryBook => 
                libraryBook.id !== book.id
            );

            renderLibrary();

        })


        // step 6

    const toggleReadBtn = bookDiv.querySelector(".toggle-read");

    
    toggleReadBtn.addEventListener("click", () => {

        console.log("toggle")
        book.toggleRead();
        renderLibrary();
    })

    });
    

}

// step 4
const btn = document.getElementById("new-book-btn");

btn.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("book-form").style.display = "block";
})

const form = document.getElementById("book-form");


// validation edits

const errorMessage = document.getElementById('error-message')

form.addEventListener("submit", (event) => {
    event.preventDefault();


    const author = document.getElementById("author").value;

    errorMessage.textContent = '';

    const minLength = 1;

    if(author.length < minLength){
        event.preventDefault();

        errorMessage.textContent = "the author name must be filled!";

        return;
    }


    const title = document.getElementById("title").value;

    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;




    addBookToLibrary(title, author, pages, read);
    renderLibrary();

  })

// step 5 



