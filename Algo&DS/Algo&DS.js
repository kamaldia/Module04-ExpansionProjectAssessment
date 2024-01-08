//Ex 1: Bubble Sort
//Given an Integer **N** and a list **arr**. Sort the array using bubble sort algorithm.

var N = 5;
var arr = [7,2,3,5,1];
var current;

for (let i = N; i>=0 ; i--) {
  for (let j = N; j >= 0 ; j--) {
    if(arr[j] > arr[j+1]) {
      current = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = current
    }
  }
}
console.log(arr);

//-----------------------------------------------------

//Ex 2: Binary Search
//Given a sorted array of size **N** and an integer **K**, find the position(0-based indexing) at which **K** is present in the array using binary search.

var N = 5;
var arr = [2,4,1,5,7];
var K = 1;

for (let i = N/2 ; i < N ; i = Math.round(i)/2) {
  if(arr(Math.round(i)) > K) {
    arr = arr.slice(0, Math.round(i));
  } else {
    arr = arr.slice(Math.round(i), N);
  }
}