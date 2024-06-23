import { FieldValues } from "react-hook-form";

export const hostImage = async (values: FieldValues) => {
    const formData = new FormData();
    formData.append('image', values?.file as File)
    let imgData;
    if (values?.file) {
        const res = await fetch(`https://api.imgbb.com/1/upload?key=b3f46ffc2a5586c89b2b0345558951b8`, {
            method: 'POST',
            body: formData
        })
        imgData = await res.json();
        // console.log(imgData);
    }
    return imgData;
}