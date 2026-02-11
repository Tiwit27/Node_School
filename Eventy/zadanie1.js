const events = require("events");

const eventEmmiter = new events.EventEmitter();

const eventName = "event_name";

function eventCode()
{
    console.log(`Wywołanie funkcji obsługi zdarzenia ${eventName}`);
}

eventEmmiter.addListener(
    eventName,
    eventCode
)

console.log(eventEmmiter.eventNames());

eventEmmiter.emit(eventName);