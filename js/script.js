function TimKiem() {
    let tuKhoa = document.getElementById("txtTen").value.toLowerCase();
    let sanPham = null;
    for (let i = 0; i < danhSachSanPham.length; i++) {
        if (danhSachSanPham[i].tenSP.toLowerCase().includes(tuKhoa)) {
            sanPham = danhSachSanPham[i];
            break;
        }
    }
    let ketQua = document.getElementById("ketQua");
    if (sanPham == null) {

        ketQua.innerHTML =
        <div class="alert alert-danger mt-3">
            Không tìm thấy sản phẩm
            </div>
            ;
            return;
    }

    ketQua.innerHTML = `
    <div class="card shadow mt-4" style="width: 22rem;">

    <img src="images/${sanPham.mausac(0).hinhanh}"
    class="card-img-top img-fluid">

    <div class="card-body">
    <h4 class="card-title">${sanPham.tenSP}</h4>
    <p><b>maSP:</b> ${sanPham.maSP}</p>
    <p><b>giaSP:</b> ${sanPham.giaSP}</p>
    <p><b>moTa:</b> ${sanPham.moTa}</p>
    </div>
    </div>
;
}