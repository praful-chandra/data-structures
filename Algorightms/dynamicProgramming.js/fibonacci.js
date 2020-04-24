let memoizedFibo = function(){
    let cache = {};
    return function fib(n){
        if(cache[n]){
            return cache[n];
        }
        if(n < 2){
            return n;
        }
       cache[n] =  fib(n-2) + fib(n-1)
       return cache[n];
    }

}

let fib = memoizedFibo();

console.log(fib(100));
  