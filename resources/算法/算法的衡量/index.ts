// function bootstrap(nums: number[], sum: number): number[][] {
//     const map = new Map()
//
//     for (let i = 0; i < nums.length; i ++) {
//
//     const needValue = sum - nums[i]
//         if (map.has(needValue)) {
//             return [map.get(needValue), i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }
//
//     return []
// }
//
// const res = bootstrap([2, 7, 11, 15, 52, 66, 8], 68)
// console.log(res)


// const merge = function(nums1, m, nums2, n) {
//     // 初始化两个指针的指向，初始化 nums1 尾部索引k
//     let i = m - 1, j = n - 1, k = m + n - 1
//     // 当两个数组都没遍历完时，指针同步移动
//     while(i >= 0 && j >= 0) {
//         // 取较大的值，从末尾往前填补
//         if(nums1[i] >= nums2[j]) {
//             nums1[k] = nums1[i]
//             i--
//             k--
//         } else {
//             nums1[k] = nums2[j]
//             j--
//             k--
//         }
//     }
//
//     // nums2 留下的情况，特殊处理一下
//     while(j>=0) {
//         nums1[k] = nums2[j]
//         k--
//         j--
//     }
// };
//
// const nums1 = [1,2,3,0,0,0]
// const nums2 = [2,5,6]
// merge(nums1, 3, nums2, 3)
// console.log(nums1, nums2)

// const arr = [-1, 0, 1, 2, -1, -4]
//
// const threeSum = function(nums: number[]) {
//     // 用于存放结果数组
//     let res = []
//     // 给 nums 排序
//     nums = nums.sort((a,b)=>{
//         return a-b
//     })
//     // 缓存数组长度
//     const len = nums.length
//     // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
//     for(let i=0;i<len-2;i++) {
//         // 左指针 j
//         let j=i+1
//         // 右指针k
//         let k=len-1
//         // 如果遇到重复的数字，则跳过
//         if(i>0&&nums[i]===nums[i-1]) {
//             continue
//         }
//         while(j<k) {
//             // 三数之和小于0，左指针前进
//             if(nums[i]+nums[j]+nums[k]<0){
//                 j++
//                 // 处理左指针元素重复的情况
//                 while(j<k&&nums[j]===nums[j-1]) {
//                     j++
//                 }
//             } else if(nums[i]+nums[j]+nums[k]>0){
//                 // 三数之和大于0，右指针后退
//                 k--
//
//                 // 处理右指针元素重复的情况
//                 while(j<k&&nums[k]===nums[k+1]) {
//                     k--
//                 }
//             } else {
//                 // 得到目标数字组合，推入结果数组
//                 res.push([nums[i],nums[j],nums[k]])
//
//                 // 左右指针一起前进
//                 j++
//                 k--
//
//                 // 若左指针元素重复，跳过
//                 while(j<k&&nums[j]===nums[j-1]) {
//                     j++
//                 }
//
//                 // 若右指针元素重复，跳过
//                 while(j<k&&nums[k]===nums[k+1]) {
//                     k--
//                 }
//             }
//         }
//     }
//
//     // 返回结果数组
//     return res
// };
//
// threeSum(arr)


class WordDictionary {
    private words: Record<any, any[]> =  {}

    addWord(word: string) {
        if (this.words[word.length]) {
            this.words[word.length].push(word)
        } else {
            this.words[word.length] = [word]
        }
    }

    search(word: string) {
        if (!this.words[word.length]) {
            return false
        }

        const len = word.length

        if (!word.includes('.')) {
            return this.words[len].includes(word)
        }

        const reg = new RegExp(word)
        return this.words[len].some((item) => {
            return reg.test(item)
        })
    }
}
