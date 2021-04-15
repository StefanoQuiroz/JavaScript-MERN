//algorithm Hoare
//call function
//partition(array, left, right)
//return pivote-index

//function quickSort() calling partion function() to sorting
//quick sorting use the pivote-index

//1. where the recursive call will be
//2. when we know that a part of the matrix has been ordered
//3. when we know that the entire matrix has been ordered
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const partition = (array, left, right) => {
    let pivot = Math.floor((left + right) / 2);
    while (left < right) {
        while (array[left] < array[pivot]) {
            left++
        }
        while (array[right] > array[pivot]) {
            right--
        }
        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++
            right--
        }
    }
    return left;
}

const quickSort=(arr, left, right)=>{
    let pivot = partition(arr,left, right);
    if(left < pivot){
        quickSort(arr,left,pivot-1);
    }
    //never place else if in recursive call !!!!! bug error !! does not deliver the entire ordered list
    if (right > pivot){
        quickSort(arr,pivot,right);
    }
    return arr;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////   
// i=5 j=1
// i=1 j=5
// i=4 j=2
//i =2 j =4
// i, j=2 
// let arr = [5,4,2,1,3];
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arr = [5,4,2,1,3,7];
// console.log(partition(arr, 0, arr.length-1));
console.log(quickSort(arr, 0, arr.length - 1));