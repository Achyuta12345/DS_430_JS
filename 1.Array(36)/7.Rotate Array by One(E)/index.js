function rotateByOne(arr){
    let n = arr.length-1;
        
      let lastElement = arr[arr.length-1]
     for(let i=arr.length-1;i>0;i--){
         arr[i]=arr[i-1];
     }
     arr[0]=lastElement;
    return arr;
}

let arr=[1,2,3,4,5,6];

console.log(rotateByOne(arr));

//Time : O(n);
//Space:O(1);