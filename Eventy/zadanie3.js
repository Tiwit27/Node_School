const events = require("events");

const f1 = function()
{
    setTimeout(()=>{
        console.log("Komunikat z listenera asynchronicznego f1()");
    }, 10);
}

const f2 = function()
{
    setImmediate(()=>{
        console.log("Komunikat z listenera asynchroniczne f2()");
    });
}

const f3 = function()
{
    console.log("Komunikat z listenera synchronicznego f3()");
}

const eventName = "event_name";

const eventEmmiter = new events.EventEmitter();

eventEmmiter.on(eventName, f1);
eventEmmiter.on(eventName, f2);
eventEmmiter.on(eventName, f3);

console.log(eventEmmiter.listenerCount(eventName));
eventEmmiter.emit(eventName);