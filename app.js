let myLibrary = [
  ["1984", "George Orwell", 328, true],
  ["Fahrenheit 451", "Ray Bradbury", 249, false],
  ["Catch 22", "Joseph Heller", 463, true],
];

const shelf = document.querySelector(".shelf");
const addButton = document.querySelector(".new-book");

addButton.addEventListener("click", () => {
  const newBook = document.createElement("div");
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(userInput) {
  myLibrary = myLibrary.concat(userInput);
}

function display() {
  for (i = 0; i < myLibrary.length; i++) {
    const books = document.createElement("div");
    books.classList.add("books");
    books.innerText = myLibrary[i];
    shelf.appendChild(books);
  }
}
display();
