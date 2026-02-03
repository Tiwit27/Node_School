console.warn("Zaraz nastąpią obliczenie matematyczne, w których mogą pojawić się błędy");

const a = 0;
const b = 8;


if(a <= 0 || b <= 0)
{
    const error = new Error("Wartości nie mogą być mniejsze lub równe 0")
    console.error(error);
}
console.info("Pole: " + (a*b));
console.info("Obwód: " + ((2*a)+(2*b)));