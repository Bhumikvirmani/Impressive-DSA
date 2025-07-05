/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    nums.forEach(element=>{
        if(element != val){
            nums[i]= element;
            i++;
        }
    })
    return i;
};