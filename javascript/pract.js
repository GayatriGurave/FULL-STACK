// let a = 25;
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a--);
// console.log(a);
// a += 20;
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a--);
// console.log(a += 10);
let nums = [23, 54, 76, 12, 54, 76, 89, 34, 32, 21, 69]

// for (let ind = 0; ind < nums.length; ind++) {
//     if (nums[ind] % 2 !== 0) {
//         console.log("odd numbers");
//         console.log(nums[ind]);
//     } else {
//         console.log("even numbers");
//         console.log(nums[ind]);
//     }
// }
let cnt1 = 0;
let cnt2 = 0;
for (let ind = 50; ind <= 70; ind++) {
    if (ind % 2 == 0) {

        cnt1++;
    } else {
        cnt2++;
    }

}
console.log("total even no :", cnt1);
console.log("total odd no :", cnt2);