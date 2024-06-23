"use client"

import { useGetAllContactsQuery } from "@/redux/api/contact/conatctApi";
import ContactCard from "./components/ContactCard";
import { TContact } from "@/types/contact";
import Loader from "@/components/shared/Loader/Loader";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
{/* <div data-aos="zoom-out-right"></div> */}
const AllContactsPage = () => {
    useEffect(() => {
        AOS.init()
}, [])
    const [searchTerm, setSearchTerm] = useState<string>('')
    const query: Record<string, any> = {};
    query['name'] = searchTerm;
    const {data:contacts,isLoading}=useGetAllContactsQuery(query);
    // console.log(contacts);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentContacts = contacts?.slice(firstPostIndex, lastPostIndex);
    return (
        <div className="py-10 bg-gradient-to-b from-light-purple to-[#f8fafa]">
           <div className="flex justify-between mx-10 mb-8">
           <h3 className="text-2xl font-bold">All Contacts</h3>
           <TextField size="small" label="search" onChange={(e)=>setSearchTerm(e.target.value)} />
           </div>
         {
            isLoading ? 
            (
                <Loader/>
            )
            :
            (
               <div className="flex justify-center">
                 <div className="grid md:grid-cols-3 grid-cols-1 gap-10" data-aos="zoom-out-right">
                {
                    currentContacts?.map((item:TContact,index:number)=><ContactCard key={index} item={item}/>)
                }
            </div>
               </div>
            )
         }
          <div className="flex justify-center items-center mt-5">
                <Pagination
                    totalPosts={contacts?.length}
                    postPerPage={postPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default AllContactsPage;