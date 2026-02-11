const events = require("events");

function eventHandler1()
{
    console.log("Komunikat z function eventHandler1() ...");
}

const eventHandler2 = function()
{
    console.log("Komunikat z function eventHandler2() ...");
}

const eventHandler3 = (data) =>
{
    console.log("Komunikat z function eventHandler3() ...");
    console.log('data:', data);
}

const eventEmmiter = new events.EventEmitter();
const eventName = "event_name";

eventEmmiter.on(eventName, eventHandler1);
eventEmmiter.on(eventName, eventHandler2);
eventEmmiter.on(eventName, eventHandler3);
eventEmmiter.on(eventName, eventHandler1);

console.log(
    "EventEmmiter.listener(eventName): ", eventEmmiter.listeners(eventName)
);

eventEmmiter.off(eventName, eventHandler3);

console.log(
    "EventEmmiter.listener(eventName): ", eventEmmiter.listeners(eventName)
);