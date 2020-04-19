// Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


rotate = (nums,k)=>{

    if(nums.length < 2 || nums.length == k){
        return;
    }

    let RotateNums = [];
let n = nums.length;


while(nums.length < k){
    k -= nums.length  
}



for(let i = n-k;i<n;i++ ){
    RotateNums.push(nums[i])
}

let remnain = (n-k);

for(let i =0 ; i<remnain;i++){
    RotateNums.push(nums[i])
}
    
    for(i in nums){
        nums[i] = RotateNums[i];
    }
    

console.log(nums);


}

//rotate([1,2,3,4,5,6,7],3)

rotate([1,2],3)