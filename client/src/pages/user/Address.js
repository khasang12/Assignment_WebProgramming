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
            <h1>Hệ thống đại lý</h1>
            <br></br>
            <br></br>
            <div className= "d-flex flex-row">
                <div className = "col-6">
  {addr ==1 ?   
<iframe
              src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.046324192124!2d106.64916848634746!3d10.772074877792031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1670155951297!5m2!1svi!2s"
              width="500vw"
              height="350vw"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> 

  :
  <iframe
  src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125424.37391835598!2d106.58788277842245!3d10.772066894675039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5568c997f%3A0xdeac05f17a166e0c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJBIUUcgVFAuSENN!5e0!3m2!1svi!2s!4v1670157938257!5m2!1svi!2s"
  width="500vw"
  height="350vw"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen=""
  aria-hidden="false"
  tabIndex="0"
/> 
  } 
                </div>



                <div className = "col-6 d-flex flex-column">
                    <div>
                    <select class="form-select" aria-label="Default select example" onChange={handleChange}> 
                <option selected value="1">TP.HCM</option>
                <option value="2">Bình Dương</option>
                </select>
                    </div>



                    <div > 
                    {addr == 1 ?
                    <div>
                        <br></br>
                    <h4>BÁCH KHOA QUẬN 10</h4>
                    <br></br>
                    268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh
                    <br></br>
                    Điện thoại: 1900xxxx
                    <br></br>
                    Email: sang.nguyenvinh@hcmut.edu.vn
                    </div>

                : 
                <div>
                        <br></br>
                    <h4>BÁCH KHOA DĨ AN</h4>
                    <br></br>
                    Đông Hoà, Dĩ An, Bình Dương
                    <br></br>
                    Điện thoại: 1900xxxx
                    <br></br>
                    Email: sang.nguyenvinh@hcmut.edu.vn
                    </div>
                }
                </div>

                </div>

            </div>
        </div>
    );
}
export default Address;
