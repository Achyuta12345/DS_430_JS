// This code for only shift the negative to left side and its is in ascending order


function move(arr){
    return arr.sort();
}

// driver code
  
let arr1 = [ -1, 2, -3, 4, 5, 6, -7, 8,9];


    console.log(move(arr1));
    // Time Complexity: O(n*log(n))
    // Auxiliary Space: O(1)

// If we add more conditions, like moving the negatives to the end without changing the sequence of positive and negative numbers
// input [1, -1, 3, 2, -7, -5, 11, 6 ] output should be [1, 3, 2, 11, 6, -1, -7, -5] not [1,2,3,6,11,-1,-5,-7]
//Input : arr[] = [-5, 7, -3, -4, 9, 10, -1, 11]
// Output : [7, 9, 10, 11, -5, -3, -4, -1]

function segregateElements(arr) {
    // code here
    let n = arr.length;
    let temp = new Array(n);
    let j = 0; 

  
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 0) {
            temp[j++] = arr[i];
        }
    }

    
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            temp[j++] = arr[i];
        }
    }

    
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
    return arr
}
let arr2 = [ -9,-1, 2, -3, 4, 5, 6, -7, 8,9];
console.log(segregateElements(arr2))
// Time Complexity:O(n)
// Space Complexity:O(n)