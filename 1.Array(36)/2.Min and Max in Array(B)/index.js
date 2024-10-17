//1. using sort

function minMax1(arr){
let sortArr = arr.sort((a,b)=>a-b)
let min = sortArr[0];
let max = sortArr[arr.length-1];
return [min,max]
}
let a=[45,2,6,1];
console.log(minMax1(a))
// Time complexity: O(n log n)
// Auxilary Space: is O(1)


//2.Naive

function getMinMax(arr, n)
{
    let minmax = new  Array();
    let  i;
    
    if (n == 1) {
        minmax.max = arr[0];
        minmax.min = arr[0];
        return minmax;
    }
    if (arr[0] > arr[1]) {
        minmax.max = arr[0];
        minmax.min = arr[1];
    } else {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }

    for (i = 2; i < n; i++) {
        if (arr[i] > minmax.max) {
            minmax.max = arr[i];
        } else if (arr[i] < minmax.min) {
            minmax.min = arr[i];
        }
    }

    return minmax;
}
    var arr = [1000, 11, 445, 1, 330, 3000];
    var arr_size = 6;
    minmax = getMinMax(arr, arr_size);
    console.log(minmax);
   
    // Time Complexity: O(n)
    // Auxiliary Space: O(1) 
    
//3
    function minMax(arr){
    
        let min=Infinity
        let max=-Infinity;
        for(let i=0;i<arr.length;i++){
           min=Math.min(min,arr[i]);
           max=Math.max(max,arr[i])
        }
        return [min,max]
        }
        let arr=[2,1,36,12,5,9];
        console.log(minMax(arr));
         // Time Complexity: O(n)
    // Auxiliary Space: O(1) 