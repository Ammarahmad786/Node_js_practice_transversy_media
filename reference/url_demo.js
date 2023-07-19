const url = require("url");
// *This is made by me as dummy text url
const myurl = new URL("https://mywebsite.com/hellw.html?id=10&status=active");
// todo: Serialized URL
console.log(myurl.href); //! OUTPUT: https://mywebsite.com/hellw.html?id=10&status=active
// ? Same thing can be done by toString function
console.log(myurl.toString()); //! OUTPUT: https://mywebsite.com/hellw.html?id=10&status=active
// todo: Host (Root domain)=> IT get the port onwhich the app is running
console.log(myurl.host); //!OUTPUT: mywebsite.com
// todo:Hostname(does not get port)
console.log(myurl.hostname); //!OUTPUT: mywebsite.com
// todo: Pathname
console.log(myurl.pathname); //!OUTPUT: /hellw.html
// todo: Serialized query
console.log(myurl.search); //!OUTPUT: ?id=10&status=active
// todo: Params objects
console.log(myurl.searchParams); //!OUTPUT: URLSearchParams { 'id' => '10', 'status' => 'active' }
//? It gives information about the params or url
// todo:Add params
myurl.searchParams.append("abc", "123");
console.log(myurl.searchParams); //!OUTPUT: URLSearchParams { 'id' => '10', 'status' => 'active', 'abc' => '123' }
// ? IT will append the values that we want to be added in the params
// todo: Loop through the params
myurl.searchParams.forEach((value,name)=>{
    console.log(`${name}:${value}`)
}) //!OUTPUT:
//  *id:10
// * status:active
// *abc:123
// ? It is use to loop the params of url and extract the desire information from the params of the url

