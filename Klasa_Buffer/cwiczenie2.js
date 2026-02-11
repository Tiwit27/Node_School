const buffer1 = Buffer.alloc(26);

buffer1.forEach((_, i, buf) => 
{ 
    buf[i] = i + 97; 
});

buffer1.forEach(item =>
{ 
    console.log(item); 
});

console.log("buffer1.toString() = ", buffer1.toString());

const buffer2 = Buffer.alloc(26);

buffer2.forEach((_, index, buf) => 
{ 
    buf[index] = index + 65; 
});

console.log("buffer2.toString() = ", buffer2.toString());
