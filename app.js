class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const container = document.querySelector(".container");
const addButton = document.querySelector(".new-book");
const shelf = document.querySelector(".shelf");

class UI {
  static displayBooks() {
    const myLibrary = [
      { title: "1984", author: "George Orwell", pages: 328, read: true },
      {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        pages: 249,
        read: false,
      },
      { title: "Catch 22", author: "Joseph Heller", pages: 463, read: true },
    ];

    const books = myLibrary;

    books.forEach((book) => UI.addBookToShelf(book));
  }

  static addBookToShelf(book) {
    const card = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const deleteCard = document.createElement("p");
    deleteCard.innerText = "X";
    deleteCard.classList.add("deleteBtn");
    card.classList.add("books");
    bookTitle.innerText = book.title;
    bookAuthor.innerText = `by ${book.author}`;
    bookPages.innerText = `Number of pages: ${book.pages}`;
    bookStatus.innerText = `Have read? ${book.read ? "Yes" : "No"}`;
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(deleteCard);
    shelf.appendChild(card);
  }

  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector("#myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const book = new Book(title, author, pages, read);

  UI.addBookToShelf(book);
  UI.clearForm();
  closeForm();
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
