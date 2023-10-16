let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.id = myLibrary.length + 1
    }
    changeReadStatus() {
        this.read = !this.read;
    }
}

/*function Book(title, author, pages, read) {
    let readText = true;
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = myLibrary.length + 1
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}*/

function toggleRead(index) {
    myLibrary[index].changeReadStatus();
    renderBook();
}

let theHobbit = new Book("The Hobbit", "Tolkien", 295, true);
let clarissaOakes = new Book("Clarissa Oakes", "Patrick O'Brian", 256, true);
let theWineDarkSea = new Book("The Wine Dark Sea", "Patrick O'Brian", 261, true);
let iq84 = new Book("IQ 84", "Haruki Murakami", 1318, false);

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd)
  }

  function submitNewBookForm () {
    let title = document.getElementById("title-input").value;
    let author = document.getElementById("author-input").value;
    let pages = document.getElementById("pages-input").value;
    let read = document.getElementById("read-input").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    event.preventDefault();
    renderBook();
    hideForm();
    clearForm();
};

/*addBookToLibrary(theHobbit);
addBookToLibrary(clarissaOakes)
addBookToLibrary(theWineDarkSea)*/
addBookToLibrary(iq84)


function renderBook() {
    let bookList = document.getElementById('booklist');
    bookList.innerHTML="";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.classList.add('bookCard');
        bookEl.innerHTML = `<h1>${book.title}</h1>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Read" : "Not yet read"}</p>
            <div>
                <button class="remove-book" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read" onclick="toggleRead(${i})">Toggle Read</button>
            </div>`;
        bookList.appendChild(bookEl);
    }
}

function showForm () {
    document.getElementById('new-book-form').style.display = 'block';
}

function hideForm () {
    document.getElementById('new-book-form').style.display = 'none';
}

function clearForm () {
    document.getElementById('new-book-form').reset();
}

function removeBook (id) {
    myLibrary.splice(id, 1);
    renderBook();
}


renderBook();
