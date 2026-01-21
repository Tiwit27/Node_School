function objetosc(a,b,c)
{
    return console.log(a*b*c);
}

function polePowierzchni(a,b,c)
{
    return console.log(2*(a*b) + 2*(a*c) + 2*(b*c));
}

function dlugoscKrawedzi(a,b,c)
{
    return console.log(4*(a+b+c));
}

setTimeout(objetosc, 2000, 5,5,5);
setTimeout(polePowierzchni, 3000, 5,5,5);
setTimeout(dlugoscKrawedzi, 4000, 5,5,5);