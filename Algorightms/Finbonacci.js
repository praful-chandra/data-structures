
//* 1,1,2,3,5,8,13,21,34,55



//* Factorial Iterative

fibonacci = (n) => {
    if (n < 2) {
      return 1;
    }
  
    let first = 1;
    let second = 1;
  
    let fibo = 0;
  
    for (i = 3; i <= n; i++) {
      fibo = first + second;
      first = second;
      second = fibo;
    }
  
    return fibo;  
  };
  
//   console.log(fibonacci(100));
  
  //* Factorial Recursive
  
  fibonacciRecursive=(n)=>{
  
      if(n === 0 ) return 0;
      if(n === 1 ){
          return 1;
      }
  
      return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
  
  }
  
  console.log(fibonacciRecursive(10));
