import { useEffect, useState } from 'react';
import Item from './Item';
import Pagination from './Pagination';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';

export default function ItemsList({ itemList }) {
    const [items, setItems] = useState([]);

    const getProducts = async () => {
        return axios.get('http://localhost:8080/api/products/all').then((res) => res.data);
    };

    useEffect(() => {
        getProducts().then((data) => setItems(data));
    }, []);

    console.log('item', items);

    // const items = Array.from(Array(30), (_, x) => ({
    //   id: x,
    //   image:
    //     "//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000",
    //   name: "Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)",
    //   cost: 28000000,
    //   star: 3.4,
    // }));
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full d-flex flex-column align-items-center">
            <div className="d-flex flex-row flex-wrap w-full justify-content-center mb-5">
                {currentPosts.map((item) => {
                    return <Item item={item} key={item.id} />;
                })}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
        </div>
    );
}
