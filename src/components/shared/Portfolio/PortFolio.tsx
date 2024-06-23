import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
const PortFolio = ({images}:{images:string[]}) => {
    return (
     <div className="bg-[#5F4CDD] p-10 rounded-t-[40px]">
           <div className="rounded-[40px] bg-[#f7f7fa]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-[40px]">
          {/* 1st column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6 p-4 md:p-10 border-b md:border-0 lg:border-r border-slate-300">
              <Image
                className="w-20 h-20 rounded-full object-cover"
                src="/me.png"
                alt="me.png"
                width={80}
                height={80}
              />
            <h6 className="font-kanit font-normal text-2xl text-black">
              Talk to a growth expert
            </h6>
            <div className="flex flex-row justify-between items-start gap-2 w-full md:w-[70%] lg:w-full">
              <div className="py-2 space-y-6 text-black">
                <p className="text-sm lg:text-lg font-normal font-kanit ">
                  Sales:
                  <br />
                  <Link href="tel:+18009694409">018617-14318</Link>
                </p>
                <p className="text-sm lg:text-lg font-normal font-kanit ">
                  Support:
                  <br />
                  <Link href="tel:+18009694409">017944-11314</Link>
                </p>
              </div>
              <div className="py-2 space-y-6 text-black">
                <p className="text-sm lg:text-lg font-normal font-kanit ">
                  Sales:
                  <br />
                  <Link href="mailto:sales@acumensinc.com">
                    pritom2414@gmail.com
                  </Link>
                </p>
                <p className="text-sm lg:text-lg font-normal font-kanit ">
                  Support:
                  <br />
                  <Link href="mailto:support@acumensinc.com">
                    support@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
  
          {/* 2nd column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 p-4 md:p-10 border-b md:border-0 lg:border-r border-slate-300">
            <div className="space-y-3 flex flex-col justify-center items-center text-center pt-0 lg:pt-20">
              {/* <h5 className="text-2xl font-bold font-syne text-black">
                Address
              </h5> */}
              <div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center">
                {/* <span className="text-2xl text-blue-Purple"><SiGooglemaps /></span> */}
  
                <Image
                  className="object-contain h-7 w-7"
                  src="/map.webp"
                  alt="map.webp"
                  width={28}
                  height={28}
                />
              </div>
              <p className=" w-48 text-base md:text-xl font-normal font-syne  text-black">
                440 N Barranca Ave., Covina, CA 91723
              </p>
              <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  <Link
                    href="https://www.google.com/maps/place/440+N+Barranca+Ave,+Covina,+CA+91723,+USA/@34.0901483,-117.8812267,17z/data=!3m1!4b1!4m6!3m5!1s0x80c32859273c7a1b:0x11c9d90ae80b6ca!8m2!3d34.0901483!4d-117.8812267!16s%2Fg%2F11sshfp7sj?entry=ttu"
                    className="font-bold uppercase text-sm font-syne text-black"
                  >
                    view on map
                  </Link>
                </span>
              </div>
            </div>
          </div>
  
          {/* 3rd column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 px-4 md:p-10 md:border-l lg:border-0 border-slate-300">
            <div className="flex justify-between items-center my-[20%]">
              <div className="">
                <div className="flex justify-center items-center mb-4 text-black">
                  <h6 className="font-kanit uppercase text-[12px] md:text-base tracking-tight leading-6 mr-4">
                    REVIEWED ON
                  </h6>
                  <span className="text-green-600">
                    <FaStar />
                  </span>
                  <span className="text-green-600">
                    <FaStar />
                  </span>
                  <span className="text-green-600">
                    <FaStar />
                  </span>
                  <span className="text-green-600">
                    <FaStar />
                  </span>
                  <span className="text-green-600">
                    <FaStar />
                  </span>
                </div>
                <div className="flex justify-start items-center text-black">
                  <Image
                    className="object-contain h-8 mr-3"
                    src="/trustpilot.webp"
                    alt="trustpilot.webp"
                    width={100}
                    height={100}
                  />
                  <p className="font-kanit font-light tracking-tight text-lg">
                    4.9 Rating
                  </p>
                </div>
              </div>
              <div>
                <Image className="object-contain" src="/bbb.webp" alt="bbb.webp"     width={50}
                height={50}/>
              </div>
            </div>
          </div>
  
        </div>
          {/* logo Displaying Body */}
          <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-10 px-4 lg:px-10 py-10 bg-[#f7f7fa] rounded-b-[40px] ">
            {images?.map((image, index) => (
              <Image key={index} src={`/${image}`} alt={image}     width={80}
              height={80} className="md:w-[100px] w-[80px]" />
            ))}
          </div>
  
     
      </div>
     </div>
    );
};

export default PortFolio;