import { partnerImages } from "@/constants";
import Slider from "./Slider";
import Image from "next/image";

const ImageSlider = () => {
    return (
        <div className="bg-[#f7f7fa] rounded-b-[40px]">
        <div className="flex flex-col md:flex-row justify-center items-center lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto gap-6 py-2 px-8 lg:px-0 lg:py-0 lg:gap-0">
          <div className="w-full md:w-[15%] p-2 font-syne font-bold text-lg tracking-tight uppercase leading-6 text-black">
            A PARTNER, NOT <br /> A VENDOR
          </div>
          <div className="hidden w-[85%] md:block">
            <Slider images={partnerImages} />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 pb-10 md:hidden">
          {
              partnerImages?.map((image,index) => (
                <Image key={index} src={`/${image}`} alt={image} className="w-28 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                width={96}
                height={96}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
};

export default ImageSlider;