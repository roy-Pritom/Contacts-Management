import ContactCard from "@/components/shared/ContactCard/ContactCard";
import { TContact } from "@/types/contact";
import Link from "next/link";

const ContactsSection = async () => {
    const res = await fetch('https://contacts-management-server-sigma.vercel.app/api/v1/contacts',{
        cache:"force-cache"
    });
    const contacts = await res.json();
    // console.log(contacts);
    return (
        <div className="w-full py-10 bg-gradient-to-b from-light-purple to-[#f8fafa] rounded-t-[40px] space-y-8 px-20 text-center pb-20 pt-10 ">
            <h6 className="text-base font-bold text-black"> OUR CONTACTS ARE SOME OF THE WORLD&apos;S... </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-black">Our Contacts</h1>
            <div className="flex justify-center">
              <Link href="/contacts">
              <button className="btn text-white rounded-full bg-black hover:bg-blue-Purple">View All</button>
              </Link>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
                {
                    contacts?.data?.map((contact:TContact) => (
                        <ContactCard key={contact?._id} contact={contact} />
                    ))
                }
            </div>

        </div>
    );
};

export default ContactsSection;