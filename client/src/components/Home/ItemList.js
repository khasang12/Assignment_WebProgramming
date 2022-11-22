import Item from "./Item";

export default function ItemsList() {
    const items = [
        {
            id: 1,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 1000000
        },
        {
            id: 2,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 4000000
        },
        {
            id: 3,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 6000000
        },
        {
            id: 4,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 10000000
        },
        {
            id: 5,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 20000000
        },
        {
            id: 6,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 40000000
        },
        {
            id: 7,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 80000000
        },
        {
            id: 8,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 100000000
        },
        {
            id: 9,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 150000000
        },
        {
            id: 10,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Item 1",
            cost: "300.000",
            time: new Date() - 200000000
        },
    ];
    
    return (
        <div className="w-full d-flex flex-column align-items-center">
            <div className="d-flex flex-row flex-wrap w-full justify-content-center mb-5">
                {items.map(
                    (item) => {
                        return <Item item={item} key={item.id}/>
                    }
                )}
            </div>
            <div className="my-6">
                <ul style={{listStyleType:"none"}} className="d-inline-flex align-items-center -space-x-px">
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg aria-hidden="true" style={{width:"20px",height:"20px"}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</button>
                    </li>
                    <li>
                        <button aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg aria-hidden="true" style={{width:"20px",height:"20px"}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}