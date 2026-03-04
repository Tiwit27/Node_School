const EventEmitter = require("events");
const { isNumberObject } = require("util/types");

class ControlVariable extends EventEmitter {
    constructor(endNumber)
    {
        super();
        let current = this;
        setImmediate(() =>  {
            if(endNumber <= 0)
            {
                current.emit("error", new Error("Argument musi być większy od 0!"))
            }
            let i = 1;
            while(i <= endNumber){
                current.emit("beforeEvent", i);
                console.log("Wykonanie operacji: wynik = " + (i*i));
                current.emit("afterEvent", i);
                i++;
                console.log();
            }
        });
        return this;
    }
}

const cV = new ControlVariable(5);

cV.on("error", (err) => {
    console.log("Uwaga, błąd!", err);
})

cV.on("beforeEvent", function(data){
    console.log("Przed operacją nr " + data + " ...")
})

cV.on("afterEvent", function(data){
    console.log("Przed operacją nr " + data + " ...")
})