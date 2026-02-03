const callback = (liczba) => {
    wb = (liczba >= 0) ? liczba : -liczba;
    return console.log(wb);
}

function sync(){
    for(let i = 1; i <= 10; i++)
    {
        console.log("i+1:", i+1);
    }
}

console.log("Komunikat z linii na początku skryptu...");
const timer = setImmediate(
    callback,
    -1
);
sync();
console.log("Komunikat z linii na końcu skryptu...");