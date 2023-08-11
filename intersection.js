var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const intersectionSet = new Set();

  for (const num of set1) {
    console.log(num);
    if (set2.has(num)) {
      intersectionSet.add(num);
    }
  }
  console.log(intersectionSet);

  const intersectionArr = Array.from(intersectionSet);

  return intersectionArr;
};

intersection([1, 2, 2, 1], [2, 2]);
