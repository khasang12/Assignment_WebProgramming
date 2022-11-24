import { useEffect, useState } from 'react';

function AddressForm() {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const [districts, setDistrict] = useState([]);
    const [wards, setWard] = useState([]);

    const handleChangeCity = (cityName) => {
        if (data.length > 0) {
            let districts = data.find((item) => item.name === cityName).districts;
            console.log(districts);
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
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3%20')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                console.log('Error :-S', err);
                setError(err);
            });
    }, []);

    if (error) {
        alert('Đã có lỗi xảy ra');
    } else
        return (
            <>
                {/*Chọn address */}
                <div className="form-floating">
                    <select
                        className="form-select"
                        id="payment__selectAddress"
                        aria-label="Floating label select example"
                        defaultValue={'Địa chỉ mới'}
                    >
                        <option value="1">Địa chỉ mới</option>
                        <option value="1">
                            Ký túc xá khu A, khu phố 6, Linh Trung, Thủ Đức, thành phố Hồ Chí Minh
                        </option>
                    </select>
                    <label htmlFor="payment__selectAddress">Chọn địa chỉ</label>
                </div>

                {/*Nhập email*/}
                <div className="form-floating my-2">
                    <input type="email" className="form-control" id="payment__email" placeholder="name@example.com" />
                    <label htmlFor="payment__email">Email</label>
                </div>
                {/*Nhập Họ và tên  */}
                <div className="form-floating my-2">
                    <input type="text" className="form-control" id="payment__fullname" placeholder="Họ và tên" />
                    <label htmlFor="payment__fullname">Họ và tên</label>
                </div>

                {/*Nhập Số điện thoại  */}
                <div className="form-floating my-2">
                    <input type="text" className="form-control" id="payment__phoneNumber" placeholder="phone number" />
                    <label htmlFor="payment__phoneNumbe">Số điện thoại</label>
                </div>

                {/* Chọn tỉnh */}
                <div className="form-floating">
                    <select
                        className="form-select"
                        id="payment__selectCity"
                        aria-label="Floating label select example"
                        defaultValue={'----'}
                        disabled={data.length <= 0}
                        onChange={(e) => handleChangeCity(e.target.value)}
                    >
                        <option>----</option>
                        {data.map((item, index) => (
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
                        aria-label="Floating label select example"
                        defaultValue={'----'}
                        disabled={districts.length <= 0}
                        onChange={(e) => handleChangeDistricts(e.target.value)}
                    >
                        <option>----</option>
                        {districts && districts.map((item, index) => <option key={index}>{item.name}</option>)}
                    </select>
                    <label htmlFor="payment__selectDistricts">Quận / Huyện</label>
                </div>

                {/* Chọn phường/ xã */}
                <div className="form-floating">
                    <select
                        className={`form-select  ${wards.length > 0 ? '' : 'opacity-75'}`}
                        id="payment__selectWards"
                        aria-label="Floating label select example"
                        disabled={wards.length <= 0}
                        defaultValue={'----'}
                        onChange={() => {}}
                    >
                        <option>----</option>
                        {wards && wards.map((item, index) => <option key={index}>{item.name}</option>)}
                    </select>
                    <label htmlFor="payment__selectWards">Phường / xã</label>
                </div>

                {/*Nhập địa chỉ cụ thể */}
                <div className="form-floating my-2">
                    <input
                        type="text"
                        className="form-control"
                        id="payment__SpecificAddrr"
                        placeholder="phone number"
                        defaultValue=""
                    />
                    <label htmlFor="payment__SpecificAddr">Địa chỉ cụ thể</label>
                </div>

                {/* Ghi chú */}
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Ghi chú" id="payment__note"></textarea>
                    <label htmlFor="payment__note">Ghi chú</label>
                </div>
            </>
        );
}

export default AddressForm;
