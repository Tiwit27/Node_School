const buffer1 = Buffer.alloc(8);
buffer1.write(
    "Jan Kowalski",
    0,
    3,
    "utf8"
)

const buffer2 = Buffer.from("Jan Kowalski", "utf-8")

const buffer3 = Buffer.from([1,2,3,4,5,6,7,8,9,10]);

console.log("Buffer1 zajmowany rozmiar: " + buffer1.length + " realny rozmiar: " + buffer1.toString().length);
console.log("Buffer2 size: " + buffer2.length + " realny rozmiar: " + buffer2.toString().length);
console.log("Buffer3 size: " + buffer3.length + " realny rozmiar: " + buffer3.toJSON().data.length);