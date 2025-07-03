const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return `${this.title} by ${this.author}, `+ this.pages + `, ` + this.read;
    // }
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "true");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

const form = document.querySelector("form");
const addBook = document.querySelector("#addBook");
const bookRequest = document.querySelector("#bookRequest");
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

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // addBookToLibrary(title, author, pages, read);
    // bookRequest.close();
    addBookToLibrary(title.value, author.value, pages.value, read.value)
    libraryDisplay()
    form.reset();
    bookRequest.close();
})

const mainDiv = document.querySelector("#main");

// const cards = document.createElement("div");
// cards.classList.add("card");
// // cards.textContent = "Test"; 
// const cardTitle = document.createElement("div");
// cardTitle.classList.add("cardTitle");
// cardTitle.textContent = `Title: `+ title.value;
// const cardAuthor = document.createElement("div");
// cardAuthor.classList.add("cardAuthor");
// cardAuthor.textContent = `by ${author.value}`
// const cardPages = document.createElement("div");
// cardPages.classList.add("cardPages");
// cardPages.textContent = `${pages.value} pages`
// const cardRead = document.createElement("div");
// cardRead.classList.add("cardRead");
// cardRead.textContent = `Read? `

// mainDiv.appendChild(cards);
// cards.appendChild(cardTitle);
// cards.appendChild(cardAuthor);
// cards.appendChild(cardPages);
// cards.appendChild(cardRead);

function libraryDisplay() {
    // display on "cards" from arrays
    // array.forEach(card => {
    //     card = document.createElement("div");
    //     card.classList.add("card");
    //     card.textContent =  Object.values(card);
    // });
    // for (let book of myLibrary) {
        // console.log("Title: " + book.title + " Author: " + book.author) //Test
        // cards = document.createElement("div");
        // cards.textContent = "Title: " + book.title + ` Author: ` + book.author;
        const cards = document.createElement("div");
        cards.classList.add("card");
        // cards.textContent = "Test"; 
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
        cardRead.textContent = `Read? `

        mainDiv.appendChild(cards);
        cards.appendChild(cardTitle);
        cards.appendChild(cardAuthor);
        cards.appendChild(cardPages);
        cards.appendChild(cardRead);
    // }

}
