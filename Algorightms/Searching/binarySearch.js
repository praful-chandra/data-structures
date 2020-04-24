let nums = [5,25,4,8,-4,5,-7,63,99];

let binarySearch = (nums, key)=>{

    let low = 0;
    let high = nums.length;

        while(low < high){

            let mid = Math.floor((low + high)/2);            
            if(key > nums[mid]){
                low = mid+1;
            }else if(key < nums[mid]){
                high = mid -1;
            }else{
                return nums[mid];
            }

        }

        return null;

    


}

console.log((binarySearch(nums,99)));
console.log((binarySearch(nums,50)));
