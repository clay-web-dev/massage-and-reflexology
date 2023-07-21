import GetAQuoteButton from "../CTAs/GetAQuoteButton";
import Image from "next/image";
import Painter from "../../assets/painter.jpg";

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us">
      <div className="flex max-w-screen-lg m-auto lg:pt-20 max-lg:py-10 max-lg:px-4">
        <Image className="max-lg:hidden" src={Painter} alt="painter" />
        <div className="lg:ml-15 m-auto max-lg:max-w-screen-lg">
          <div className="text-blue-900 font-bold">
            <h3 className="text-4xl max-lg:text-3xl">About Us</h3>
            <p className="">
              <strong>Professional Painters and Decorators in London.</strong>
            </p>
          </div>
          <br />
          <p>We are your local team of painters and decorators in London.</p>
          <p>
            No job is too big or too small; from a small flat to commercial
            offices, we can help.
          </p>
          <br />
          <p>
            If you are looking for a painter or decorator in London please give
            us a call.
          </p>
          <br />
          <h4 className="text-3xl text-blue-900 font-bold">
            <a href="tel:02031055111">0203 105 5111</a>
          </h4>
          <br />
          <p>OR, get your FREE quote today!</p>
          <br />

          <GetAQuoteButton />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
