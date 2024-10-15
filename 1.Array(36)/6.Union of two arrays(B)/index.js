function unionOfTwoArr(a,b) {
    // code here
let tempArr = new Set();
for(let char of a){
   tempArr.add(char);
}

for(let char of b){
   tempArr.add(char);
}

return tempArr.size;

}
let a=[1, 2, 3, 4, 5], b= [1, 2, 3];
console.log(unionOfTwoArr(a,b))
let a2 = [85, 25, 1, 32, 54, 6], b2 = [85, 2] ;
console.log(unionOfTwoArr(a2,b2));

let a3 = [1, 2, 1, 1, 2], b3= [2, 2, 1, 2, 1] ;
console.log(unionOfTwoArr(a3,b3));

//Time Complexity: O((n+m)log(n+m))
//Auxiliary Space: O(n+m)