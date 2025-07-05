// link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const readline = require('readline');

// first i will use createInterface to take the input from the user through terminal;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let removeDuplicate = function(arr){
    // for LeetCode Problem :
    if(arr.length === 0)return 0;
    let i  = 0 ;
    
    for(let j = 1; j < arr.length; j++){
        if(arr[j] != arr[i]){
            i++;
            arr[i] = arr[j];// overwrite duplicate with the new unique value
        }
    }
    return i + 1; //number of unique elements
    
    // Method 1:  it will create the new array by the set 
    //return [... new Set(arr)];

    //// Method 2: Using for loop + splice (commented for reference)
    //let removeDuplicate = function(arr){
    // let seen = new Set();
    // //using for loop and remove the element from the original array
    // for(let i = 0; i < arr.length; i++){
    //     if(seen.has(arr[i])){
    //         arr.splice(i,1);// it will delete that particular element from the original array 
    //         i--; // after deleting the element from the array the length get modified 
    //     }else{
    //         seen.add(arr[i]);// to add the element into the Set name seen
    //     }
    // }
    // return [...seen];}

    // Method 3: using forEach loop + set same like upper one
    // // using forEach loop
    // // arr.forEach(element => {
    // //     if(!seen.has(element)){
    // //         seen.add(element);
    // //     }
    // // });
    // return [...seen];// convert the Set to the array

    // more easy way to solve 

    
}

// i will create the empty array and N for the size of the size of the array and count to count the no of element in an array;
let arr = [];
let N = 0;
let count = 0;

// i will take the input of size of array from the user 
rl.question("Enter the Number of element in the array: ", (num)=>{
    // parse it into int 
    N = parseInt(num);
    console.log(`Enter ${N} elements space seperated: `);
    // rl.on to read the line of input from the user and then push the element one by one 
    rl.on('line', (input)=>{
        // it will take the input one by one and push it into the array and increase the count
        // arr.push(parseInt(input.trim()));
        // count++;
        // console.log(count);
        // it will take input in one line and seperate it by seeing space and trim the space from starting and ending then map each one into the value variable like  an array;
        let values = input.trim().split(" ").map(Number);
        arr.push(...values);// let you push the elements into the array using the spread operator 
        if(arr.length >= N){
            rl.close(); // close the interface 
            let result = removeDuplicate(arr); // pass the arr into the removeDuplicate and the return into the result and console.log result after that 
            console.log(result);
        }
    });
});