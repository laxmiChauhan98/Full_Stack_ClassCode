const url = require("url");
const myUrl = new URL("https://tech.kiet.edu/HRMS/mms/#/erp/dashboard");
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


