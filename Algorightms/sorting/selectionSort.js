let select = (nums) => {
  let minIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }

  console.log(nums);
};

select([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
