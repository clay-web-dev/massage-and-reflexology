import ContactButton from "../CTAs/ContactButton";
import GetAQuoteButton from "../CTAs/GetAQuoteButton";
import Image from "next/image";
import Painter from "../../assets/painter.jpg";

const CommercialSection: React.FC = () => {
  return (
    <section id="service-content">
      <div className="flex max-w-screen-lg m-auto py-10">
        <div className="f-right col-1-2 left pr-10">
          <h5 className="text-blue-900 font-bold text-2xl">
            Commercial Painters and Decorators in London
          </h5>

          <br />
          <p>
            Repairs and maintenance of all types of commercial properties. From
            shops to offices we can help with all types of commercial painting
            and decorating. We use the same eye for detail and attention to care
            on all of our jobs.
          </p>
          <br />
          <p>
            Customer satisfaction is our priority. Please get in touch to find
            out more.
          </p>
          <br />
          <GetAQuoteButton />
          <ContactButton />
        </div>
        <div className="f-right col-1-2 right">
          <Image className="col-1-1 dis-b mar-0-a" src={Painter} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
