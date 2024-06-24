import Link from "next/link";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Badge, IconButton, MenuItem } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
const AuthButton = () => {
    const contacts=useAppSelector((state:RootState)=>state.addBookmark.contacts)
    return (
        <div className="flex justify-center items-center">
            <Link href='/favorite-contact'>
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={contacts?.length} color="error">
                            <BookmarkAddedIcon />
                        </Badge>
                    </IconButton>
                </MenuItem>
            </Link>
            <Link href='/login'>
                <button className=" md:mr-5 mr-2 font-[500] text-base text-black hover:text-[#192824]">Login</button>
            </Link>
            <Link href='/register'>
                <button className="btn  btn-sm rounded-full w-[80px] text-white hover:bg-black bg-blue-Purple">Sign Up</button>
            </Link>
        </div>
    );
};

export default AuthButton;