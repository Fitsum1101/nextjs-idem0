import { getPublicAbsoluteURL } from "@/lib/utils";
import ContactInformation from "./ContactInformation";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";

const BannerlayoutTwo = () => {
  return (
    <section className="banner-layout2 pb-0 bg-ring bg-overlay-primary">
      <div className="bg-img absolute">
        {/* <img
          src={getPublicAbsoluteURL("assets/images/banners/8.jpg")}
          alt="background"
        /> */}
      </div>
      <div className="container-fluid">
        <div className="row">
          <ContactInformation />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default BannerlayoutTwo;
