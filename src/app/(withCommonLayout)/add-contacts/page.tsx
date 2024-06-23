"use client"
import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import PostAddIcon from '@mui/icons-material/PostAdd';
import Lottie from 'react-lottie';
import Chill from "../../../../Chill.json"
const AddContactsPage = () => {
    const handleSubmit = async (value: FieldValues) => {
          console.log(value);
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Chill,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="py-10 bg-gradient-to-b from-light-purple to-[#f8fafa] relative">
            <div className="w-[100px] h-[100px] absolute">

                <Lottie options={defaultOptions}
                    height="100%"
                    width="100%"
                />
            </div>
            <h3 className="text-center font-bold text-2xl mb-5 ">Add Contact</h3>
            <div className="w-[80%] mx-auto shadow-lg rounded-2xl p-10 bg-white">
                <MyForm onSubmit={handleSubmit}>
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
                        <PostAddIcon />
                        Add Contact</button>
                </MyForm>
            </div>
        </div>
    );
};

export default AddContactsPage;