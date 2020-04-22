//* Iterative

let factorial = n =>{
    if(n < 2) return 1;
    let facto = 1;

    for(let i = n ; i > 0 ;i--){
        facto *= i;
    }

    return facto;
}

console.log(factorial(5));


//* Recursive

let factorialR = n =>{
    debugger;
    if(n == 1) return 1;

    return n * factorialR(n-1);

}

console.log(factorialR(5));
