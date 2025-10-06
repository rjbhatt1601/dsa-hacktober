function kthElement(arr1, arr2, k) {
  const n = arr1.length, m = arr2.length;

  // Ensure arr1 is smaller
  if (n > m) return kthElement(arr2, arr1, k);

  let low = Math.max(0, k - m);
  let high = Math.min(k, n);

  while (low <= high) {
    let cut1 = Math.floor((low + high) / 2);
    let cut2 = k - cut1;

    let left1 = cut1 === 0 ? -Infinity : arr1[cut1 - 1];
    let left2 = cut2 === 0 ? -Infinity : arr2[cut2 - 1];
    let right1 = cut1 === n ? Infinity : arr1[cut1];
    let right2 = cut2 === m ? Infinity : arr2[cut2];

    if (left1 <= right2 && left2 <= right1) {
      return Math.max(left1, left2);
    } else if (left1 > right2) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
  }
}
