//   //*Brute Force
//maxSubArr = (nums) => {
//   let Maxsum = Infinity * -1;

//   for (let i = 0; i < nums.length; i++) {
//     let currentMax = 0;

//     for (let j = i; j < nums.length; j++) {
//       // currentMax = 0;

//       currentMax += nums[j];

//       if (Maxsum < currentMax) Maxsum = currentMax;
//     }
//   }

//   console.log(Maxsum);
// };

//*Kadanes Algorithm

maxSubArr = (nums) => {
  let maxSum = Infinity * -1;
  let currentSum = 0;

  
  for(let i = 0; i < nums.length; i++) {
    let newSum = currentSum + nums[i];

    if (newSum < nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum = newSum;
    }
    
    if (maxSum < currentSum) maxSum = currentSum;

  }
    
  console.log(maxSum)
};

maxSubArr([-2, 2, 5, -11, 6]);

maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 5]);
