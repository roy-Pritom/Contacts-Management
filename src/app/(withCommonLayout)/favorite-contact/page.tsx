"use client"

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ContactCard from "../contacts/components/ContactCard";
import { TContact } from "@/types/contact";

const FavoriteContactsPage = () => {
    const favoriteContacts=useAppSelector((state:RootState)=>state.addBookmark.contacts);
    return (
        <div className="py-10 bg-gradient-to-b from-light-purple to-[#f8fafa]">
        <div className="flex justify-between mx-10 mb-8">
        <h3 className="text-2xl font-bold">Favorite Contacts</h3>
        </div>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-10" data-aos="zoom-out-right">
             {
                 favoriteContacts?.map((item:TContact,index:number)=><ContactCard key={index} item={item}/>)
             }
         </div>
            </div>
         
 
     </div>
    );
};

export default FavoriteContactsPage;