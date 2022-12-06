import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import { useContext } from 'react';
import { Context } from '../../stores';
import { addToCart } from '../../stores/actions';
import RateStar from '../../components/User/RateStar';

export default function Item({ item }) {

    //add product to cart
    const [state, dispatch] = useContext(Context);
    const handleAdđToCart = () => {
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.cost,
                quantity: 1,
                isSelected: false,
            }),
        );
    };
    return (
        <div
            style={{ width: '288px' }}
            className="wrapper d-flex flex-column rounded m-2 border border-info rounded-2xl hover:border-2 hover:border-[#1488d8]"
        >
            <div className="w-full h-72">
                <a href="/details?id=P123456577">
                    <img alt="item" src={item.image} className="w-100 image-fluid rounded-t-2xl" />
                </a>
            </div>
            <div className="d-flex flex-column p-4 pt-0">
                <div className="mb-1 fs-6 font-bold">{item.name}</div>
                <div className="fs-6 text-primary">{item.cost} VNĐ</div>
                <RateStar number={Math.round(item.star)} />
                <div className="mt-2 text-center">
                    <a href="/details?id=P123456577">
                        <button className="btn btn-secondary mr-3">
                            <GrIcons.GrView />
                        </button>
                    </a>
                    <button className="btn btn-primary" onClick={handleAdđToCart}>
                        <AiIcons.AiOutlineShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
}
