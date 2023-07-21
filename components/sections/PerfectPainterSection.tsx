import Link from "next/link";
import Bg from "../../assets/bg.jpg";

const PerfectPainterSection: React.FC = () => {
  return (
    <div className=" bg-blue-900 text-white flex">
      <div className="col-1-2 left w-1/2 max-lg:w-full max-lg:ml-auto">
        <div className="flex lg:ml-auto center-left max-w-lg justify-end lg:pr-20 py-20 max-lg:max-w-screen-sm max-lg:m-auto">
          <div className="flex-item max-lg:px-4">
            <div className="font-bold">
              <h3 className="text-4xl max-lg:text-3xl">The Perfect Painter</h3>
              <p>Your local London painters and decorators.</p>
            </div>

            <br />
            <p>
              We are a team of experienced residential and commercial
              decorators. Here to help with all your painting and decorating
              needs from painting a whole house to wallpapering a small room.
            </p>
            <br />
            <p>
              Maybe you are starting a new project at home and not sure if you
              should call in the professionals. Our friendly team is always on
              hand to discuss your options. Give us a call today for a free
              quote and friendly advice.
            </p>
            <br />
            <Link href="/contact">
              <button className="text-xs rounded font-bold uppercase border-2 border-white p-3 hover:bg-white hover:text-blue-900 duration-200">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="col f-left col-1-2 cover-Image w-1/2 max-lg:hidden"
        style={{
          backgroundImage: "url(" + { Bg } + ")",
        }}
      />
    </div>
  );
};

export default PerfectPainterSection;
