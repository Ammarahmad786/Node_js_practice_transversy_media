const path = require("path");
// basename
// console.log(__filename); OUTPUT : /Users/ammarahmad/projects/Node transversy media/reference/path_demo.js
console.log(path.basename(__filename)); //OUTPUT : path_demo.js
// Directory name
console.log(path.dirname(__dirname)); //Output: /Users/ammarahmad/projects/Node transversy media
// File extension
console.log(path.extname(__filename)); // OUTPUT: .js
//Create path object

console.log(path.parse(__filename)); //OUTPUT: {
// root: '/',
//dir: '/Users/ammarahmad/projects/Node transversy media/reference',
// base: 'path_demo.js',
// ext: '.js',
//name: 'path_demo'
//}
// From the parse module we can access any property of the __filename object
// Like
console.log(path.parse(__filename).name); // OUTPUT : path_demo
// Concatenate paths or join paths
// IT is used to join urls
console.log(path.join(__dirname, "test", "hello.html"));//OUTPUT:/Users/ammarahmad/projects/Node transversy media/reference/test/hello.html

