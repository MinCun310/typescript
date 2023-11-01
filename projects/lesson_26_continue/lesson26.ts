// // continue
// for (let i = 0; i <= 5; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }

let index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2 == 0) {
        continue;
    }
    console.log(index);
}