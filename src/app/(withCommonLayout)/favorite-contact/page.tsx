"use client"

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ContactCard from "../contacts/components/ContactCard";
import { TContact } from "@/types/contact";

const FavoriteContactsPage = () => {
    const favoriteContacts = useAppSelector((state: RootState) => state.addBookmark.contacts);
    return (
        <div className="py-10 bg-gradient-to-b from-light-purple to-[#f8fafa]">
            <div className="flex justify-between mx-10 mb-8">
                <h3 className="text-2xl font-bold">Favorite Contacts</h3>
            </div>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10" data-aos="zoom-out-right">
                    {
                        favoriteContacts?.length === 0 ?
                            (
                                <div className="flex justify-center items-center my-10">
                                    <div role="alert" className="alert alert-warning ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Your favorite list are empty</span>
                                    </div>
                                </div>
                            )
                            :
                            (
                                favoriteContacts?.map((item: TContact, index: number) => <ContactCard key={index} item={item} />)
                            )
                    }
                </div>
            </div>


        </div>
    );
};

export default FavoriteContactsPage;