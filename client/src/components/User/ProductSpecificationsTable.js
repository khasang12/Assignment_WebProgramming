function ProductSpecificationsTable({ product }) {
  return (
    <div className="container">
      {/* VI xử lý - cart đồ hoạ */}
      <div className="row text-center border p-2 bg-table">
        <h5 className="m-0">Vi xử lý - card đồ hoạ </h5>
      </div>
      <div className="row border">
        <div className="col-6 text-center border-right">
          <p className="mx-2 my-2">Vi xử lý</p>
        </div>
        <div className="col-6 text-center">
          <p className="mx-2 my-2">Apple M2</p>
        </div>
      </div>
      <div className="row border">
        <div className="col-6 text-center border-right">
          <p className="mx-2 my-2">Card đồ hoạ(GPU)</p>
        </div>
        <div className="col-6 text-center">
          <p className="mx-2 my-2">{product.gpu}</p>
        </div>
      </div>

      {/* Bộ nhớ */}
      <div className="row text-center border p-2 bg-table">
        <h5 className="m-0">Bộ nhớ </h5>
      </div>
      <div className="row border">
        <div className="col-6 text-center border-right">
          <p className="mx-2 my-2">Ram</p>
        </div>
        <div className="col-6 text-center">
          <p className="mx-2 my-2">{product.ram}</p>
        </div>
      </div>
      <div className="row border">
        <div className="col-6 text-center border-right">
          <p className="mx-2 my-2">Ổ cứng</p>
        </div>
        <div className="col-6 text-center">
          <p className="mx-2 my-2">{product.disk}</p>
        </div>
      </div>

      {/* Màn hình */}
      <div className="row text-center border p-2 bg-table">
        <h5 className="m-0">Màn hình</h5>
      </div>
      <div className="row border">
        <div className="col-6 text-center border-right">
          <p className="mx-2 my-2">Kích thướt</p>
        </div>
        <div className="col-6 text-center">
          <p className="mx-2 my-2">{product.screen_size}</p>
        </div>
      </div>
      <div className="row border">
        <div className="col-6 text-center border-right">
          <p className="mx-2 my-2">Chất liệu</p>
        </div>
        <div className="col-6 text-center">
          <p className="mx-2 my-2">{product.screen_tech}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSpecificationsTable;
