

const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}



function addBookToLibrary(title, author, pages, read, id) {
    
    const book = new Book(title, author, pages, read, id)
    myLibrary.push(book)

}

addBookToLibrary("The Count of Monte Cristo", "Alexander Dumas", 1200, true);
addBookToLibrary("Wounded by Love", "Saint Porphyrios", 200, true);


console.log(myLibrary)


// step 3

function renderLibrary(){




    const listContainer = document.getElementById('book-list')

    myLibrary.forEach(book => {

    const bookDiv = document.createElement('div');
    bookDiv.className = "book-card"

    bookDiv.innerHTML = `
        <h1>${book.title}</h1>
        <h3>Author: ${book.author}</h3>
        <h3>Pages: ${book.pages}</h3>
        <h3>Read before?: ${book.read}</h3>
        <p>${book.id}</p>
    `;

    listContainer.appendChild(bookDiv);

    });

}

// step 4
const btn = document.getElementById("new-book-btn");

btn.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("book-form").style.display = "block";
})

const form = document.getElementById("book-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  })

const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const read = document.getElementById("read").checked;

addBookToLibrary(title, author, pages, read);
renderLibrary();
