import { useState } from "react";

function Address() {
const [addr, setAddr] = useState(1)

const handleChange=(e) => {
      const option = e.target.value
      if (option == "1" ) {setAddr(1)} else
      if (option =="2") {setAddr(2)} 
}

    return (

        <div className= "container">
            <h1>Hướng dẫn mua hàng</h1>
            <br></br>
            <br></br>
           <p>Không cần trực tiếp đến siêu thị mua hàng, bạn có thể lựa chọn cách mua hàng online bằng cách chọn một trong những cách mua hàng sau:</p>
            <br></br>
            <p>Cách 1: Gọi điện thoại đến tổng đài 1900xxx từ 7g30-22g (cả CN & ngày lễ) để đặt hàng, nhân viên chúng tôi luôn sẵn phục vụ, tư vấn và hỗ trợ quý khách mua được sản phẩm ưng ý.</p>
            <br></br>
            Cách 2: Đặt mua hàng online trên website BKZone.com:
            <br></br>

            <ul>
            <li>Bước 1: Tìm sản phẩm cần mua.</li>
            <ul>
                <li>Sử dụng ô tìm kiếm phía trên, gõ tên sản phẩm muốn mua (có thể tìm đích danh 1 sản phẩm, tìm theo hãng...). Website sẽ cung cấp cho bạn những gợi ý chính xác để lựa chọn:
</li>
                <li>Sau đó tuỳ vào nhu cầu mua, bạn có thể lọc các sản phẩm theo các tiêu chí về giá, lọc sản phẩm theo hãng, lọc sản phẩm đang có chương trình trả góp 0%....
</li>
            </ul>
            <li>Bước 2: Đặt mua sản phẩm</li>
            <p>Sau khi chọn được sản phẩm ưng ý muốn mua, bạn tiến hành đặt hàng bằng cách:</p>
            <ul>
                <li>Chọn vào nút MUA NGAY nếu bạn muốn chuyển đến trang thanh toán sản phẩm.</li>
                <li>Điền đầy đủ các thông tin mua hàng theo các bước trên website, sau đó chọn hình thức nhận hàng là giao hàng tận nơi hay đến siêu thị lấy hàng, chọn hình thức thanh toán là trả khi nhận hàng hay thanh toán online (bằng thẻ ATM, VISA hay MasterCard) và hoàn tất đặt hàng.</li>
                <li>Sau khi đặt hàng thành công, Thế Giới Di Động sẽ liên hệ quý khách để xác nhận và hoàn tất thủ tục.</li>
            </ul>
            <p>Ngoài các cách trên, để mua hàng tại Thế Giới Di Động quý khách còn có thể để lại bình luận tại bất kì đâu trên website (có thông tin tên, số điện thoại...), hoặc trực tiếp chat với tư vấn viên của công ty để được tư vấn và đặt mua sản phẩm.</p>
            </ul> 





       
        </div>
    );
}
export default Address;

