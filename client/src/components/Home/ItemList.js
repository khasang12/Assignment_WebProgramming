import Item from './Item';

export default function ItemsList() {
    const items = [
        {
            id: 1,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 2,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 3,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 4,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 5,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 6,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 7,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 8,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 9,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
        {
            id: 10,
            image: '//bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-avita-pura-ns14a6vnf541-sgc.jpg?v=1669029239000',
            name: 'Macbook Air M2 Midnight MLY33SA/A (Apple M2, 8-Cores GPU, Ram 8GB, SSD 256GB, 13.6 Inch IPS Retina)',
            cost: '28.000.000',
            star: 3.4,
        },
    ];

    return (
        <div className="w-full d-flex flex-column align-items-center">
            <div className="d-flex flex-row flex-wrap w-full justify-content-center mb-5">
                {items.map((item) => {
                    return <Item item={item} key={item.id} />;
                })}
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-lg">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true" className='ml-auto'>&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true" className='ml-auto'>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
