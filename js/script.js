let sanPhamDangChon = null;

function timKiem(){

    let keyword = document
        .getElementById("txtSearch")
        .value
        .toLowerCase()
        .trim();

    sanPhamDangChon = dsSanPham.find(sp =>
        sp.tenSP.toLowerCase().includes(keyword)
    );

    if(sanPhamDangChon==undefined){

        document.getElementById("result").innerHTML=
        `
        <div class="alert alert-danger">
            Không tìm thấy sản phẩm phù hợp.
        </div>
        `;

        return;
    }

    hienThiSanPham(sanPhamDangChon);

}

function hienThiSanPham(sp){

    let option="";

    sp.mauSac.forEach((mau,index)=>{

        option+=`
        <option value="${index}">
            ${mau.tenMau}
        </option>
        `;

    });

    document.getElementById("result").innerHTML=

    `
    <div class="card shadow">

        <div class="row g-0">

            <div class="col-md-5">

                <img
                id="imgSP"
                src="${sp.mauSac[0].hinhAnh}"
                class="img-fluid rounded-start">

            </div>

            <div class="col-md-7">

                <div class="card-body">

                    <h3>${sp.tenSP}</h3>

                    <p><b>Mã sản phẩm:</b> ${sp.maSP}</p>

                    <p><b>Giá:</b>
                    ${sp.giaSP.toLocaleString()} VNĐ
                    </p>

                    <p><b>Mô tả:</b>
                    ${sp.moTa}
                    </p>

                    <label class="form-label">
                        Chọn màu
                    </label>

                    <select
                    id="cmbColor"
                    class="form-select"
                    onchange="doiMau()">

                        ${option}

                    </select>

                </div>

            </div>

        </div>

    </div>

    `;

}

function doiMau(){

    let index=document.getElementById("cmbColor").value;

    document.getElementById("imgSP").src=
    sanPhamDangChon.mauSac[index].hinhAnh;

}
