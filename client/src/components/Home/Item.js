export default function Item({ item }) {
    return (
        <div
            style={{ width: '288px' }}
            className="d-flex flex-column rounded m-2 border border-info rounded-2xl hover:border-2 hover:border-[#1488d8]"
        >
            <div className="w-full h-72">
                <a href="/details?id=P123456577">
                    <img alt="item" src={item.image} className="w-100 image-fluid rounded-t-2xl" />
                </a>
            </div>
            <div className="flex flex-column p-4">
                <div className="mb-1 fs-1 fw-bold">{item.name}</div>
                <div className="fs-3 text-[#030981] font-semibold">{item.cost} VNĐ</div>
                <div className="fs-6 text-[#1488D8] font-semibold">1 tháng trước</div>
            </div>
        </div>
    );
}
