function insertionSort(arr) {
  let sort;
  for (let i = 1; i < arr.length; i++) {
    sort = arr[i];
    for (var insert = i - 1; arr[insert] > sort && insert > -1; insert--) {
      arr[insert + 1] = arr[insert];
    }
    arr[insert + 1] = sort;
  }
  return arr;
}

console.log(insertionSort([4, 2, 6, 5, 1, 3]));
