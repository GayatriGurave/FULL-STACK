// let a = 10;
// let a = prompt("enter the value of a: ");
// if (a % 2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd ");
// }
// for (let i = 0; i <= 50; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }


for (let i = 0; i <= 100; i++) {
    if (i >= 0 && i <= 30 && i % 5 === 0) {
        console.log(`${ i }
            is divisible by 5 `);
    } else if (i >= 50 && i <= 90 && i % 3 === 0) {
        console.log(`${ i }
            is divisible by 3 `);
    } else if (i >= 40 && i <= 100 && i % 8 === 0) {
        console.log(`${ i }
            is divisible by 8 `);
    }
}