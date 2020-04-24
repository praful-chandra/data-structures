let mergeSort = (nums) => {
  let len = nums.length;

  if (len === 1) {
    return nums;
  }

  let mid = Math.floor(len / 2);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

let merge = (left, right) => {
  let li = 0;
  let ri = 0;

  let result = [];

  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      result.push(left[li]);
      li++;
    } else {
      result.push(right[ri]);
      ri++;
    }
  }

  return result.concat(left.slice(li)).concat(right.slice(ri));
};

let merged = mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

console.log(merged);
