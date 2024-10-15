//1
function kthSmallest1(arr, k) {
    // code here
    let arrSort = arr.sort((a,b)=>a-b);
    let kthSmallNum = arrSort[k-1];
    return kthSmallNum;
}
let k1=3,arr1= [1,4,6,8];
console.log(kthSmallest1(arr1,k1));
//Time Complexity: 𝑂(𝑛log⁡𝑛)
//Space Complexity: 𝑂(𝑛)

//2
function kthSmallest2(arr, k) {
    let max_element = arr[0];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] > max_element) {
            max_element = arr[i];
        }
    }

    // Create an array to store the frequency of each element in the input array
    let freq = new Array(max_element + 1).fill(0);
    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    // Keep track of the cumulative frequency of elements in the input array
    let count = 0;
    for (let i = 0; i <= max_element; i++) {
        if (freq[i] != 0) {
            count += freq[i];
            if (count >= k) {
                // If we have seen k or more elements, return the current element
                return i;
            }
        }
    }
    return -1;
}

let k2=3,arr2= [1,4,6,8];
console.log(kthSmallest2(arr1,k1));

//Time Complexity:O(n*log n)
//Space Complexity:O(log n)