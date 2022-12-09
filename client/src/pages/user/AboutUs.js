import img from "../../assets/avatar.jpg";
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
            <h2 class="text-uppercase lined mb-4">About Universal </h2>
            <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          </header>
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="accordion mb-5" id="aboutAccordion">
                      <div class="accordion-item mb-2">
                        <h5 class="accordion-header" id="aboutAccordion-headingOne">
                          <button class="accordion-button text-uppercase fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseOne" aria-expanded="false" aria-controls="aboutAccordion-collapseOne">Accordion Item No.1</button>
                        </h5>
                        <div class="accordion-collapse collapse" id="aboutAccordion-collapseOne" aria-labelledby="aboutAccordion-collapseOne" data-bs-parent="#aboutAccordion" >
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
                      <div class="accordion-item mb-2">
                        <h5 class="accordion-header" id="aboutAccordion-headingTwo">
                          <button class="accordion-button text-uppercase fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseTwo" aria-expanded="false" aria-controls="aboutAccordion-collapseTwo">Accordion Item No.2</button>
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
                  alt="Han Solo"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Han Solo
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
                  alt="Luke Skywalker"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Luke Skywalker
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
                  alt="Princess Leia"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Princess Leia
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
                  alt="Jabba Hut"
                />
              </a>
              <h3 class="h4 mb-1 text-uppercase">
                <a class="text-reset" href="team-member.html">
                  Jabba Hut
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
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin. He lay on his armour-like back, and if he lifted
                      his head a little he could see his brown belly, slightly
                      domed and divided by arches into stiff sections.
                    </p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={img}
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
                      The bedding was hardly able to cover it and seemed ready
                      to slide off any moment. His many legs, pitifully thin
                      compared with the size of the rest of him, waved about
                      helplessly as he looked. "What's happened to me? " he
                      thought. It wasn't a dream.
                    </p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={img}
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
                      His room, a proper human room although a little too small,
                      lay peacefully between its four familiar walls.
                    </p>
                    <p class="text-sm text-gray-600">
                      A collection of textile samples lay spread out on the
                      table - Samsa was a travelling salesman - and above it
                      there hung a picture that he had recently cut out of an
                      illustrated magazine and housed in a nice, gilded frame.
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={img}
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
                      It showed a lady fitted out with a fur hat and fur boa who
                      sat upright, raising a heavy fur muff that covered the
                      whole of her lower arm towards the viewer. Gregor then
                      turned to look out the window at the dull weather. Drops
                      of rain could be heard hitting the pane, which made him
                      feel quite sad.
                    </p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div>
                      <img
                        class="avatar p-1 flex-shrink-0"
                        src={img}
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
