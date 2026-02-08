const url = require("url");

const myUrl = new URL("http://localhost:3000/login?user=admin&role=teacher");

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("role")); //important
console.log(myUrl.protocol);
console.log(myUrl.port);
console.log(myUrl.search);
console.log(myUrl.toString());
console.log(myUrl.href);











// myUrl.href = "https://google.com";
// console.log(myUrl.href);


