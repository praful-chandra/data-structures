let bubble = nums =>{

    for(let i in nums){

        for(j = 0 ; j <nums.length-1 ;j++){
                if(nums[j] > nums[j+1]){
                    let temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                }
        }

    }

    console.log(nums);
    

}

bubble([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])
