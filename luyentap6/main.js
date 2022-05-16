//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

let a = 0
let b = 1
let i = 0
let tong;
while (true) {
    tong = a + b
    a = b
    b = tong
    if ( tong % 5 == 0) {
        console.log(tong)
        break;
    } 
}
   
// }