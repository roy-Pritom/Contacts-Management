import { TContact } from "@/types/contact";
import { Tooltip } from "@mui/material";
import Image from "next/image";

const ContactCard = ({ contact }: { contact: TContact }) => {
    return (
        <div className='2xl:w-[400px] w-[300px] h-[440px] relative'>
            <div className='w-full h-full bg-blue-Purple absolute top-3 left-3 rounded-[35px]'></div>
            <div className='w-full h-full bg-white absolute rounded-[35px] border border-gray-400 grid grid-cols-1 divide-y px-5 divide-slate-600'>
                <div className='flex justify-center items-center flex-col gap-y-4 '>
             <Image src={contact?.profilePicture} className="w-[110px] h-[100px] rounded-full mx-auto  border-2 border-white
              " alt="profilePhoto"
                width={110}
                height={100}
            />
                    <h1 className='text-2xl font-bold tracking-tight leading-10 font-syne text-black'>{contact?.name}</h1>
                    <p className='text-xl font-normal text-black'>{contact?.email}</p>
                  
                </div>
                <div className='flex justify-center items-center'>
                  <Tooltip title="Phone Number">
                  <p className="text-base font-light">{contact?.phoneNumber}</p>
                  </Tooltip>
                </div>
                <div className='flex justify-center items-center'>

                    <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                        <span className="relative overflow-hidden">
                              <Tooltip title="Address">
                        <p className="text-base font-light">{contact?.address}</p>
                        </Tooltip>
                        </span>
                    </div>

                </div>
            </div>
        </div>




        // </div>
    );
};

export default ContactCard;