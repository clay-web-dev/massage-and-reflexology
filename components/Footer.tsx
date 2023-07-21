import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="m-auto">
        <div className="bg-blue-800 py-10">
          <div className="max-w-screen-lg m-auto flex max-lg:block max-lg:text-center items-start">
            <div className="flex-grow flex items-center justify-center">
              <div className="max-lg:pb-5">
                <h6 className="font-bold pb-2">Company</h6>
                <p className="pb-2">
                  <Link href="/">Home </Link>
                </p>
                <p className="pb-2">
                  <Link href="/about">About Us </Link>
                </p>
                <p className="pb-2">
                  <Link href="/contact">Contact Us </Link>
                </p>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="max-lg:pb-5">
                <h6 className="font-bold pb-2">Services</h6>
                <p className="pb-2">
                  <Link href="/residential">Residential Decorating </Link>
                </p>
                <p className="pb-2">
                  <Link href="/commercial">Commercial Decorating </Link>
                </p>
                <p className="pb-2">
                  <Link href="/exterior">Exterior Decorating </Link>
                </p>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="max-lg:pb-5">
                <h6 className="font-bold pb-2">Social</h6>
                <p className="pb-2">
                  <a href="" target="_blank">
                    Facebook
                  </a>
                </p>
                <p className="pb-2">
                  <a href="" target="_blank">
                    Instagram
                  </a>
                </p>
                <p className="pb-2">
                  <a href="" target="_blank">
                    Pinterest
                  </a>
                </p>
                <p className="pb-2">
                  <a href="" target="_blank">
                    Twitter
                  </a>
                </p>
                <p className="pb-2">
                  <a href="" target="_blank">
                    YouTube
                  </a>
                </p>
                <p className="pb-2">
                  <a href="" target="_blank">
                    TikTok
                  </a>
                </p>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div>
                <h6 className="font-bold pb-2">Contact</h6>
                <p className="pb-2">Email: info@theperfectpainter.co.uk</p>
                <p className="pb-2">Phone: 0203 105 5111</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-800 text-center">
          <div className=" max-w-screen-lg m-auto p-2">
            <p className="text-sm ">
              &copy; 2023 Your Website. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
