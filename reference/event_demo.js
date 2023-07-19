const EventEmitter = require("events");
// todo: Create class
class MyEmitter extends EventEmitter {}
// todo: Init object
const myEmitter = new MyEmitter();
// todo: Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));
// todo: Init event
myEmitter.emit("event");
//!OUTPUT:Event Fired!
