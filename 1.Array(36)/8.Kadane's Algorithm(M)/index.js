function maxSubarraySum1(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}
const arr1 = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum1(arr1));

//Time: O(n^2)
//Space: O(1)

function maxSubarraySum2(arr) {
    // code here
let res = arr[0];
let maxEnding = arr[0];

for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    res = Math.max(res, maxEnding);
}
return res;
}
let arr2=[2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum2(arr2));
//Time Complexity: O(n)
//Auxiliary Space: O(1)