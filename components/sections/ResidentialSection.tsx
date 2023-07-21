import ContactButton from "../CTAs/ContactButton";
import GetAQuoteButton from "../CTAs/GetAQuoteButton";
import Image from "next/image";
import Painter from "../../assets/painter.jpg";
import Check from "../../assets/check.svg";

const ResidentialSection: React.FC = () => {
  return (
    <section className="p-10 max-sm:p-4 max-sm:py-10">
      <div className="flex max-w-screen-lg m-auto max-lg:block">
        <Image src={Painter} alt="" className="sm:hidden pb-10" />
        <div className="f-right col-1-2 left sm:pr-10">
          <h5 className="text-blue-900 font-bold text-2xl">
            Residential Painters and Decorators in London
          </h5>
          <br />
          <p>
            Specialising in interior and exterior painting, we are fully
            equipped and trained to finish the job at the highest standard.
          </p>
          <br />
          <ul>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>Painting of walls and doors,</p>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>Repair and painting of window frames and sills,</p>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>General small carpentry jobs,</p>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>Tiling,</p>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>Plastering,</p>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>Wallpapering,</p>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <Image src={Check} alt="" className="pr-3" />
                <p>Miscellaneous painting and more.</p>
              </div>
            </li>
          </ul>
          <br />
          <p>Please get in touch to find out more.</p>
          <br />
          <GetAQuoteButton />
          <ContactButton />
        </div>
        <div className="">
          <Image src={Painter} alt="" className="max-sm:hidden" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ResidentialSection;
