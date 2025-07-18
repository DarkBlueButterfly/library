const myLibrary = [];

class Book {
    constructor (title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

const form = document.querySelector("form");
const addBook = document.querySelector("#addBook");
const bookRequest = document.querySelector("#bookRequest"); //modal
const cancelBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector("#confirmBtn");

addBook.addEventListener("click", () => {
    bookRequest.showModal();
})

cancelBtn.addEventListener("click", () => {
    bookRequest.close();
})

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook); // store into the array
    return newBook;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let addLib = addBookToLibrary(title.value, author.value, pages.value, read.value)
    libraryDisplay(addLib)
    form.reset();
    bookRequest.close();
})

const mainDiv = document.querySelector("#main");

function libraryDisplay(addLib) {
    // display "cards" from arrays
    const cards = document.createElement("div");
    cards.classList.add("card");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle");
    cardTitle.textContent = title.value;

    const cardAuthor = document.createElement("div");
    cardAuthor.classList.add("cardAuthor");
    cardAuthor.textContent = `by ${author.value}`

    const cardPages = document.createElement("div");
    cardPages.classList.add("cardPages");
    cardPages.textContent = `${pages.value} pages`

    const cardRead = document.createElement("div");
    cardRead.classList.add("cardRead");
    if (read.checked === true) {
        cardRead.textContent = `Read`;
    } else {
        cardRead.textContent = `Not Read`;
    }

    // Delete button:
    const deleteBook = document.createElement("button");
    deleteBook.classList.add("delete");
    deleteBook.textContent = "Delete";

    deleteBook.addEventListener("click", () => {
        removeBook(addLib.id);
        cards.remove();
    })

    function removeBook(id) {
        let indexID = myLibrary.findIndex((book) => book.id === id)
        // console.log(`Index is ${id}`) //check
        myLibrary.splice(indexID, 1);
    }

    // Read toggle:
    const haveRead = document.createElement("button");
    haveRead.classList.add("haveRead");
    haveRead.textContent = "Read Status";

    haveRead.addEventListener("click", () => {
        if (cardRead.textContent === `Read`) {
            cardRead.textContent = `Not Read`;
        } else {
            cardRead.textContent = `Read`;
        }
    })

    mainDiv.appendChild(cards);
    cards.appendChild(cardTitle);
    cards.appendChild(cardAuthor);
    cards.appendChild(cardPages);
    cards.appendChild(cardRead);
    cards.appendChild(deleteBook);
    cards.appendChild(haveRead);
}
