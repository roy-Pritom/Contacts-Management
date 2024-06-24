"use client"
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
    const handleRegister = async (values: FieldValues) => {
        console.log(values);
    }
    return (
        <div>
            <div className="h-full bg-gray-400 ">

                <div className="mx-auto ">
                    <div className="flex justify-center px-6 py-12 ">
                        {/* <!-- Row --> */}
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex ">
                            {/* <!-- Col --> */}
                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                style={{ backgroundImage: " url('https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-133556.jpg?t=st=1717490088~exp=1717493688~hmac=9b13c588adbfcb0d1523b6fadc72be3d02b85fcabec41cf78131cb45cffa2fdc&w=996')" }}></div>
                            {/* <!-- Col --> */}
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-black">Create an Account!</h3>
                                <MyForm onSubmit={handleRegister}  >
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">


                                            <MYInput
                                                fullWidth={true}
                                                name="name"
                                                label="name"
                                                placeholder="Name"
                                                required={true}
                                            />
                                        </div>
                                        <div className="md:ml-2">

                                            <MYInput
                                                fullWidth={true}
                                                required={true}
                                                name="age"
                                                label="age"
                                                type="number"
                                                placeholder="Age"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                            Email
                                        </label>
                                        <MYInput
                                            fullWidth={true}
                                            name="email"
                                            label="email"
                                            placeholder="email"
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">

                                            <MYInput
                                                fullWidth={true}
                                                name="password"
                                                label="password"
                                                placeholder="Password"
                                            />
                                            {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
                                        </div>
                                        <div className="md:ml-2">

                                            <MYInput
                                                fullWidth={true}
                                                name="bio"
                                                label="bio"
                                                placeholder="Bio"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <Link className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="/login">
                                            Already have an account? Login!
                                        </Link>
                                    </div>
                                </MyForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;