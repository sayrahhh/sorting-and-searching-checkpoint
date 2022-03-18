function insertionSort(arr) {
  let sort;
  for (let i = 1; i < arr.length; i++) {
    sort = arr[i];
    for (var j = i - 1; arr[j] > sort && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = sort;
  }
  return arr;
}

console.log(insertionSort([4, 2, 6, 5, 1, 3]));
