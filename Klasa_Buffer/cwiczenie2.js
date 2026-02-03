const buffer1 = buffer1.alloc(16);
buffer1.write("Pontiac Firebird");
const buffer2 = buffer1.alloc(16);
buffer2.write(buffer1.toString());

//
const buffer4a = new buffer1("Ford");
const buffer4b = new buffer1(" ");
const buffer4c = new buffer1("Mustang");
const buffer4 = buffer4a.concat([buffer4a, buffer4b, buffer4c]);
