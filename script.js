

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// const book1 = new Book("The Count of Monte Cristo", "Alexander Dumas", 1200, true);

// const book2 = new Book("Wounded by Love", "Saint Porphyrios", 200, true);


function addBookToLibrary(title, author, pages, read) {
    
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)

}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

console.log(myLibrary)