import CustomImage from "@/components/custom/CustomImage";
const AboutHero = () => {
  return (
    <section className="page-title page-title-layout1 text-center bg-overlay bg-overlay-gradient bg-parallax">
      <CustomImage
        src="assets/images/page-titles/1.jpg"
        alt="slider"
        fill
        className="object-cover"
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <h1 className="pagetitle__heading">
              Help Challenge Critical Activities
            </h1>
            <p className="pagetitle__desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <a href="projects-grid.html" className="btn btn__primary mx-3">
                Our Services
              </a>
              <a
                className="video__btn video__btn-rounded video__btn-white popup-video mx-3"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              >
                <div className="video__player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="video__btn-title color-white">Our Video!</span>
              </a>
            </div>
            <nav>
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="about-us.html">Company</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  about
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
