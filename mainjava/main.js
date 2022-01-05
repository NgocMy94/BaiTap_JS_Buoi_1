//Bài tập về nhà 1
/**
 * KHỐI 1:
 * usd1 = 23500
 * soTienDoi = 2
 * 
 * KHỐI 2:
 * B1:Khai báo biến
 * B2:Lập công thưc 
 * vnd = usd1 * soTienDoi
 * B3:Kết Quả
 * 
 * KHỐI 3:
 * vnd
 */

//KHAI BÁO BIẾN
var usd1 = 23500
var soTienDoi = 2
//CÔNG THỨC
vnd = usd1 * soTienDoi
//KẾT QUẢ

var currencyFormat = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(vnd))
console.log("Số Tiền Chuyển Qua VND :  " +currencyFormat)

//Bài tập về nhà 2
/**
 * KHỐI 1:
 * Width = 20
 * Height = 10
 * 
 * KHỐI 2:
 * B1 :KHAI BÁO BIẾN
 * B2 :LẬP CÔNG THỨC
 * CHU VI
 * Acreage = Width * Height
 * DIỆN TÍCH
 * Perimeter = (Width + Height) * 2
 * 
 * B3: Kết quả
 * 
 * KHỐI 3:
 * 
 * Perimeter
 * Acreage
 */

//KHAI BÁO BIẾN
var Width = 20
var Height = 10
var Acreage = 0
var Perimeter = 0
//CHU VI
Acreage = Width * Height
//DIỆN TÍCH
Perimeter = (Width + Height) * 2
// KẾT QUẢ CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT
console.log("Chu Vi Của Hình Chữ Nhật Là : " +Acreage)
console.log("Diện Tích Của Hình Chữ Nhật Là :" +Perimeter)


//Bài tập về nhà 3
/**
 * KHỐI 1:
 * num = 83
 * 
 * KHỐI 2:
 * B1:KHAI BÁO BIẾN
 * B2:LẤY SỐ HANG CHỤC
 * ten = Math.floor(num / 10)
 * B3:LẤY SỐ HÀNG ĐƠN VỊ
 * unit = num % 10
 * B4:KẾT QUẢ
 * 
 * KHỐI 3:
 * ten
 * unit
 */

 var num = 83
 var ten = 0
 var unit = 0
 //LẤY SỐ HÀNG CHỤC
 ten = Math.floor(num / 10)
 //LẤY SỐ HÀNG ĐƠN VỊ        
 unit = num % 10
 
 console.log("SỐ HÀNG CHỤC :" +ten )
 console.log("SỐ HÀNG ĐƠN VỊ :" +unit)
 
 