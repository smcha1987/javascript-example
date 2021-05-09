

// false 0 , -0, null, '', undefined
// true: -1, 'hello', [] 배열은 object 이기 때문에

let num = 9; // undefined; 

let obj = {
    name : 'ellie'
};

if(obj){
    console.log(obj.name);
}


if(num){
    console.log('true!');
}else {
    console.log('false');
}

num && console.log(num);
