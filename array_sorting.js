function arr_sort(x, array) {
  console.log(" ");
  console.log("-SAMPLE:- " + x + " ---");
  console.log(" ");
  let c = 0;
  let b = 0;
  // count sorted or not
  for (let index = 0; index < array.length; index++) {
    const next = index + 1;
    // check number greater
    if (next < array.length) {
      if (array[index] > array[next]) {
        c++;
        // console.log(array[index] + " lebih besar dari " + array[index + 1]);
      }
      // check same number exist
      if (array[index] == array[next]) {
        b++;
      }
    }
  }

//   console.log("sample " + x + " c", c);

  if (c === 0) {
    console.log("yes");
  }

  // check swap method
  if (c === 1) {
    // console.log("c", c);
    // check array length
    if (array.length === 2) {
      let n = 0;
      let a = array[n];
      //   console.log("a", a);
      let b = array[n + 1];
      //   console.log("b", b);
      [a, b] = [b, a];
      console.log("swap: " + (n + 1) + " " + (n + 2));
      // console.log("new array: ", array = [a,b]);
    }
  }

  if (c > 1) {
    let val = customSort(array);
    console.log("reverse", val[1]);
  }

  // same element value exist
  if (b > 0) {
    console.log("no");
  }
  console.log(" ");
  console.log("-END:----------");
  console.log(" ");
  console.log(" ");
}

function customSort(array) {
  let changed = [];
  if (array.length <= 1) return array;

  // Pick a swap position about in the middle of the array
  let swapIndex = Math.floor((array.length - 1) / 2),
    lessArray = [],
    moreArray = [];

  // Get the value of the swap index for comparison
  let swapValue = array[swapIndex];

  // Remove the swap value from the array we will be sorting
  array.splice(swapIndex, 1);

  // If the value is less than swapValue, put in a "less than" array
  // If the value is more than swapValue, put in a "more than" array
  for (let i = 0; i < array.length; i++) {
    if (array[i] < swapValue) {
      // console.log('swapValue', i);
      lessArray.push(array[i]);
    } else {
      if (i > 0) {
        // console.log("swapValue", i);
        changed.push(i);
      }
      moreArray.push(array[i]);
    }
  }

  // Combine the sorted arrays with the original pivot value and return
  let arr = customSort(lessArray).concat([swapValue], customSort(moreArray));
  return [arr, changed];
}

arr_sort(1, [2]);
arr_sort(2, [4, 2]);
arr_sort(3, [4, 2, 1]);
arr_sort(4, [3, 3, 1, 2]);
arr_sort(5, [6]);
arr_sort(6, [1, 5, 4, 3, 2, 6]);
