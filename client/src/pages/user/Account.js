import * as CiIcons from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import Price from '../../components/PriceDisplay/Price';
function Account() {
    const user = JSON.parse(sessionStorage.getItem("user"))
    const data = new Array(5).fill({
        first: 'hello',
        last: 'world',
        handle: 'handle'
    })
    const [list, setList] = useState([])
    const [index,setIndex] = useState(undefined)
    useEffect(()=>{
        getHistory()
        // console.log(data)
        // setList(data)
    },[])


    const getHistory = async () => {
        await axios
          .get(`http://localhost:8080/api/orders/all?userId=${user? user.id : 0}`)
          .then((response) => setList(response.data))
          .catch((res) => alert(res));
      };

    return (

        <div className= "container">
            <h1>Trang khách hàng</h1>
            <br></br>
            <p>Xin chào, {user && user['name']}!</p>
            <div className= "d-flex flex-column-reverse flex-lg-row">

            <div className="col-12 col-lg-8 px-0 px-md-1">

            <div class="card" >
  <div class="card-body" >
  <table class="table table-striped table-hover"  >
      <thead>
    <tr>
      <th scope="col"  className="d-none d-md-block">STT</th>
      <th scope="col"  >Mã đơn hàng</th>
      <th scope="col"  >Tổng tiền</th>
      <th scope="col"  >Phương thức</th>
      <th scope="col" >Trạng thái</th>
      <th scope="col" >Truy cập</th>
    </tr>
  </thead>
  <tbody>
    {list && list.map((item,index)=>{
        return (
        <tr>
        <th scope="row" className="d-none d-md-block">{index+1}</th>
        <td>{item.id}</td>
        <td>{item.total_order_money}</td>
        <td>{item.paymentMethod}</td>
        <td>{item.status}</td>
        <td><button className="btn btn-primary text-white" data-bs-toggle="modal"
                      data-bs-target="#viewModal" onClick={()=>setIndex(index)}>Xem lại</button></td>
        </tr>

        )
    })}
  </tbody>

  </table>
  </div>
</div>

</div>



            <div className="col-12 col-lg-4 mb-2">
            <div class="card">
            <div class="card-body">

                <h4>TÀI KHOẢN CỦA TÔI</h4>
                <ul style={{listStyleType:'none'}} className="pl-0">
                    <li><span><CiIcons.CiMobile3></CiIcons.CiMobile3></span>Điện thoại: {user && user['phone']}</li>
                    <li><span><CiIcons.CiMapPin></CiIcons.CiMapPin></span>Địa chỉ: {user && user['address']}</li>
                    <li><span><CiIcons.CiMail></CiIcons.CiMail></span>Email: {user && user['email']}</li>
                </ul>
            </div>
            </div>
            </div>
            </div>


    




            {/* { View} */}
            <div
                className="modal fade"
                id="viewModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Chi tiết đơn hàng
                            </h1>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body gap-5 lh-lg"> 
                            <div className="d-flex flex-row">
                                <p className="text-secondary m-0">Mã đơn hàng:</p>
                                <p className="text-primary m-0 ms-auto">{(list && index!=undefined) ? list[index].id: "undefined"}</p>
                            </div>
                            <div className="d-flex flex-row">
                                <p className="text-secondary m-0">Tổng hóa đơn:</p>
                                <p className="text-primary m-0 ms-auto">{(list && index!=undefined) ? list[index].total_order_money : "undefined"}</p>
                            </div>
                            <hr />
                            {index!=undefined && list[index] && 
                                list[index].products.map((item, index) => {
                                    return (
                                        <div className="ms-2 py-2" key={index}>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Mã hàng {index + 1}:</p>
                                                <p className="text-primary m-0 ms-auto">#{item.product_id}</p>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Tên sản phẩm:</p>
                                                <p className="text-primary m-0 ms-auto">{item.name}</p>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Số lượng:</p>
                                                <p className="text-primary m-0 ms-auto">{item.quantity}</p>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <p className="text-secondary m-0">Thành tiền:</p>
                                                <Price primary className="ms-auto">
                                                    {item.price}
                                                </Price>
                                            </div>
                                        </div>
                                    );
                                })}
                            <div>
                                <div className="d-flex flex-row">
                                    <p className="text-secondary m-0">Người nhận: </p>
                                    <p className="text-primary m-0 ms-auto">{(list && index!=undefined) ? list[index].receiverName:""}</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="text-secondary m-0">Địa chỉ </p>
                                    <p className="text-primary m-0 ms-auto">{(list && index!=undefined) ? list[index].address:""}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
export default Account;

