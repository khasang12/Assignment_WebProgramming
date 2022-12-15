import { Pagination, Button } from 'react-bootstrap';

import RateStar from './RateStar';
import StarPercen from './StarPercen';

const comments = [
  {
    avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    id: 'cmt1',
    p_id: 'P1',
    customer_id: 'C1',
    customerName: 'Minh Vương',
    content: 'Đắt vl',
    update_at: '29/09/2022 02:22',
    numStar: 2,
    reply: [],
  },
  {
    id: 'cmt2',
    avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    p_id: 'P1',
    customer_id: 'C2',
    customerName: 'Thái',
    content: 'Sản phẩm tạm được!',
    update_at: '29/09/2022 02:22',
    numStar: 4,
    reply: [],
  },
  {
    id: 'cmt3',
    avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    p_id: 'P1',
    customer_id: 'C3',
    customerName: 'Hào',
    content: 'Ngon bổ rẻ :>',
    update_at: '29/09/2022 02:22',
    numStar: 5,
    reply: [],
  },
  {
    id: 'cmt4',
    avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
    p_id: 'P1',
    customer_id: 'C4',
    customerName: 'Kha Sang',
    content: 'Đỉnh của chóp ',
    update_at: '29/09/2022 02:22',
    numStar: 5,
    reply: [],
  },
];
function Comments({ product_id = '' }) {
  return (
    <div id="comment">
      <h4 className="font-weight-normal mb-4">KHÁCH HÀNG NHẬN XÉT</h4>
      <div className="row pb-3 border-bottom">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <p className="m-0">Đánh giá trung bình</p>
          <h2 className="text-orange my-2 m-l-0"> 5 / 5 </h2>
          <p>({comments.length} đánh giá)</p>
        </div>
        {/* <div className="col-12">
          <StarPercen />
        </div> */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <p>Chia sẻ đánh giá của bạn</p>
          <Button variant="danger">Viết đánh giá của bạn</Button>
        </div>
      </div>

      <div className="row border-bottom py-2">
        <p className="ml-0 mb-2">Chọn xem đánh giá</p>
        <div>
          <select>
            <option>Tất cả</option>
            <option>Có ảnh</option>
            <option>không có ảnh</option>
          </select>
          <select className="ml-3">
            <option>Tất cả</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      {comments.map((item, index) => (
        <div key={index} className="border-bottom m-0 py-2">
          <div className="d-flex align-items-center">
            <img width="30px" src={item.avatar} alt="" />
            <span>{item.customerName}</span>
          </div>
          <div className="d-flex align-items-center">
            <RateStar number={item.numStar} />
            <span>{item.content}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="ml-0 text-primary">Trả lời</span>
            <span>{item.update_at}</span>
          </div>
        </div>
      ))}
      <div className="container d-flex justify-content-center my-3">
        <Pagination>
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
}

export default Comments;

/**Note: Một số action sẽ bổ sung sau:
 * Thêm comment
 * Trả lời comment
 * Comment của admin
 * Xử lý phân trang
 */
