import { useEffect, useState } from 'react';
import Item from './Item';
import Pagination from './Pagination';
import LazyLoad from 'react-lazy-load';
import axios from 'axios';

export default function ItemsList({ items }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
    console.log(items)
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="w-full d-flex flex-column align-items-center">
            <div className="d-flex flex-row flex-wrap w-full justify-content-center mb-5">
                {currentPosts!=[] && currentPosts.map((item) => {
                    return <Item item={item} key={item.id} />;
                })}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
        </div>
    );
}
