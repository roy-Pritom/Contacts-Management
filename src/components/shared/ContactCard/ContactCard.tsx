import { companyReview } from "@/constants";

const ContactCard = ({company}:{company:any}) => {
    return (
        // <div className="">
           
   

                    <div  className='2xl:w-[400px] w-[300px] h-[440px] relative'>
                        <div className='w-full h-full bg-blue-Purple absolute top-3 left-3 rounded-[35px]'></div>
                        <div className='w-full h-full bg-white absolute rounded-[35px] border border-gray-400 grid grid-cols-1 divide-y px-5 divide-slate-600'>
                            <div className='flex justify-center items-center flex-col gap-y-4 '>
                                <h1 className='text-5xl font-bold tracking-tight leading-10 font-syne text-black'>{company.companyName}</h1>
                                <p className='text-xl font-normal font-kanit text-black'>{company.companyOccupation}</p>
                                <p className='text-5xl font-bold font-syne text-blue-Purple tracking-tighter'>{company.percentage}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className="font-kanit text-base font-light">{company.domain}</p>
                            </div>
                            <div className='flex justify-center items-center'>

                                <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                                    <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                                        {/* <Link to={"#"} className="font-bold uppercase text-sm font-syne">{company.button}</Link> */}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

            

        
        // </div>
    );
};

export default ContactCard;