//algorithm Hoare
//call function
//partition(array, left, right)
//return pivote-index

//function quickSort() calling partion function() to sorting
//quick sorting use the pivote-index

//donde sera la llamada recursiva
//cuando sabemos que ina arte de la matriz ha aisdo ordenada
//cuándo sabemos que se ha ordenado toda la matriz

const partitionHoare = (array, left, right) => {
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
// i=5 j=1
// i=1 j=5
// i=4 j=2
//i =2 j =4
// i, j=2 
let arr = [5,4,2,1,3];
console.log(partitionHoare(arr, 0, arr.length-1));