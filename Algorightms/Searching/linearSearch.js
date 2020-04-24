let nums = [5,25,4,8,-4,5,-7,63,99];

let linearSearch = (nums,key)=>{

    for(i in nums){
        if(nums[i] === key)
            return nums[i];
    }
return null;
}

console.log((linearSearch(nums,5)));
console.log((linearSearch(nums,50)));
