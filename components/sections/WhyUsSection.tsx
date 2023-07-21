import WhyUsCard from "../WhyUsCard";
import Free from "../../assets/free.svg";
import Cost from "../../assets/cost.svg";
import Hour from "../../assets/hour.svg";
import Safe from "../../assets/safe.svg";
import Insured from "../../assets/insured.svg";
import Bg from "../../assets/bg.jpg";

const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="cover-Image py-10 bg-cover"
      style={{
        backgroundImage: "url(" + { Bg } + ")",
      }}
    >
      <div className="m-auto max-w-screen-lg max-sm:px-4 max-lg:max-w-screen-sm">
        <div className=" text-white">
          <div className="w-1/2 max-lg:w-full">
            <h3 className="font-bold text-4xl max-lg:text-3xl">
              Why Choose Us
            </h3>
            <h6 className="font-bold text-lg">
              London Painting and Decorating
            </h6>
            <br />
            <h5 className="text-2xl font-bold  max-lg:text-2xl">
              Customer satisfaction is our priority
            </h5>
            <br />
            <div className="pb-5">
              <p>
                At The Perfect Painter, we provide top quality workmanship at
                very competitive prices. Our friendly team of dedicated and
                experienced professionals can help with all your painting and
                decorating needs.
              </p>
              <br />
              <p>
                We always use the necessary health and safety precautions. We
                will always go through all aspects of the job with you before we
                start any works.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between max-lg:block">
          <WhyUsCard image={{ Free }} copy={"Free Detailed Quick Notes"} />
          <WhyUsCard
            image={{ Cost }}
            copy={"Transparent prices, no hidden costs"}
          />
          <WhyUsCard image={{ Hour }} copy={"Flexible hours"} />
          <WhyUsCard image={{ Safe }} copy={"Health and Safety"} />
          <WhyUsCard image={{ Insured }} copy={"Liability insurance"} />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
