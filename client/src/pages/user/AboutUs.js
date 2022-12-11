import goku from "../../assets/goku.png";
import img from "../../assets/avatar.jpg";
import doraemon from "../../assets/doraemon.png";
import neji from "../../assets/neji.png";
import shisui from "../../assets/shisui.png";


const AboutUs = () => {
  const avatarStyle = {
    display: "inline-block",
    position: "relative",
    textAlign: "center",
    border: "#e7e7e7",
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
    lineHeight: "3rem",
    maxWidth: "100%",
    width: "14rem",
    minWidth: "14rem",
    height: "14rem",
    lineHeight: "14rem",
  };
  return (
    <div class="container mt-4">
    <section class="py-5">
        <div class="container py-4">
          <header class="mb-5">
            <h2 class="text-uppercase lined mb-4">About Us </h2>
            <p class="lead">  BK Zone là một thương hiệu chuyên cung cấp các sản phẩm, dịch vụ và giải pháp về bộ nhớ, dữ liệu và các dịch vụ đi kèm. BK Zone là đối tác của các hãng sản xuất thiết bị công nghệ và bộ nhớ lưu trữ hàng đầu thế giới như Asus, Microsoft, Lenovo, Dell, Kingston, SanDisk, Toshiba, Transcend, WD, Seagate,..

BK Zone nghiên cứu và phát triển giải pháp để giải quyết những vấn đề liên quan đến lưu trữ và xử lý dữ liệu, nâng cấp và tăng tốc hệ thống.</p>
          </header>
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="accordion mb-5" id="aboutAccordion">
                      <div class="accordion-item mb-2">
                        <h5 class="accordion-header" id="aboutAccordion-headingOne">
                          <button class="accordion-button text-uppercase fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseOne" aria-expanded="false" aria-controls="aboutAccordion-collapseOne">Quá trình hình thành và phát triển</button>
                        </h5>
                        <div class="accordion-collapse collapse" id="aboutAccordion-collapseOne" aria-labelledby="aboutAccordion-collapseOne" data-bs-parent="#aboutAccordion" >
                          <div class="accordion-body">
                           <div class="row">
                              <div class="col-md-4"><img class="img-fluid" src={img} alt="..."/></div>
                              <div class="col-md-8">
                                <p>Công ty BK Zone thành lập vào tháng 08/2022 bởi 4 thành viên đồng sáng lập là Kha Sang, Trần Quốc Thái, Liễu Minh Vương và Lê Quang Tuấn Hào, lĩnh vực hoạt động chính của công ty bao gồm: mua bán sửa chữa các thiết bị liên quan đến điện thoại di động, thiết bị kỹ thuật số và các lĩnh vực liên quan đến thương mại điện tử.Bằng trải nghiệm về thị trường điện thoại di động và thiết bị công nghệ từ đầu những năm 2002, cùng với việc nghiên cứu kỹ tập quán mua hàng của khách hàng Việt Nam, BK Zone đã xây dựng một phương thức kinh doanh chưa từng có ở Việt Nam trước đây. Công ty đã xây dựng được một phong cách tư vấn bán hàng đặc biệt nhờ vào một đội ngũ nhân viên chuyên nghiệp và trang web www.thegioididong.com hỗ trợ như là một cẩm nang về điện thoại di động và một kênh thương mại điện tử hàng đầu tại Việt Nam.Hiện nay, số lượng điện thoại bán ra trung bình tại thegioididong.com khoảng 300.000 máy/tháng chiếm khoảng 15% thị phần điện thoại chính hãng cả nước.</p>                             
                                 </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item mb-2">
                        <h5 class="accordion-header" id="aboutAccordion-headingTwo">
                          <button class="accordion-button text-uppercase fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseTwo" aria-expanded="false" aria-controls="aboutAccordion-collapseTwo">Mục tiêu phát triển</button>
                        </h5>
                        <div class="accordion-collapse collapse" id="aboutAccordion-collapseTwo" aria-labelledby="aboutAccordion-collapseTwo" data-bs-parent="#aboutAccordion" >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-md-4"><img class="img-fluid" src={img} alt="..."/></div>
                              <div class="col-md-8">
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h5 class="accordion-header" id="aboutAccordion-headingThree">
                          <button class="accordion-button text-uppercase fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseThree" aria-expanded="false" aria-controls="aboutAccordion-collapseThree">Accordion Item No.1 a little too small</button>
                        </h5>
                        <div class="accordion-collapse collapse" id="aboutAccordion-collapseThree" aria-labelledby="aboutAccordion-collapseThree" data-bs-parent="#aboutAccordion">
                          <div class="accordion-body">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</div>
                        </div>
                      </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="ratio ratio-4x3">
                <iframe class="embed-responsive-item" src="//www.youtube.com/embed/upZJpGrppJA"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container py-4">
          <header class="mb-5">
            <h2 class="lined text-uppercase">Meet our team</h2>
          </header>
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6 text-center">
              <a href="team-member.html">
                <img
                  class="avatar p-2 mb-4"
                  style={avatarStyle}
                  src={img}
                  alt="Kha Sang"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Kha Sang
                </a>
              </h3>
              <p class="text-muted small text-uppercase">Founder</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="social-link facebook" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link twitter" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link youtube" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link email" href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
              <p class="small small text-gray-600">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <a href="team-member.html">
                <img
                  class="avatar p-2 mb-4"
                  style={avatarStyle}
                  src={img}
                  alt="Tran Quoc Thai"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Trần Quốc Thái
                </a>
              </h3>
              <p class="text-muted small text-uppercase">CTO</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="social-link facebook" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link twitter" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link youtube" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link email" href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
              <p class="small small text-gray-600">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <a href="team-member.html">
                <img
                  class="avatar p-2 mb-4"
                  style={avatarStyle}
                  src={img}
                  alt="Lieu Minh Vuong"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Liễu Minh Vương
                </a>
              </h3>
              <p class="text-muted small text-uppercase">Team Leader</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="social-link facebook" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link twitter" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link youtube" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link email" href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
              <p class="small small text-gray-600">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 text-center">
              <a href="team-member.html">
                <img
                  class="avatar avatar-xxl p-2 mb-4"
                  style={avatarStyle}
                  src={img}
                  alt="Le Quang Tuan Hao"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Lê Quang Tuấn Hào
                </a>
              </h3>
              <p class="text-muted small text-uppercase">Lead Developer</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="social-link facebook" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link twitter" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link youtube" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link email" href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
              <p class="small small text-gray-600">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-pentagon border-top border-gray-600">
        <div class="container py-4">
          <header class="mb-5">
            <h2 class="lined text-uppercase mb-4">What our customers say</h2>
            <p class="lead">
              We have worked with many clients and we always like to hear they
              come out from the cooperation happy and satisfied. Have a look
              what our clients said about us.
            </p>
          </header>

          <div class="d-flex flex-column">
            <div
              class="swiper-wrapper d-flex flex-row flex-wrap"
              id="swiper-wrapper-2d6cf61de75f92d6"
              aria-live="polite"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                class="swiper-slide h-auto mb-5 swiper-slide-active"
                role="group"
                aria-label="1 / 5"
                style={{ width: "300px", marginRight: "10px" }}
              >
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">
                    Bạch nhãn của tui nhìn thấu được tất cả mọi thứ, nhưng lại bị khuất phục trước hệ thống bảo mật tinh vi của BKZone.
                    </p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">Hyuuga Neji</h5>
                        <p class="small text-muted mb-0">Đệ Làng Lá</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={neji}
                        alt="John McIntyre"
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide h-auto mb-5 swiper-slide-next"
                role="group"
                aria-label="2 / 5"
                style={{ width: "300px", marginRight: "10px" }}
              >
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">
                    Tui sống đến nay 20 tuổi chưa thấy web nào xịn sò như vậy. Mong thầy cho điểm cao chứ tôi hơi bị ưng con web này rồi đấy.
                    </p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">Uchiha Shisui</h5>
                        <p class="small text-muted mb-0">Mangekyou Sharingan</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={shisui}
                        alt="John McIntyre"
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide h-auto mb-5"
                role="group"
                aria-label="3 / 5"
                style={{ width: "300px", marginRight: "10px" }}
              >
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">
                    Tim của tui có 4 ngăn, 3 ngăn dành cho bánh rán, 1 ngăn dành cho túi thần kì. Và không ngăn được việc điểm bài tập lớn BKZone là con số 10.
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">Doraemon</h5>
                        <p class="small text-muted mb-0">Không phải chồn</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={doraemon}
                        alt="John McIntyre"
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide h-auto mb-5"
                role="group"
                aria-label="4 / 5"
                style={{ width: "300px", marginRight: "10px" }}
              >
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">
                    BKZone bán hàng chất lượng thật sự mọi người ạ. Tui bật mode Saiyan cấp độ 4 gõ phím mà vẫn laptop vẫn không hề hấn gì.
                    </p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">Son Goku</h5>
                        <p class="small text-muted mb-0">Kamehameha</p>
                        <p class="small text-muted mb-0">auto win</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={goku}
                        alt="John McIntyre"
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic"
              style={{ width: "40px" }}
            >
              <span
                class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main l-0"
                tabindex="0"
                role="button"
                aria-label="Go to slide 1"
              ></span>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
