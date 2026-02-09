const crypto=require("crypto");

// const password="myStrongPassword123";
// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log("Hashed Password:", hash);
// console.log("Original Password:", password);

// createHash("sha256")  → create hash engine
// update(password)      → put data into engine
// digest("hex")         → get final hashed result




//Generates cryptographically strong random values
// const token = crypto.randomBytes(16).toString("hex");
// console.log("Reset link:", token);




//Modern, secure password hashing
crypto.scrypt("password123", "salt", 64, (err, derivedKey) => {
  if (!err) {
    console.log("Derived Key:", derivedKey.toString("hex"));
  }
});


