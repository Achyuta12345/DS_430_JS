//1
// function reverseArray(arr){
// return arr.reverse();
// }
// let arr=[2,9,5,12];
// console.log(reverseArray(arr))

//2
// function reverseArray(arr){
//     let left=0;
//     let  right=arr.length-1;
//          while(left<right){
//             let temp = arr[left];
//             arr[left]=arr[right];
//             arr[right]=temp;
//             left++;
//             right--;
//          }
//          return arr;
//     }
//     let arr=[2,9,5,12];
//     console.log(reverseArray(arr))

//3
// function reverseArray(arr){
//     let left=0;
//     let  right=arr.length-1;
//          while(left<right){
            
//            [arr[left],arr[right]] = [arr[right],arr[left]];
//             left++;
//             right--;
//          }
//          return arr;
//     }
//     let arr=[2,9,5,12];
//     console.log(reverseArray(arr))

//4
function reverseArray(arr){
   
    for(let i=0;i<Math.floor(arr.length/2);i++){
       let j= arr.length - i -1;
      let temp =  arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
    return arr;
}
let arr=[2,9,5,12];
console.log(reverseArray(arr))