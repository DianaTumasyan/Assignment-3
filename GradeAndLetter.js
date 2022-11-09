function findGrade (grade){
    let letterGrade = " "
    
if (grade >= 97 && grade <=100) {
    letterGrade = "A+";
    console.log ('Your grade is ' + grade + ' which corresponds to A+.');
}
else if (grade >= 93 && grade <= 96) {
    letterGrade = "A";
    console.log ('Your grade is ' + grade + ' which corresponds to A.');
}
else if (grade >= 90 && grade <= 92) {
    letterGrade = "A-";
     console.log ('Your grade is ' + grade + ' which corresponds to A-.');
}
else if (grade >= 87 && grade <= 89) {
    letterGrade = "B+";
    console.log ('Your grade is ' + grade + ' which corresponds to B+.');
}
else if (grade >= 83 && grade <= 86) {
    letterGrade = "B";
    console.log ('Your grade is ' + grade + ' which corresponds to B.');
}
else if (grade >= 80 && grade <= 82) {
    letterGrade = "B-";
    console.log ('Your grade is ' + grade + ' which corresponds to B-.');
}
else if (grade >= 77 && grade <= 79) {
    letterGrade = "C+";
    console.log ('Your grade is ' + grade + ' which corresponds to C+.');
}
else if (grade >= 73 && grade <= 76) {
    letterGrade = "C";
    console.log ('Your grade is ' + grade + ' which corresponds to C.');
}
else if (grade >= 70 && grade <= 72) {
    letterGrade = "C-";
    console.log ('Your grade is ' + grade + ' which corresponds to C-.');
}
else if (grade >= 67 && grade <= 69) {
    letterGrade = "D+";
     console.log ('Your grade is ' + grade + ' which corresponds to D+.');
}
else if (grade >= 63 && grade <= 66) {
    letterGrade = "D";
    console.log ('Your grade is ' + grade + ' which corresponds to D.');
}
else if (grade >= 60 && grade <= 62) {
    letterGrade = "D-";
    console.log ('Your grade is ' + grade + ' which corresponds to D-.');
} 
else {
    letterGrade = "F";
    console.log ('Your grade is ' + grade + ' which corresponds to F.');
}
    switch (letterGrade){
        case 'A+':   
            console.log ('You passed!');
            break;
        case 'A':
            console.log ('You passed!');
            break;
        case 'A-':
            console.log ('You passed!');
            break;
        case 'B+':
            console.log ('You passed!');
            break;
        case 'B':
            console.log ('You passed!');
            break;
        case 'B-':
            console.log ('You passed!');
            break;
        case 'C+':
            console.log ('You passed!');
            break;
        case 'C':
            console.log ('You passed!');
            break;
        case 'C-':
            console.log ('You passed!');
            break;
        default:
            console.log ('You failed!');
    }
}

findGrade (99);
findGrade (35);
findGrade (100);
findGrade (0);
