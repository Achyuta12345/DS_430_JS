function sort012(arr) {    
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    // Using the Dutch National Flag algorithm
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [ arr[mid], arr[low] ]; // Swap the elements
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [ arr[high], arr[mid] ]; // Swap the elements
            high--;
        }
    }
    return arr;
}

// Example Usage:
let arr1 = [0, 2, 1, 2, 0];
console.log(sort012(arr1)); // Output: [0, 0, 1, 2, 2]

let arr2 = [0, 1, 0];
console.log(sort012(arr2)); // Output: [0, 0, 1]

let arr3 = [1, 0, 2];
console.log(sort012(arr3)); // Output: [0, 1, 2]
// Time Complexity: O(N),
// Space Complexity: O(1)