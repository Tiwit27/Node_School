const events = require("events");

const eventEmmiter = new events.EventEmitter();
const eventName = "event_name";

eventEmmiter.on(eventName, function eventHandler(data)
{
    console.log(data);
})

eventEmmiter.on(eventName, function eventHandler2(data)
{
    console.log(data + 1);
})

eventEmmiter.on(eventName, function eventHandle3(data)
{
    console.log(data + 3);
})

eventEmmiter.once(
    eventName,
    function eventHandle4(data){
        console.log(data + 3)
    }
);

eventEmmiter.prependOnceListener(
    eventName,
    function eventHandle5(data)
    {
        console.log(data + 4);
    }
)

eventEmmiter.emit(eventName, 1);
console.log();
eventEmmiter.emit(eventName, 11);
console.log();
eventEmmiter.prependListener(eventName, function eventHandle6(data)
{
    console.log(data + 5)
});
eventEmmiter.emit(eventName, 101);