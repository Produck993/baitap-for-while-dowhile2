//Trong phần này, chúng ta sẽ phát triển một ứng dụng cho phép hiển thị 20 số nguyên tố đầu tiên.

let a = prompt("nhập số ")
let n = 2;
let snt = true
let solan
while (solan < 20) {
if ( a < 2) {
    document.write(a +"ko phải là số nguyên tố<br>")
} if ( a == 2) {
    document.write(a + "là số nguyên tố<br>")
    solan++; 
} else if (a > 2) {
    while (a > n) {
        if  (a % n == 0) {
            snt = false
            document.write(a + ",")
            break;
        } 
        if (snt == true){
            
            document.write(a + " là số nguyên tố<br>")
            solan++; 
        }
    }
}
n++
}
