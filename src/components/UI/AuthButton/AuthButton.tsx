import Link from "next/link";

const AuthButton = () => {
    return (
        <div>
              <Link href='/login'>
                        <button className=" md:mr-5 mr-2 font-[500] text-base text-black hover:text-[#29CD9C]">Login</button>
                    </Link>
                    <Link href='/register'>
                        <button className="btn  btn-sm rounded-full w-[80px] text-white bg-black hover:bg-[#29CD9C]">Sign Up</button>
                    </Link>
        </div>
    );
};

export default AuthButton;