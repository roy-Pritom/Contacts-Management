import { TContact } from "@/types/contact";
import Image from "next/image";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";
import { useState } from "react";
import EditContactModal from "./EditContactModal";
import Swal from "sweetalert2";
import { useDeleteContactMutation } from "@/redux/api/contact/conatctApi";
const ContactCard = ({ item }: { item: TContact }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [deleteContact] = useDeleteContactMutation();

    // delete contact
    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const res = await deleteContact(id).unwrap();
                // console.log(res);
                if (res?._id) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Contact has been deleted.",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error deleting contact.",
                        icon: "error"
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "There was an error deleting contact.",
                    icon: "error"
                });
            }
        }
    };
    return (
        <div className="card w-[320px] ml-6 md:ml-0 md:w-96 glass overflow-hidden shadow-lg bg-white cursor-pointer transform transition-transform duration-500 hover:scale-105" >
            <figure className="bg-blue-Purple rounded-l-box border-b-8"><Image src={item?.profilePicture} className="w-[110px] h-[100px] rounded-full mx-auto my-12 border-2 border-white
              " alt="profilePhoto"
                width={110}
                height={100}
            /></figure>
            <div className="card-body">
                <h2 className="card-title ">{item?.name}</h2>
                <p><span className="font-semibold">Email</span> : {item?.email}</p>
                <p><span className="font-semibold">PhoneNumber</span> : {item?.phoneNumber}</p>
                <p><span className="font-semibold">address</span> : {item?.address}</p>

                <div className="card-actions justify-end">
                    <Tooltip title="Edit contact">
                        <button onClick={() => setOpen(true)} className="btn bg-blue-Purple hover:bg-black text-white rounded-full">
                            <EditNoteIcon className="text-green-500" />

                        </button>
                    </Tooltip>
                    <EditContactModal open={open as boolean} setOpen={setOpen} id={item?._id} />
                    <Tooltip title="Delete contact">
                        <button className="btn bg-blue-Purple hover:bg-black text-white rounded-full" onClick={() => handleDelete(item?._id)}>
                            <DeleteIcon className="text-red-500" />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>

    );
};

export default ContactCard;