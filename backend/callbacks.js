//without callback 

// function getBook() {
//   setTimeout(() => {
//     return "Math Book";
//   }, 2000);
// }

// let book = getBook();
// console.log(book);


//using callback to get the book 

// function getBook(callback) {
//   setTimeout(() => {
//     callback("Math Book");
//   }, 2000);
// }

// getBook(function(book) {
//   console.log(book);
// });


// callback hell example

function getBook(callback) {
  setTimeout(() => {
    callback("Math Book");
  }, 2000);
}  


function getAuthor(book, callback) {
  setTimeout(() => {
    callback("Author of " + book + " is John Doe");
  }, 3000);
}

function getPublisher(author, callback) {
  setTimeout(() => {
    callback("Publisher of " + author + " is ABC Publishing");
  }, 5000);
}



getBook(function(book) {
  console.log(book);
  getAuthor(book, function(author) {       
    console.log(author);
    getPublisher(author, function(publisher) {
      console.log(publisher);
    });
  });
});

