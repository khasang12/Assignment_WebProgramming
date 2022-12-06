import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import img1 from '../../assets/slider1_1.webp';
import img2 from '../../assets/slider1_2.webp';
import img3 from '../../assets/slider1_3.webp';
import img4 from '../../assets/slider1_4.webp';
import img5 from '../../assets/slider1_5.webp';
import ItemsList from '../../components/Home/ItemList';

function HomePage() {
    return (
        <div class="container">
            {/* <MyButton className="m-5" primary to="/details?id=P123456577">
                Goto Product details
            </MyButton> */}
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"  
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <img src={img1} class="block w-full align-items-center object-contain" alt="..." />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img src={img2} class="block w-full" alt="..." />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img src={img3} class="block w-full" alt="..." />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img src={img4} class="block w-full" alt="..." />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img src={img5} class="block w-full" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="fs-1 p-10 my-5 font-size text-center">Tin đăng mới</div>
            <ItemsList />
        </div>
    );
}

export default HomePage;
