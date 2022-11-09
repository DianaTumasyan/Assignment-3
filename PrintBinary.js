function PrintBinary (number) {
    let array = [];
    let result = " ";

    while (number >= 2) {

        array.push(number % 2);
        number= number - ((number%2) + Math.floor(number/2));
    }
    array.push(1)
    
    for (let i = array.length-1; i >=0; i--) {
        result += array[i];
    }
    
    return result;
}

console.log(PrintBinary (20));
console.log(PrintBinary (13));
