import ContactButton from "../CTAs/ContactButton";
import GetAQuoteButton from "../CTAs/GetAQuoteButton";
import Image from 'next/image';

const ExteriorSection: React.FC = () => {
  return (
    <section className="p-10">
      <div className="flex max-w-screen-lg m-auto">
        <div className="f-right col-1-2 left pr-10">
          <h5 className="text-blue-900 font-bold text-2xl">
            Exterior Painters and Decorators in London
          </h5>
          <br />
          <p>
            Painting the outside of a building is quite different from painting
            the inside.
          </p>
          <br />
          <p>
            Exteriors, exposed to rain and harsh elements means the exteriors
            have to be more durable. We always use top quality paints, tough
            fillers and materials to make sure the paint job will last as long
            as possible.
          </p>
          <br />
          <p>
            We can undertake all types of commercial painting and decorating,
            and our experience and expertise are second to none.
          </p>
          <br />
          <p>Please get in touch to find out more.</p>
          <br />
          <GetAQuoteButton />
          <ContactButton />
        </div>
        <div className="">
          <Image
            className=""
            src="https://theperfectpainter.co.uk/wp-content/themes/theperfectpainter/images/pages/exterior/paint.jpg"
            alt=""
          ></Image>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default ExteriorSection;
