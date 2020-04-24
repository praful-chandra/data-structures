insert = function (nums) {
  for (
    let firstUnSortedIndex = 1;
    firstUnSortedIndex < nums.length;
    firstUnSortedIndex++
  ) {
    let element = nums[firstUnSortedIndex];

    let i = firstUnSortedIndex;

    for (i; i > 0 && nums[i - 1] > element; i--) {
      nums[i] = nums[i - 1];
    }
    //----------------OR-----------------
    // while(i > 0){

    //     if(nums[i-1] > element)
    //         nums[i] = nums[i-1];
    //     else
    //         break;
    //         i--;
    // }

    nums[i] = element;
  }

  console.log(nums);
};

insert([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

[7, 44, 44, 99, 1, 5, 63, 87, 283, 4, 0];
