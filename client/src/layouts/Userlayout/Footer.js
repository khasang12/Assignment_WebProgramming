function Footer() {
  return (
    <div
      className="mt-5 py-3 px-5 w-100 d-flex flex-column flex-wrap flex-lg-row justify-content-center align-items-lg-center text-white"
      style={{
        backgroundColor: "var(--primary)",
        height: "auto",
        minHeight: 60,
      }}
    >
      <div className="col-12 col-md-6 col-lg-4 my-2">
        <a
          style={{ color: "white" }}
          class="fw-bold"
          data-bs-toggle="collapse"
          href="#collapseIntro"
          role="button"
          aria-expanded="false"
          aria-controls="collapseIntro"
        >
          GIỚI THIỆU
        </a>
        <div class="collapse d-lg-block" id="collapseIntro">
          <div
            class="card card-body mt-2 mb-4"
            style={{ backgroundColor: "var(--primary)", height: "auto" }}
          >
            <a className="text-white p-1 w-full" href="#">Trang chủ</a>
            <a className="text-white p-1 w-full" href="#">Về BKPass</a>
            <a className="text-white p-1 w-full" href="#">Điều khoản giao dịch</a>
            <a className="text-white p-1 w-full" href="#">Bảo mật thông tin</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 my-2">
        <a
          style={{ color: "white" }}
          class="fw-bold"
          data-bs-toggle="collapse"
          href="#collapsePolicy"
          role="button"
          aria-expanded="false"
          aria-controls="collapsePolicy"
        >
          CHÍNH SÁCH CÔNG TY
        </a>
        <div class="collapse d-lg-block" id="collapsePolicy">
          <div
            class="card card-body mt-2 mb-4"
            style={{ backgroundColor: "var(--primary)", height: "auto" }}
          >
            <a className="text-white p-1 w-full" href="shopping-guide">Chính sách giao nhận</a>
            <a className="text-white p-1 w-full" href="shopping-guide">Chính sách đổi trả hàng</a>
            <a className="text-white p-1 w-full" href="shopping-guide">Phương thức thanh toán</a>
            <a className="text-white p-1 w-full" href="shopping-guide">Chính sách bảo hành</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 my-2">
        <a
          style={{ color: "white" }}
          class="fw-bold"
          data-bs-toggle="collapse"
          href="#collapseCustomerCare"
          role="button"
          aria-expanded="false"
          aria-controls="collapseCustomerCare"
        >
          HỖ TRỢ KHÁCH HÀNG
        </a>
        <div class="collapse d-lg-block" id="collapseCustomerCare">
          <div
            class="card card-body mt-2 mb-4"
            style={{ backgroundColor: "var(--primary)", height: "auto" }}
          >
            <a className="text-white p-1 w-full" href="#">Hỗ trợ bảo hành: <span class="fw-bold">028 7301 3879</span></a>
            <a className="text-white p-1 w-full" href="#">Gửi yêu cầu hỗ trợ kỹ thuật</a>
            <a className="text-white p-1 w-full" href="#">Tra cứu thông tin hoá đơn</a>
            <a className="text-white p-1 w-full" href="#">Phản ánh chất lượng dịch vụ</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-12 my-2">
        <a
          style={{ color: "white" }}
          class="fw-bold"
          data-bs-toggle="collapse"
          role="button"
        >
          VỀ CHÚNG TÔI
        </a>
        <div className="d-flex flex-column flex-lg-row mt-lg-4">
          <div className="lh-sm mt-1 mb-4 mb-lg-0 col-lg-6">
            <h6 className="fst-italic text-uppercase">CTY TNHH Bách Khoa Zone</h6>
            <h6 className="fw-light">Trụ sở chính: Đại học Bách Khoa cơ sở 2, Thành phố Dĩ An, Tỉnh Bình Dương</h6>
            <p className="fw-light">MST: 0123456789 - cấp ngày 29 tháng 11 năm 2022 tại Sở Kế Hoạch Và Đầu Tư THÀNH PHỐ HỒ CHÍ MINH</p>
            
          </div>
          <div className="lh-sm mt-1 mb-4 mb-lg-0 col-lg-3">
            <h6 className="fst-italic">SHOWROOM LÝ THƯỜNG KIỆT</h6>
            <h6 className="fw-light">Địa chỉ: 268 Lý Thường Kiệt, Phường 14, Quận 10</h6>
            <h6 className="fw-light">Điện thoại: <strong>(028) 1589 6632 - DĐ: 0909 456 789</strong></h6>
            <h6 className="fw-light"><strong>Mở cửa:</strong> 8h đến 21h từ thứ 2 đến CN</h6>
          </div>
          <div className="lh-sm mt-1 mb-4 mb-lg-0 col-lg-3">
            <h6 className="fst-italic">SHOWROOM DĨ AN</h6>
            <h6 className="fw-light">Địa chỉ: Đối diện Ký túc xá Khu A, Phường Đông Hòa, Thành phố Dĩ An, Tỉnh Bình Dương</h6>
            <h6 className="fw-light">Điện thoại: <strong>(028) 0259 3361 - DĐ: 0909 123 456</strong></h6>
            <h6 className="fw-light"><strong>Mở cửa:</strong> 8h đến 21h từ thứ 2 đến CN</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
