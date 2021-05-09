const num=1;
const num2=2;
const result = num+ num2;

function add(num1 , num2) {
    return num1 + num2;
}

function divide(num1, num2){
    return num1/num2;
}

function suprise(callback) {
    const result = callback(2,3); //add (2,3);
    console.log(result);
}

suprise(divide);






