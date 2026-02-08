//Functions return Promises

function getBook() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Math Book");
    }, 2000);
  });
}

function getAuthor(book) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Author of " + book + " is John Doe");
    }, 2000);
  });
}

function getPublisher(author) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Publisher of " + author + " is ABC Publishing");
    }, 2000);
  });
}

// Step 2: Promise chaining (NO callback hell)

getBook()
  .then((book) => {
    console.log(book);
    return getAuthor(book);
  })
  .then((author) => {
    console.log(author);
    return getPublisher(author);
  })
  .then((publisher) => {
    console.log(publisher);
  })
  .catch((error) => {
    console.log("Error:", error);
  }).finally(() => {
    console.log("All operations completed");
  });
