let myLibrary = [
  ["1984", "George Orwell", 328, true],
  ["Fahrenheit 451", "Ray Bradbury", 249, false],
  ["Catch 22", "Joseph Heller", 463, true],
];

const container = document.querySelector(".container");
const addButton = document.querySelector(".new-book");
const shelf = document.querySelector(".shelf");

addButton.addEventListener("click", () => {
  const form = document.createElement("div");
  form.classList.add("form");
  form.setAttribute("method", "post");
  const newTitle = document.createElement("input");
  newTitle.setAttribute("type", "text");
  newTitle.setAttribute("placeholder", "Title");
  const newAuthor = document.createElement("input");
  newAuthor.setAttribute("type", "text");
  newAuthor.setAttribute("placeholder", "Author");
  const newPages = document.createElement("input");
  newPages.setAttribute("type", "text");
  newPages.setAttribute("placeholder", "Number of Pages");
  const newRead = document.createElement("label");
  newRead.innerText = "Have read?";
  const yes = document.createElement("input");
  yes.setAttribute("type", "checkbox");
  newRead.appendChild(yes);
  const submitButton = document.createElement("button");
  submitButton.classList.add("submit-button");
  submitButton.innerText = "Add";
  form.appendChild(newTitle);
  form.appendChild(newAuthor);
  form.appendChild(newPages);
  form.appendChild(newRead);
  form.appendChild(submitButton);
  shelf.appendChild(form);

  submitButton.addEventListener("click", () => {
    let newArr = [[]];
    newArr[0].push(
      newTitle.value,
      newAuthor.value,
      newPages.value,
      yes.checked
    );
    myLibrary = myLibrary.concat(newArr);
    clearScreen();
    display();
  });
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

function clearScreen() {
  while (shelf.firstChild) {
    shelf.removeChild(shelf.lastChild);
  }
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
