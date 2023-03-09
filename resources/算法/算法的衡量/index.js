"use strict";
function bootstrap(nums, sum) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needValue = sum - nums[i];
        if (map.has(needValue)) {
            return [map.get(needValue), i];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [];
}
const res = bootstrap([2, 7, 11, 15, 52, 66, 8], 68);
console.log(res);
