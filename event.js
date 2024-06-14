const EventEmitter = require ('node:events');
var myevent = new EventEmitter();
myevent.on("flash_ran", ()=>console.log("flash started running!"));

myevent.emit("flashran");