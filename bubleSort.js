function bubleSort(arr) {
  let maxLastIndex = arr.length;

  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < maxLastIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        const tempVal = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tempVal;
        swapped = true;
        console.log(arr);
      }
    }
    maxLastIndex--;
    i = 0;
  } while (swapped);
}

bubleSort([4, 3, 2, 1, 5, 4124, 12, 412, 4123, 232, 32, 32, 1, 321, 3, 213213, 123213, 3]);
