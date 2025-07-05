const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function(nums, val) {
    let i = 0;
    nums.forEach(element=>{
        if(element != val){
            nums[i]= element;
            i++;
        }
    })
    return i;
};

let N = 0;
let arr = [];
let val = 0;
// This will Create Too Many Closures Even though the val is one time use purpose but if it was taking reference from its lexical scoping then it will be callback hell
// rl.question(`Eneter Size of the Array`,(num,)=>{
//     N = parseInt(num);
//     rl.question("`Eneter Size of the Array`,(targetVal)=>{
//         val = parseInt(targetVal);
//         rl.on('line', (input)=>{
//             let values = input.trim().split(" ").map(Number);
//             arr.push(...values);
//             if(arr.length === N){
//                 rl.close();
//                 let result = removeElement(arr,val);
//                 console.log(result);
//                 console.log(arr.slice(0,result));
//             }
//         });
//     });
// })

// To solve the Upper Problem we create the Promise and async await and promise always return objects
const ask = (query) => new Promise(resolve => rl.question(query, resolve));
(async()=>{
    const numStr = await ask("Eneter Size of the Array: ");
    N = parseInt(numStr);

    const value = await ask("Enter Element You Wanna remove in the Array: ");
    val = parseInt(value);

    const arrVal = await ask(`Enter ${N} space seperated Value: `);
    arr.push(...arrVal.trim().split(" ").map(Number));

    let result = removeElement(arr,val);
    console.log(result);
    console.log(arr.slice(0,result));
    rl.close();
})();