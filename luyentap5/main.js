// Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
let i = 0;
let tong
let a = 0
let b = 1
let c = prompt("Nhập số hiện thịfibonacci ")
for ( let i = 0; i < c ; i++) {
    tong = a + b
    a = b
    b = tong
    console.log(tong)
}