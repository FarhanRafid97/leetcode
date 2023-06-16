var permute = function (nums) {
  // APPROACH:
  // all permutations of nums array can be created by the following recursive approach:
  // MAIN RECURSIVE FORMULA USED::::: permute(nums) = nums[0] *** permute(nums-nums[0])
  // here *** is not multiplication or power operation but indicates putting nums[0] value in each of the results for permute(nums-nums[0])
  // one thing to note here is to put nums[0] in any result from permute(nums-nums[0]) we need to add the nums[0] val in all possible positions
  // that is start of the result, inbetween positions of the result and end of the result
  // EXAMPLE:
  // permute([1,2,3]) = [1] *** permute([2,3]);
  // since permute will recursively find all permutations of [2,3] the following is true:
  // permute([1,2,3]) = [1] *** [[2,3],[3,2]]
  // as mentioned above *** here denotes adding [1] to all results on the right side(which means [2,3] and [3,2])
  // this implies 1 -> [2,3] (all positions) and 1 -> [3,2] (all positions)
  // 1 -> [2,3] (all positions) = [1,2,3], [2,1,3]. [2,3,1]
  // 1 -> [3,2] (all positions) = [1,3,2], [3,1,2]. [3,2,1]

  // base case, when 0 or 1 element present
  if (nums.length <= 1) return [nums];
  // EXPLANATION OF NEXT STEP:
  // remove one element from the array and store value
  // note the APPROACH mentioned above removes the first element and calls permute on the remaining elements
  // but this algo does not care about which element is actually removed
  // as long as the next permute call has less number of elements this will work
  // hence we use the last element instead of the first
  // EXAMPLE:
  // let's use example [1,2,3]
  // nums after next line will be [1,2] and val will be 3 (nums:[1,2], val:3)
  let val = nums.pop();
  // EXPLANATION OF NEXT STEP:
  // recursively call permute with n-1 items (where n is the original length of nums)
  // basically prevRes will have all permutations of nums excluding the last element
  // CONTINUING THE EXAMPLE:
  // we call permute with [1,2] (prevRes = permute([1,2]))
  // from our example prevResult will have [[1,2],[2,1]]
  let prevRes = permute(nums);
  // EXPLANATION OF NEXT STEP:
  // create a variable to store final results (all permutations of the original nums)
  // CONTINUING THE EXAMPLE:
  // from our example that implies result will store all permutations of [1,2,3]
  let result = [];
  // EXPLANATION OF NEXT STEP:
  // now that we have all permutations of (n-1) items (where n is the original length)
  // we iterate over each permutation of (n-1) items
  // CONTINUING THE EXAMPLE:
  // from our example we will have [1,2] in first iteration and [2,1] in next iteration
  for (let res of prevRes) {
    // EXPLANATION OF NEXT STEP:
    // to complete the permutation we need to add the removed element at all positions of the current result
    // so we iterate over the current result from the prevRes array
    // and add the missing val to each position(start, all in between position, at end)
    // pushing each new result to the result array
    // CONTINUING THE EXAMPLE:
    // for our example if we take the first iteration(first result from prevResult) of the above loop [1,2]
    // we would add 3(the removed element) at the start:[3,1,2],
    // all in between positions(in this example only one inbetween position is there): [1,3,2]
    // and end: [1,2,3]
    for (let index = 0; index <= res.length; index++) {
      // need to create a copy of the result from the prev result else it will mess up the current res
      let nRes = Array.from(res);
      // using splice to add the removed value at index (index goes from 0 to length, hence it covers all cases)
      nRes.splice(index, 0, val);
      console.log(nRes);
      // push the result created to result array
      result.push(nRes);
    }
  }
  // return result that contains all the permutations of nums array
  return result;
};

permute([1, 2, 3]);
