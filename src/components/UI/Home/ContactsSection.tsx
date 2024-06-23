import ContactCard from "@/components/shared/ContactCard/ContactCard";
import { companyReview } from "@/constants";

const ContactsSection = () => {
    return (
        <div className="w-full py-10 bg-gradient-to-b from-light-purple to-[#f8fafa] rounded-t-[40px] space-y-8 px-20 text-center pb-20 pt-10 ">
                      <h6 className="text-base font-bold text-black"> OUR CLIENTS ARE SOME OF THE WORLD&apos;S... </h6>
               <h1 className="text-4xl lg:text-5xl font-bold text-black">Fastest growing companies & Brands.</h1>
           <div className="flex justify-center">
           <button className="btn text-white rounded-full bg-black hover:bg-blue-Purple">View All</button>
           </div>

       <div className="flex justify-center items-center gap-10">
       {
                companyReview.map((company) => (
                    <ContactCard key={company?.id} company={company}/>
                ))
            }
        </div>     
       
        </div>
    );
};

export default ContactsSection;