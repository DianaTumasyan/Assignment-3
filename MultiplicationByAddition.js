function MultByAdd (num1, num2){
    let result = 0;
    let fakeMult = num2;
    while (fakeMult != 0) {
        result = result + num1;
        fakeMult --;
    }
console.log (result)
}

MultByAdd (-5, 4);
MultByAdd (5, 4);
MultByAdd (0, 4);
