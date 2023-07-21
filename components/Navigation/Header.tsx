import Image from "next/image";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Pinterest from "../../assets/pinterest.svg";
import TikTok from "../../assets/tiktok.svg";
import Twitter from "../../assets/twitter.svg";
import YouTube from "../../assets/youtube.svg";
import Phone from "../../assets/phone.svg";
import Email from "../../assets/email.svg";

const Header: React.FC = () => {
  return (
    <div className=" bg-gray-100 border-b border-solid border-gray-200 max-sm:hidden">
      <div className="max-w-screen-lg mx-auto overflow-hidden flex justify-between">
        <div className="flex">
          <div className="border-l border-r border-solid border-gray-200 p-2">
            <a
              href="https://www.facebook.com/The-Perfect-Painter-112497620634903/"
              target="_blank"
            >
              <Image src={Facebook} alt="Instagram" className="h-4" />
            </a>
          </div>
          <div className="border-l border-r border-solid border-gray-200 p-2">
            <a href="https://www.instagram.com/perfectpainter/" target="_blank">
              <Image src={Instagram} alt="Instagram" className="h-4" />
            </a>
          </div>
          <div className="border-l border-r border-solid border-gray-200 p-2">
            <a href="https://pin.it/772HRDx" target="_blank">
              <Image src={Pinterest} alt="Pinterest" className="h-4" />
            </a>
          </div>
          <div className="border-l border-r border-solid border-gray-200 p-2">
            <a href="https://twitter.com/painter_perfect" target="_blank">
              <Image src={Twitter} alt="Twitter" className="h-4" />
            </a>
          </div>
          <div className="border-l border-r border-solid border-gray-200 p-2">
            <a
              href="https://www.youtube.com/channel/UCBPuYpftlOCYALZYZm0IT1g"
              target="_blank"
            >
              <Image src={YouTube} alt="YouTube" className="h-4" />
            </a>
          </div>
          <div className="border-l border-r border-solid border-gray-200 p-2">
            <a href="https://www.tiktok.com/@theperfectpainter" target="_blank">
              <Image src={TikTok} alt="TikTok" className="h-4" />
            </a>
          </div>
        </div>
        <div className="left f-right flex">
          <div className="border-l border-r border-solid border-gray-200">
            <a href="tel:02031055111" className="flex p-2">
              <Image src={Phone} alt="Phone" className="h-5 pr-1" />
              <span className="text-sm text-blue-900">0203 105 5111</span>
            </a>
          </div>
          <div className="border-l border-r border-solid border-gray-200">
            <a href="mailto:info@theperfectpainter.co.uk" className="flex p-2">
              <Image src={Email} alt="Email" className="h-5 pr-1" />
              <span className="text-sm text-blue-900">
                info@theperfectpainter.co.uk
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
