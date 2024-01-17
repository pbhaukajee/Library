const myLibrary = [];
const tableData = document.querySelector("tbody");
const newBook = document.querySelector(".add-book");
const form = document.querySelector("form");

//constructor
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

//add book data to library array
function addBookToLibrary(title, author, pages, haveRead = false) {
  let read = haveRead ? "✅" : "❌";
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

//function that display book from myLibrary array in the page
function displayBook() {
  //Clear existing table data
  tableData.innerHTML = "";

  myLibrary.forEach((book) => {
    let tableRow = `<tr class="table-data"><td class="title">${book.title}</td>
    <td class="author">${book.author}</td>
    <td class="pages">${book.pages}</td>
    <td><button class="read">${book.haveRead}</button></td><td><button class="delete">Delete</button></td></tr>`;
    tableData.insertAdjacentHTML("beforeend", tableRow);
  });
}

//extract form input info whwn "Add Book" button(submit button) is clicked and display the book info

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Extracts form input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const haveRead = document.getElementById("read").checked;

  // Adds book to library, displays books, and resets the form
  addBookToLibrary(title, author, pages, haveRead);
  displayBook();
  form.reset();
});
