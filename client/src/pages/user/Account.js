import * as CiIcons from "react-icons/ci";
import { useEffect, useState } from "react";
function Account() {
    const data = new Array(5).fill({
        first: 'hello',
        last: 'world',
        handle: 'handle'
    })
    const [list, setList] = useState([])
    useEffect(()=>{
        console.log(data)
        setList(data)
    },[])
    return (

        <div className= "container">
            <h1>Trang khách hàng</h1>
            <br></br>
            <p>Xin chào, Hao Le !</p>
            <div className= "d-flex flex-row">

            <div className="col-8">

            <div class="card">
  <div class="card-body">
  <table class="table table-striped table-hover">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Truy cập</th>
      
    </tr>
  </thead>
  <tbody>
    {console.log(list)}{list.map((item,index)=>{
        return (
        <tr>
        <th scope="row">{index}</th>
        <td>{item.first}</td>
        <td>{item.last}</td>
        <td>{item.handle}</td>
        <td><button className="btn btn-primary"><a href="#" className="text-white">Xem lại</a></button></td>
        </tr>

        )
    })}
  </tbody>

  </table>
  </div>
</div>
</div>



            <div className="col-4">
            <div class="card">
            <div class="card-body">

                <h4>TÀI KHOẢN CỦA TÔI</h4>
                <ul style={{listStyleType:'none'}} className="pl-0">
                    <li><span><CiIcons.CiMobile3></CiIcons.CiMobile3></span>Điện thoại: </li>
                    <li><span><CiIcons.CiMapPin></CiIcons.CiMapPin></span>Địa chỉ: </li>
                    <li><span><CiIcons.CiMail></CiIcons.CiMail></span>Email: </li>
                </ul>
            </div>
            </div>
            </div>


            </div>


    
        </div>
    );
}
export default Account;

