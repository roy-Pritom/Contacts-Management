"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
const Header = () => {
    const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false })
    const NavBarItems = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/add-contacts'>Add Contacts</Link></li>
        <li><Link href='/contacts'>All Contacts</Link></li>
        <li><Link href='/about'>About Us</Link></li>
    </>
    return (
        <div className="flex justify-center items-center bg-gradient-to-b from-light-purple to-[#f8fafa]">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Image alt="logo" src='/logo2.png' width={40} height={40}/></li>
                            {NavBarItems}
                        </ul>
                    </div>
                   <div className="flex justify-center items-center ">
                   <Image alt="logo" src='/logo2.png' width={40} height={40} className="md:block hidden"/>
                  <Link href='/'>
                  <p className="btn btn-ghost md:text-2xl text-base font-bold md:px-2 p-0">ContactHub</p>
                  </Link>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavBarItems}

                    </ul>
                </div>
               <div className="navbar-end">
               <AuthButton/>
            
               </div>
            </div>
        </div>
    );
};

export default Header;