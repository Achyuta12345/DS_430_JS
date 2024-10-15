//1
function reverseWord1(w){
return w.split('').reverse().join('');
}
let w='geeks';
console.log(reverseWord1(w))
// Time:O(n)
// Space:O(1)

//2
function reverseWord2(str){
    let res="";
for(char of str){
    res=  char + res;
}
return res;
}
let s="Geeks";
console.log(reverseWord2(s))
// Time:O(n)
// Space:O(1)

//
function  reverseWord3(str){
    let strArray = str.split('');
    let left=0;
    let right=strArray.length-1;
    while(left<right){
        let temp=strArray[left];
        strArray[left]=strArray[right];
        strArray[right]=temp;
        left++;
        right--;
    }
    return strArray.join('');
}
let str3='ab'
console.log(reverseWord3(str3))