//Hoare partition
const partition = (arr, left, right) =>{
    let pivot = Math.floor((left+right)/2);
    let izq=[], der=[];
    for(let i=left; i<pivot; i++){
        izq.push(arr[i]);        
    }
    for(let j=right; j>pivot;j--){
        der.push(arr[j]);        
    }
    return [izq, arr[pivot], der];
}
let array = [1,2,3,4,5,6,7,8,9]
//1,2,3,  4  , 5,6,7,8
console.log(partition(array, 0, array.length-1));
