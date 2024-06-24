"use client"
import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import MYModal from "@/components/Modals/MYModal";
import Loader from "@/components/shared/Loader/Loader";
import { useGetSingleContactQuery, useUpdateContactMutation } from "@/redux/api/contact/conatctApi";
import { TContact } from "@/types/contact";
import { hostImage } from "@/utils/hostImagetoImageBB";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
}
const EditContactModal = ({ open, setOpen, id }: TProps) => {
    const { data: contact, isLoading } = useGetSingleContactQuery(id);
    // console.log(contact);
    const [updateContact] = useUpdateContactMutation({});
    // defaultValues
    const defaultValues={
        ...contact,
        file:contact?.profilePicture
    }
    const handleSubmit = async (values: FieldValues) => {
        const toastId = toast.loading("Processing...")
        // host image to imgBB
        const imgData: any = await hostImage(values);
        values.phoneNumber = Number(values?.phoneNumber)
        // console.log(values);
        const contactData = {
            id,
            payload: {
                name: values?.name,
                email: values?.email,
                address: values?.address,
                phoneNumber: values?.phoneNumber,
                profilePicture: imgData?.data?.url
            }
        }
        // console.log(contactData);
        try {
            const res: any = await updateContact(contactData);
            // console.log(res);
            if (res?.data?.name) {
                toast.success("Contact updated successfully", { id: toastId, duration: 1000 });
                setOpen(false);

            }
            else {
                toast.error("Something went wrong", { id: toastId, duration: 1000 });
            }
        }
        catch (error: any) {
            console.log(error?.message);
        }
    }
    return (
        <MYModal open={open} setOpen={setOpen} title="Post a Contact" >
            {
                isLoading ?
                    (
                        <Loader />
                    )
                    :
                    (
                        <MyForm onSubmit={handleSubmit} defaultValues={defaultValues}  >
                            <Grid container spacing={3} >
                                <Grid item md={6} sm={12} xs={12}>
                                    <MYInput name="name" label="Name" fullWidth={true} required={true} />
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <MYInput name="email" label="Email" type="email" fullWidth={true} required={true} />
                                </Grid>

                                <Grid item md={6} sm={12} xs={12}>
                                    <MYInput name="phoneNumber" label="Number" type="number" fullWidth={true}
                                        required={true} />
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <MYInput name="address" label="Address" fullWidth={true} required={true} />
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <MYFileUploader name="file" label="Upload Photo" sx={{ width: "100%" }}
                                        required={true}
                                    />
                                </Grid>
                            </Grid>
                            <button className="btn text-white hover:bg-black bg-blue-Purple rounded-full" type="submit">
                                {/* <PostAddIcon /> */}
                                Submit</button>
                        </MyForm>
                    )
            }
        </MYModal>
    );
};

export default EditContactModal;