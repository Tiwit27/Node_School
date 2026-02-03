let x = 0
function odliczanie()
{
    if(x==10)
    {
        clearInterval(this);
    }
    console.log(x++);
}

const timer = setInterval(
    odliczanie,
    1000
)