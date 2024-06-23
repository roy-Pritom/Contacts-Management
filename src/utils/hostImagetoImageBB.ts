import { FieldValues } from "react-hook-form";

export const hostImage = async (values: FieldValues) => {
    const formData = new FormData();
    formData.append('image', values?.file as File)
    let imgData;
    if (values?.file) {
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBBKEY}`, {
            method: 'POST',
            body: formData
        })
        imgData = await res.json();
        // console.log(imgData);
    }
    return imgData;
}