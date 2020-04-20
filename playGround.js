var productExceptSelf = function(nums) {

    let n = nums.length;

    let left_product = [];

    left_product[0] = 1;


    for(let i = 1;i<n;i++){
        left_product[i] = nums[i-1] * left_product[i-1];
    }

    
    let right_product = 1;

    for(let i = n-1 ; i >=0 ;i--){
        left_product[i] = left_product[i] * right_product;
        right_product *=nums[i];
    }


    console.log(left_product);
    
    
};


productExceptSelf([1,2,3,4])
