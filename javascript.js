const myLibrary = [];
const tableData = document.querySelector("tbody");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBook() {
  myLibrary.forEach((book) => {
    let tableRow = `<tr class="table-data"><td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td class="read">${book.read}</td><td><button class="delete">Delete</button></td></tr>`;
    tableData.insertAdjacentHTML("beforeend", tableRow);
  });
}

addBookToLibrary("Alchemist", "Paulo Coehlo", 345, "read");
addBookToLibrary("Rich Dad Poor Dad", "Robert", 280, "read");
addBookToLibrary("You're a Bad Ass", "Jen Sinero", 200, "read");

displayBook();

console.log(myLibrary);
