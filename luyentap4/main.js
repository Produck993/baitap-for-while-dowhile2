//Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. 
//Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. 
//Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

let a = prompt('Nhập nhiệt độ cơ thể hiện tại');

// do {
//     if (a > 100) {
//         alert ("Yêu cầu người dùng giảm nhiệt độ")
//     } 
//     continue;
//     alert("Yêu cầu người dùng tăng nhiệt độ")
//     continue;
// } while (a < 20)

while(true) {
    if (a < 20) {
        alert("Yêu cầu người dùng tăng nhiệt độ")
    }
    if (a > 100) {
        alert("Yêu cầu người dùng giảm nhiệt độ")
    }
}