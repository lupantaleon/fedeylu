function primos (x) {
    let primo = 0
    if (x === 2 || x === 1 || x === 3){
        return x + " es primo"
    }

    if(x % 2 == 0){
        return x + " es par"
    }

    for (let i = 3; i < x/2; i +=2) {
    if (x % i == 0 && primo == 0)
        {
        primo = primo + 1
        console.log(i, primo);
        return x + " no es primo, es multiplo de " + i;
        }

    }
    if(primo == 0){
    return x + " es primo"
    }
}

console.log(primos(3));
console.log(primos(4));
console.log(primos(5));
console.log(primos(7));
console.log(primos(113));
console.log(primos(144));
console.log(primos(449));
console.log(primos(1307));
console.log(primos(3527));
console.log(primos(5710));
console.log(primos(6569));
console.log(primos(7333));
console.log(primos(7753));