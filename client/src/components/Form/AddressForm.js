import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { getAddress_str } from '../../helpper/helpper';
import MyButton from '../../components/MyButton';
import { Button } from 'react-bootstrap';
import { Context } from '../../stores';

function AddressForm() {
  const [city, setCity] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [wards, setWard] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [currentAddress, setCurrentAddress] = useState(null);

  const [state, dispatch] = useContext(Context);
  const handleChangeCity = (cityName) => {
    if (city.length > 0) {
      let districts = city.find((item) => item.name === cityName).districts;
      setDistrict(districts);
    }
  };

  const handleChangeDistricts = (districtName) => {
    if (districts.length > 0) {
      let district = districts.find((item) => item.name === districtName);
      if (district) {
        setWard(district.wards);
      } else {
        alert('Đã xảy ra lỗi');
      }
    }
  };

  const handleSetCurrentAddress = (e) => {
    let index = addressList.findIndex((item) => item.id === Number(e.target.value));
    setCurrentAddress(addressList[index]);
  };

  const getCity = async () => { 
    return await axios
      .get('https://provinces.open-api.vn/api/?depth=3%20')
      .then((res) => res.data)
      .catch((err) => {
        console.log('Error :-S', err);
      });
  };
  
  const getAddressList = async () => {
    let id = JSON.parse(sessionStorage.getItem('user')).id;
    console.log(id)
    return await axios
      .get(`http://localhost:8080/api/address/all?user_id=${id}`)
      .then((res) => res.data)
      .catch((err) => alert(err));
  };

  const getData = async () => {
    await getAddressList().then((res) => setAddressList(res));
    await getCity().then((res) => setCity(res));
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      {/*Chọn address */}
      <div className="form-floating">
        <select
          className="form-select"
          id="payment__selectAddress"
          aria-label="Floating label select example"
          defaultValue={currentAddress ? getAddress_str(currentAddress) : 'Địa chỉ mới'}
          onChange={(e) => handleSetCurrentAddress(e)}
        >
          {<option value={0}>Địa chỉ mới</option>}
          {addressList.map((item, index) => (
            <option key={index} value={item.id}>
              {getAddress_str(item)}
            </option>
          ))}
        </select>
        <label htmlFor="payment__selectAddress">Chọn địa chỉ</label>
      </div>

      {/*Nhập email*/}
      <div className="form-floating my-2">
        <input
          type="email"
          defaultValue={sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).email : ''}
          className="form-control"
          id="payment__email"
          placeholder="name@example.com"
          readOnly={sessionStorage.getItem('user')}
        />
        <label htmlFor="payment__email">Email</label>
      </div>
      {/*Nhập Họ và tên  */}
      <div className="form-floating my-2">
        <input
          type="text"
          className="form-control"
          id="payment__fullname"
          name="payment__fullname"
          placeholder="Họ và tên"
          defaultValue={currentAddress ? currentAddress.receiverName : ''}
        />
        <label htmlFor="payment__fullname">Họ và tên</label>
      </div>

      {/*Nhập Số điện thoại  */}
      <div className="form-floating my-2">
        <input
          type="text"
          className="form-control"
          id="payment__phoneNumber"
          name="payment__phoneNumber"
          placeholder="phone number"
          defaultValue={currentAddress ? currentAddress.phoneNumber : ''}
        />
        <label htmlFor="payment__phoneNumber">Số điện thoại</label>
      </div>

      {/* Chọn tỉnh */}
      <div className="form-floating">
        <select
          className="form-select"
          id="payment__selectCity"
          name="payment__selectCity"
          aria-label="Floating label select example"
          defaultValue={'----'}
          disabled={city.length <= 0}
          onChange={(e) => handleChangeCity(e.target.value)}
        >
          <option>{currentAddress ? currentAddress.city : '----'}</option>
          {city.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
        <label htmlFor="payment__selectCity">Tỉnh thành</label>
      </div>

      {/* Chọn quận / huyện */}
      <div className="form-floating my-2">
        <select
          className="form-select"
          id="payment__selectDistricts"
          name="payment__selectDistricts"
          aria-label="Floating label select example"
          defaultValue={'----'}
          disabled={districts.length <= 0 && currentAddress}
          onChange={(e) => handleChangeDistricts(e.target.value)}
        >
          <option>{currentAddress ? currentAddress.district : '----'}</option>
          {districts && districts.map((item, index) => <option key={index}>{item.name}</option>)}
        </select>
        <label htmlFor="payment__selectDistricts">Quận / Huyện</label>
      </div>

      {/* Chọn phường/ xã */}
      <div className="form-floating">
        <select
          className={`form-select  ${wards.length > 0 ? '' : 'opacity-75'}`}
          id="payment__selectWards"
          name="payment__selectWards"
          aria-label="Floating label select example"
          disabled={wards.length <= 0}
          defaultValue={'----'}
          onChange={() => {}}
        >
          <option>{currentAddress ? currentAddress.ward : '----'}</option>
          {wards && wards.map((item, index) => <option key={index}>{item.name}</option>)}
        </select>
        <label htmlFor="payment__selectWards">Phường / xã</label>
      </div>

      {/*Nhập địa chỉ cụ thể */}
      <div className="form-floating my-2">
        <input
          type="text"
          className="form-control"
          id="payment__SpecificAddress"
          name="payment__SpecificAddress"
          placeholder="phone number"
          defaultValue={currentAddress ? currentAddress.specificAddress : ''}
        />
        <label htmlFor="payment__SpecificAddress">Địa chỉ cụ thể</label>
      </div>

      {/* Ghi chú */}
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Ghi chú"
          id="payment__note"
          name="payment__note"
          defaultValue={''}
        />
        <label htmlFor="payment__note">Ghi chú</label>
      </div>
    </>
  );
}

export default AddressForm;
