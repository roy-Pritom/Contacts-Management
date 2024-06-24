"use client"
import Link from "next/link";
import Lottie from 'react-lottie';
import { TYpeAnimation } from "@/components/shared/TYpeAnimation/TYpeAnimation";
import BannerPhoto from '../../../../BannerPhoto.json'
import PostAddIcon from '@mui/icons-material/PostAdd';
const Banner = () => {
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BannerPhoto,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
    return (
        <div className="">
            <section className="lg:flex justify-between items-center flex-row  gap-4">
                <div className="lg:flex-1">
                  <TYpeAnimation/>
                    <p className="md:text-sm text-xs font-medium uppercase text-[#5D5FEF] mt-5">RECOMMENDED SERVICES</p>
                    {/* buttons */}
                    <div className="mt-5 flex gap-2 sm:max-w-[600px] max-w-full flex-wrap">
                       <Link href="#contacts">
                       <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-[#e5e5e5] `}>Master Your Connections: Effortless Contacts Organization</button>
                       </Link>
                       <Link href="#contacts">
                        <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-blue-Purple bg-opacity-25 `}>Effortless Contacts Management: Organize, and Stay Updated!</button>
                        </Link>
                        <Link href="#contacts">
                        <button className={`btn btn-sm hover:text-white hover:bg-black capitalize md:text-sm text-[10px] font-medium text-[#000000] myBtn w-max bg-[#e5e5e5] `}>Efficient Contacts Control: Stay Updated, Connected, and Organized</button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 mt-5">
                        {/* <Image src={ratingImg} width={37} height={29} alt="rating" /> */}
                        <p className="md:text-lg text-sm">Rated at <span className="font-bold">4.9</span> By <span className="font-bold">30000 + </span>Users Globally</p>
                    </div>
                  <Link href='/add-contacts'>
                  <button className='btn bg-blue-Purple text-white my-6 w-[200px] hover:bg-black rounded-full'>
                    <PostAddIcon/>
                    Add Contact</button>
                  </Link>

                </div>
                {/* video */}
                <div className=" md:h-[550px] h-[300px]  mt-8 ">
                <Lottie options={defaultOptions}
              height="100%"
              width="100%"
              />
                </div>

            </section>


        </div>
    );
};

export default Banner;