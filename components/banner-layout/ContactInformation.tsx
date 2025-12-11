import { getPublicAbsoluteURL } from "@/lib/utils";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";
import { clientImages, testimonials } from "@/_constant/testimonial";

const ContactInformation = () => {
  return (
    <section className="pb-0 banner-layout2 bg-overlay bg-overlay-primary">
      <div className="bg-img">
        <img src="assets/images/banners/8.jpg" alt="background" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner">
            <div className="heading heading-light">
              <h3 className="heading__title mb-30">
                Satisfied Users Over The Globe
              </h3>
            </div>
            <div className="testimonials testimonials-wrapper">
              <div className="slider-with-navs">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="testimonial-item">
                    <p className="testimonial__desc color-white">{t.desc}</p>
                    <div className="testimonial__meta">
                      <h4 className="testimonial__meta-title">{t.name}</h4>
                      <p className="testimonial__meta-desc">{t.title}</p>
                      <div className="ml-2 w-20 h-10 relative ">
                        <Image
                          src={getPublicAbsoluteURL(t.thumb)}
                          alt={t.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="slider-nav">
                  <div className="testimonial__thumb">
                    <Image
                      src={getPublicAbsoluteURL(
                        "assets/images/testimonials/thumbs/1.png"
                      )}
                      width={50}
                      height={50}
                      alt="author thumb"
                    />
                  </div>
                  <div className="testimonial__thumb">
                    <Image
                      src={getPublicAbsoluteURL(
                        "assets/images/testimonials/thumbs/2.png"
                      )}
                      width={50}
                      height={50}
                      alt="author thumb"
                    />
                  </div>
                  <div className="testimonial__thumb">
                    <Image
                      src={getPublicAbsoluteURL(
                        "assets/images/testimonials/thumbs/3.png"
                      )}
                      width={50}
                      height={50}
                      alt="author thumb"
                    />
                  </div>
                  <div className="testimonial__thumb">
                    <Image
                      src={getPublicAbsoluteURL(
                        "assets/images/testimonials/thumbs/4.png"
                      )}
                      width={50}
                      height={50}
                      alt="author thumb"
                    />
                  </div>
                  <div className="testimonial__thumb">
                    <img
                      src={getPublicAbsoluteURL(
                        "assets/images/testimonials/thumbs/3.png"
                      )}
                      width={50}
                      height={50}
                      alt="author thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-light w-100 mt-60 mb-60"></div>

            <div className="heading heading-light">
              <h3 className="heading__title mb-30">Our Trusted Clients</h3>
            </div>

            <div className="clients">
              <div
                className="slick-carousel flex flex-row gap-4"
                data-slick='{"slidesToShow": 4, "arrows": false, "dots": false, "autoplay": true,"autoplaySpeed": 2000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 3}}, {"breakpoint": 767, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}'
              >
                {clientImages.map((src, index) => (
                  <div className="client" key={index}>
                    <Image
                      width={150}
                      height={60}
                      src={getPublicAbsoluteURL(src)}
                      alt="client"
                    />
                    <Image
                      width={150}
                      height={60}
                      src={getPublicAbsoluteURL(src)}
                      alt="client"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
