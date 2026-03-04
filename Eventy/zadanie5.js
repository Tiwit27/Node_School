const EventEmitter = require("events").EventEmitter;
const { Console } = require("console");
const util = require("util");

function ControlVariable(endNumber)
{
    try
    {
        if(endNumber <= 0)
        {
            throw new Error("Argument nie może być mniejszy lub równy 0");
        }
        let current = this;
        setImmediate(
            function() {
                let i = 1;
                while(i <= endNumber){
                    current.emit("beforeEvent", i);
                    console.log("Wykonanie operacji: wynik = " + (i*i));
                    current.emit("afterEvent", i);
                    i++;
                    console.log();
                }
            }
        );
        return this;
    }
    catch(error)
    {
        console.log(error.message);
        return false;
    }
}

util.inherits(ControlVariable, EventEmitter);

const cV = new ControlVariable(0);

cV.on("beforeEvent", function(data){
    console.log("Przed operacją nr " + data + " ...")
})

cV.on("afterEvent", function(data){
    console.log("Przed operacją nr " + data + " ...")
})