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

// const title = document.querySelector("#title").value;
// const author = document.querySelector("#author").value;
// const pages = document.querySelector("#pages").value;
// const read = document.querySelector("#read").value;

// const addBook = document.querySelector("#addBook");
// const bookRequest = document.querySelector("#bookRequest");
// const cancelBtn = document.querySelector(".cancel");
// const confirmBtn = document.querySelector("#confirmBtn");

// addBook.addEventListener("click", () => {
//     bookRequest.showModal();
// })

// cancelBtn.addEventListener("click", () => {
//     bookRequest.close();
// })

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook); // store into the array
    return newBook;
}

// confirmBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     // addBookToLibrary(title, author, pages, read);
//     bookRequest.close();
//     // addBookToLibrary(bookRequest.value)
    
// })

const mainDiv = document.querySelector("#main");

const cards = document.createElement("div");
cards.classList.add("card");
cards.textContent = "Test";

mainDiv.appendChild(cards);

function libraryDisplay(array) {
    // display on "cards" from arrays
    array.forEach(card => {
        card = document.createElement("div");
        card.classList.add("card");
        card.textContent =  Object.values(card);
    });

}
