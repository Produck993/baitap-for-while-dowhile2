
function doanso() {
    let a = +prompt("Nhập số trong khoảng bạn muốn đoán")
    let so_ran = Math.floor(Math.random() *a);
    let ketqua = so_ran
    // let trave = prompt("Nhập vào kết quả")
    let i = 0
    console.log(ketqua)
    while (i <= 3) {
        if (trave > ketqua) {
            alert("Bạn đang nhập số lớn hơn")
            continue;
            trave
        } else if (trave < ketqua) {
            alert("Bạn đang nhập số lớn hơn")
            continue;
            trave
        } else if (trave == ketqua ) {
            alert("Chúc mừng bạn, kết quả đã chính xác")
            break;
        }
        i++
       
    }   
    trave = doanso(trave)
    }

   