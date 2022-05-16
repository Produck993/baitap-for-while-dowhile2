//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let dem = 0
let dayso =""
let tong = 0
for (let a = 1;true; a++) {
    if ( a % 7 == 0) {
        dayso += a+""
        console.log(dayso)
        tong +=a
        dem ++
    } if (dem == 30) {
        break;
    }
}
document.write(tong)