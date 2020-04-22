// function diagonalDifference(arr,n) {
//     //  Write your code here
//       let R2L = 0;
//       let L2R = 0;

//       let x = 0;
//       let y = 2;
//       for(let i in arr){
//           L2R += arr[i][i];
//           R2L += arr[x][y];
//           console.log(x ," " ,y)
//           x++;
//           y--;

//         }

//       let absSum = Math.abs(R2L - L2R);
//       return absSum;

//   }

//   diagonalDifference([
//       [6 ,6 ,7 ,-10 ,9 ,-3, 8 ,9 ,-1],
//       [9 ,7 ,-10 ,6 ,4, 1 ,6, 1, 1],
//       [-1, -2 ,4 ,-6, 1, -4, -6 ,3 ,9],
//       [-8, 7, 6, -1, -6, -6 ,6, -7, 2],
//       [-10 ,-4, 9 ,1, ,-7 ,8 ,-5, 3 ,-5],
//       [-8 ,-3, -4 ,2 ,-3 ,7 ,-5, 1, -5],
//       [-2, -7, -4 ,8 ,3 ,-1 ,8 ,2 ,3],
//       [-3 ,4, 6 ,-7, -7 ,-8, -3 ,9, -6],
//       [-2 ,0, 5 ,4 ,4, 4, -3, 3 ,0]])

//      *
//     **
//    ***
//   ****
//  *****
// ******

// let space = 6-1;
// for(let i =1 ; i<=6 ;i++){
//         let str = "";
//     for(let k =  space ;k >0;k--){
//         str += " ";
//     }
//     for(let j = i  ; j >0 ;j--){
//         str +="#";
//     }
//     console.log(str);
//     space--;

// }
