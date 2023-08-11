var mergeTwoLists = function (list1, list2) {
  const merge = [];
  let win = 0;
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] === list2[i]) {
      merge.push(list1[i]);
      merge.push(list2[i]);
    }
    if (list1[i] > list2[i]) {
      merge.push(list1[i + win]);
    } else {
      merge.push(list2[i + win]);
    }
    // if (list1[i] > list2[i]) {
    //   merge.push(list1[i + win]);
    //   win += 1;
    //   i--;
    // } else {
    //   merge.push(list2[i + win]);
    //   win += 1;
    //   i--;
    // }
  }
  console.log(merge);
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
