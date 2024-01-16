const myLibrary = [];

function Book(title, author, pages, Read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.Read = Read;
}

function addBookToLibrary() {
  const title = "Alchemist";
  const author = "Paulo Coehlo";
  const pages = 200;
  const Read = "yes";

  const newBook = new Book(title, author, pages, Read);
  myLibrary.push(newBook);
}

addBookToLibrary();

console.log(myLibrary);
