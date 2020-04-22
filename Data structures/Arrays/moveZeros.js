// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

//* Brute Force
// moveZeros = nums =>{
//     for(let i =0 ; i<nums.length;i++){

//        for(let k = i+1 ; k<nums.length;k++){
//         if(nums[i] === 0){
//             for(let j = i+1 ; j< nums.length; j++){
//                 let temp = nums[j];
//                 nums[j] = nums[j-1];
//                 nums[j-1] = temp;
//             }
//             nums[nums.length-1] =0;
//         }
//        }
//     }

//     console.log(nums);

// }

//* Optimal Solution
moveZeros1 = (nums) => {

    let index = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
                nums[index] = nums[i];
                index++;
        }
    }

    for(let i = index ; i <nums.length;i++){
        nums[i] = 0;
    }
 
    console.log(nums);
    

  }

//*ANother solution

moveZeros = nums =>{
    let n = nums.length;
    
    let numZeros = 0;
    for(let i = 0; i<n ;i++){
        if(nums[i] === 0) numZeros++;
        
    }
    
    let ans= [];
    for(let i=0 ;i<n;i++){
        if(nums[i] !== 0) ans.push(nums[i]);
    }
    
    while(numZeros > 0){
        ans.push(0);
        numZeros--;
    }
    
    console.log(ans);
    
}

moveZeros1([0, 1, 0, 3, 12]);
moveZeros1([0,0,1]);
