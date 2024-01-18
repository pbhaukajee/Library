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
function addBookToLibrary(title, author, pages, haveRead) {
  const read = haveRead ? "✅" : "❌";
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

  const deleteRow = document.querySelectorAll(".delete");
  deleteRow.forEach((button) => {
    button.addEventListener("click", function () {
      const rowIndex = button.dataset.index;
      remove(rowIndex);
    });
  });

  const readCheck = document.querySelectorAll(".read");
  readCheck.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.textContent === "✅") {
        element.textContent = "❌";
      } else if (element.textContent === "❌") {
        element.textContent = "✅";
      }
    });
  });
}

//extract form input info when "Add Book" button(submit button) is clicked and display the book info

form.addEventListener("submit", (e) => {
  //prevents from refreshing the page while submitting
  e.preventDefault();

  // Extracts form input values
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  // Adds book to library, displays books, and resets the form
  addBookToLibrary(title, author, pages, read);
  displayBook();
  form.reset();
});

//make a function to delete book
function remove(index) {
  myLibrary.splice(index, 1);
  displayBook();
}
