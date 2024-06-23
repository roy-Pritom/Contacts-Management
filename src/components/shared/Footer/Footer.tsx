import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
// importing Footer constants from constants folder
import { footerServiceLinks1,AboutUs } from "../../../constants/index";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full pb-[30px] sm:pb-0 bg-[rgb(229,231,235)]">
    <footer>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:text-left justify-items-center items-start py-5">

      
        <div className="space-y-5 col-span-1 md:col-span-2">
          <h5 className="text-2xl font-bold font-syne text-black text-center">
            Services
          </h5>
          <div className="flex justify-center flex-col lg:flex-row lg:justify-between items-start gap-2 lg:gap-8">
            <div>
              <ul className="cursor-pointer flex flex-col gap-y-2">
                {footerServiceLinks1?.map((link, index) => (
                  <Link
                    key={index}
                    href={link.route}
                    className="text-lg font-kanit font-light tracking-normal leading-6"
                  >
                    <div
                      key={index}
                      className="relative inline-block rounded-full transition duration-300 ease-in-out"
                    >
                      <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <ul className="cursor-pointer flex flex-col gap-y-2">
                {footerServiceLinks1?.map((link, index) => (
                  <Link
                    key={index}
                    href={link.route}
                    className="text-lg font-kanit font-light tracking-normal leading-6"
                  >
                    <div
                      key={index}
                      className="relative inline-block rounded-full transition duration-300 ease-in-out"
                    >
                      <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h5 className="text-2xl font-bold font-syne text-black">About Us</h5>
          <ul className="cursor-pointer flex flex-col gap-y-2">
            {AboutUs?.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className="text-lg font-kanit font-light tracking-normal leading-6"
              >
                <div
                  key={index}
                  className="relative inline-block rounded-full transition duration-300 ease-in-out"
                >
                  <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
        </div>

        <div className="space-y-5 col-span-1">
          <h5 className="text-2xl font-bold font-syne text-black">
            Follow Us
          </h5>
          <ul className="w-full h-full flex flex-row justify-start items-center gap-4">
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link href="https://www.linkedin.com" target="_blank">
                <Image
                  src="/linkedin.webp"
                  className="h-full w-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link href="https://www.facebook.com/acumensincdotcom/" target="_blank">
                <Image
                  src="/facebook.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link href="https://www.instagram.com/acumensmediainc/" target="_blank">
                <Image
                  src="/instagram.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link href="https://www.twitter.com" target="_blank">
                <Image
                  src="/twitternew.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className="h-11 w-11 -translate-x-2 text-xl cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link href="https://www.youtube.com/@acumensmediainc" target="_blank">
                <Image
                  src="/youtubenew.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
    <div className="footer footer-center p-4 text-base-content border-t-2 border-black">
    <aside>
      <div className="space-x-3 font-kanit font-light leading-6 tracking-normal text-base pb-2 sm:pb-0">
  
        <div className="relative inline-block rounded-full transition duration-300 ease-in-out ml-2">
          <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
            © 2016 - 2024  <span className="uppercase">ContactHub Inc.</span>
          </span>
        </div>
  
  
        <div className="relative inline-block rounded-full transition duration-300 ease-in-out ml-2">
          <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
            <Link href='/terms-condition.htm'>Terms & Conditions</Link>
          </span>
        </div>
  
        <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
          <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
            <Link href='/privacy-policy.htm'>Privacy Policy</Link>
          </span>
        </div>
  
      </div>
    </aside>
  </div>
  </div>
  );
}

export default Footer