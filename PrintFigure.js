function printNtimes(n){
    
    let currentLine = 1;
    let text = "+" ;
    while (currentLine <= n){
        console.log(text.repeat(n))
        currentLine ++;
    }    
    
}

printNtimes(7);
