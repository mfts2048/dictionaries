function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums = nums.sort((a, b) => a - b);
  nums = [...new Set(nums)];

  let arrMaxLength = 1;
  let arr = [];
  let lastValue = nums[0];

  let haveFalse = false;
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];

    if (lastValue === value - 1) {
      arrMaxLength++;
    } else {
      arr.push(arrMaxLength);
      arrMaxLength = 1;

      if (!haveFalse) {
        haveFalse = true;
      }
    }

    lastValue = value;
  }

  arr.push(arrMaxLength);
  return Math.max(...arr);
}

const res1 = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]); // 7
console.log(res1);
