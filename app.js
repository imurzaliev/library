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
    // const myLibrary = [
    //   { title: "1984", author: "George Orwell", pages: 328, read: true },
    //   {
    //     title: "Fahrenheit 451",
    //     author: "Ray Bradbury",
    //     pages: 249,
    //     read: false,
    //   },
    //   { title: "Catch 22", author: "Joseph Heller", pages: 463, read: true },
    // ];

    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToShelf(book));
  }

  static addBookToShelf(book) {
    const card = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const buttonsOnCard = document.createElement("div");
    const deleteCard = document.createElement("button");
    const doneButton = document.createElement("button");

    buttonsOnCard.classList.add("buttons-on-card");
    doneButton.classList.add("done");
    deleteCard.classList.add("deleteBtn");
    card.classList.add("books");

    doneButton.innerText = "Done";
    deleteCard.innerText = "X";
    bookTitle.innerText = book.title;
    bookAuthor.innerText = `by ${book.author}`;
    bookPages.innerText = `Number of pages: ${book.pages}`;

    doneButton.addEventListener("click", () => {
      book.read = !book.read;
      if (book.read) {
        bookStatus.innerText = "Read";
      } else {
        bookStatus.innerText = "Not read";
      }
    });

    if (book.read) {
      bookStatus.innerText = "Read";
    } else {
      bookStatus.innerText = "Not read";
    }

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    buttonsOnCard.appendChild(deleteCard);
    buttonsOnCard.appendChild(doneButton);
    card.appendChild(buttonsOnCard);
    shelf.appendChild(card);
  }

  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
  }

  static deleteBook(el) {
    if (el.classList.contains("deleteBtn")) {
      el.parentElement.parentElement.remove();
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      return (books = []);
    } else {
      return (books = JSON.parse(localStorage.getItem("books")));
    }
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        return books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
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

  Store.addBook(book);

  UI.clearForm();
  closeForm();
});

shelf.addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(
    e.target.parentElement.parentElement.firstElementChild.innerText
  );
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
