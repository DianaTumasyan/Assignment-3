function ReverseArray (arr) {
    
    new_array = [];
    for (let index = arr.length - 1; index >= 0; index --) {
        
        new_array.push(arr[index]);
}
    console.log(new_array);
}

let array = [2,4,5,6,4];

ReverseArray (array);
