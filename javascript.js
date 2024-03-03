let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let bookEl = document.createElement("div");
    bookEl.classList.add("book-card");
    bookEl.innerHTML = `
    <div class="book-header">
      <h3 class="book-title">${book.title}</h3>
      <h5 class="book-author">by ${book.author}</h5>
    </div>
    <div class="book-body">
      <p>${book.pages} pages </p>
      <p class="book-status">${book.read ? "Read" : "Not Read Yet"}</p>
      <button class="remove-btn" onclick="removeBook(${index})">Remove</button>
      <button class="toggle-read-btn" onclick="toggleRead(${index})">Toggle Read</button>
    </div>  
    `;
    libraryEl.appendChild(bookEl);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary();
  });
