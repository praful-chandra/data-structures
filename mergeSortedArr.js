function mergSortedArr(arr1,arr2){

  let  i =0; 
  let j = 0;

    sortedArr = [];

    while(i<arr1.length && j<arr2.length){
        if( arr1[i] < arr2[j]){
            sortedArr.push(arr1[i]);
            i++;
        }else{
            sortedArr.push(arr2[j]);
            j++
        }
    }

    while(i<arr1.length){
        sortedArr.push(arr1[i]);
        i++
    }

    while(j<arr2.length){
        sortedArr.push(arr2[j]);
        j++
    }
    

    console.log(sortedArr)
    

}


mergSortedArr([0,3,4,31],[4,6,30])