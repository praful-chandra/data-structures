invoke = function (count){
    debugger;
    if(count > 3){
        return count;
    }
    return invoke(++count);
}

console.log(invoke(0));


