const file_system = require("fs");
const path = require("path");
// *By default they are asynchronous bcz it take a callback function as well as synchronous it does not require callback function
//todo: Create Folder
// It will create the folder name as test
// ?It takes 3 parameters like current director, {}=>Optional (called option), callback function
// file_system.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("Folder created");
// });
// ! By Arrow Function(If we have only on parameter like in this case it is 'err' so we dont need to use parenthesis()
// file_system.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });
// todo:Create and Write to file
// ? It will first create the file and then write the Hello Ammar text in the file
// file_system.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello Ammar 1",
//   {},
//   (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
//   }
// );
// ! IF I write this one more time with changed text that i want to write in the file then it will not append with the previous text it will over write the text
// file_system.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello Ammar 2",
//   {},
//   (err) => {
//     if (err) throw err;
//     console.log("File Overwrite successfully");
//   }
// );
// todo: Append to the same file
// ! It will append as well as create and write to the file
// file_system.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello Ammar 2",
//   {},
//   (err) => {
//     if (err) throw err;
//     console.log("File Overwrite successfully");
//     file_system.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I Love Node.js",
//       {},
//       (err) => {
//         if (err) throw err;
//         console.log("Append successfully");
//       }
//     );
//   }
// );
// todo: Read From the file
// ? utf8 is used to see the data in a formatted way if we donot write the utf8 then it will give us raw buffer
// file_system.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// ); //* OUTPUT: File written successfully
// *Hello Ammar 1
// todo: Rename the file
// ! It takes two joins first to locate and second to rename the located file
// ! If the file is not available then it will first create the file with name of the second file
file_system.rename(
  path.join(__dirname, "/test", "helloAmmar.txt"),
  path.join(__dirname, "/test", "hello993.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed......");
  }
);
