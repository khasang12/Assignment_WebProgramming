import { Pagination, Button } from 'react-bootstrap';
import { icons } from 'react-icons/lib';
import RateStar from './RateStar';
import StarPercen from './StarPercen';

import * as BiIcons from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import images from '../../assets/images';
import { AiTwotoneStar } from 'react-icons/ai';

function addComment() {
  document.getElementById('test').style.display = 'block';
  document.getElementById('addCmtButton').disabled = true;
}

function Comments({ product_id = '' }) {
  const [comments, setComments] = useState([]);
  const [numstar, setNumstar] = useState(3);

  const getComments = async () => {
    return await axios.get(`http://localhost:8080/api/comments/${product_id}`).then((res) => res.data);
  };

  const handleAddcomment = async (e) => {
    e.preventDefault();
    let form = e.target;
    let comment = form.writecomment.value;
    if (sessionStorage.getItem('user')) {
      let user_id = JSON.parse(sessionStorage.getItem('user')).id;
      if (numstar > 0) {
        await axios({
          method: 'post',
          url: 'http://localhost:8080/api/comments/user',
          data: {
            product_id,
            user_id,
            comment,
            num_rate: numstar,
          },
        });
      }
    } else {
      alert('Vui lòng đăng nhập để đánh giá sản phẩm');
    }

    await getComments()
      .then((res) => setComments(res))
      .catch((err) => alert('err: ', err));

    form.writecomment.value = '';
  };

  useEffect(() => {
    getComments().then((res) => setComments(res));
  }, [product_id]);

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
          <a href="#writecomment" className="btn btn-danger text-white">
            Viết đánh giá của bạn
          </a>
        </div>
      </div>

      <div className="d-flex align-items-center border-bottom py-2">
        <p className="ml-0 mb-2">Chọn xem đánh giá</p>

        {/* <select>
            <option>Tất cả</option>
            <option>Có ảnh</option>
            <option>không có ảnh</option>
          </select> */}
        <select className="ml-3">
          <option>Tất cả</option>
          <option>1 sao</option>
          <option>2 sao</option>
          <option>3 sao</option>
          <option>4 sao</option>
          <option>5 sao</option>
        </select>
      </div>

      {comments.map((item, index) => (
        <div key={index} className="border-bottom m-0 py-2">
          <div className="d-flex align-items-center">
            <img width="30px" src={item.avatar || images.defaultAvatar} alt="" />
            <span>{item.first_name + item.last_name}</span>
          </div>
          <div className="">
            <RateStar number={item.num_rate} />
            <p>{item.comment}</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="ml-0 text-primary">{item.status}</span>
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
      <div style={{ display: 'none' }} className="d-flex flex-column">
        <div>
          <AiTwotoneStar className={`${numstar > 0 && 'text-warning'}`} size={40} onClick={() => setNumstar(1)} />
          <AiTwotoneStar className={`${numstar > 1 && 'text-warning'}`} size={40} onClick={() => setNumstar(2)} />
          <AiTwotoneStar className={`${numstar > 2 && 'text-warning'}`} size={40} onClick={() => setNumstar(3)} />
          <AiTwotoneStar className={`${numstar > 3 && 'text-warning'}`} size={40} onClick={() => setNumstar(4)} />
          <AiTwotoneStar className={`${numstar > 4 && 'text-warning'}`} size={40} onClick={() => setNumstar(5)} />
        </div>
        <form name="commentForm" onSubmit={(e) => handleAddcomment(e)}>
          <div class="form-group">
            <label for="writecomment">
              <span>
                <BiIcons.BiComment></BiIcons.BiComment>
              </span>{' '}
              Viết bình luận của bạn ở đây nhé:{' '}
            </label>
            <textarea class="form-control" id="writecomment" name="writecomment" rows="5" cols="115"></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">
              Đăng bình luận
            </button>
          </div>
        </form>
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
