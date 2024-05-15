import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Nav = () => {
    const [name,setName]=useState(null)
    const { isSignedIn, user } = useUser();
    useEffect(()=>{
        if(isSignedIn){
            if(user.fullName){
                    setName(user.firstName)
            }
            console.log(user)
        }
    },[isSignedIn])
   
  return (
    <div className="h-[7vh] border-b border-slate-200 px-3 flex justify-between items-center">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex gap-16 items-center">
        {/* navigator */}
        <div className="flex gap-6 font-semibold text-sm" >
            <div className="flex gap-2">
                <div className="cursor-pointer" >Resume Scan</div>
                <div className="cursor-pointer text-xs flex items-center justify-center bg-orange-100 text-orange-400 px-2 rounded-3xl" >New Launch</div>
            </div>
            <div className="cursor-pointer" >Resume Keyowrds</div>
            <div className="cursor-pointer" >Resume Services</div>
            <div className="cursor-pointer" >Career Blogs</div>
            <div className="cursor-pointer" >About Us</div>
        </div>
        {/* User */}
        <div className="w-fit h-[80%] bg-slate-100 flex justify-between items-center px-3 py-1 gap-2 rounded-3xl font-sans font-medium">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {name&&(<span>{name}</span>)}
        </div>
      </div>
    </div>
  );
};

export default Nav;
