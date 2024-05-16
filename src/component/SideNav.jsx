import React, { useState } from "react";
import { FiLayout } from "react-icons/fi";
import { MdOutlineFactCheck } from "react-icons/md";
import { TbBookmark } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { BiSolidCircle } from "react-icons/bi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { TbHelpSquare } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
 
const SideNav = () => {
  const saved = ["UI/UX Designer", "Web Developer", "Analyst"];
  const [showHideSaved, setShowHideSaved] = useState(true);
  const [selected, setSelected] = useState(saved[0]);
  return (
    <div className="w-[15vw] border-r  border-slate-200 flex flex-col justify-between items-center py-3">
      {/* upper section */}
      <div className="w-full">
        <div className="flex gap-1 items-center pl-4 h-9 text-sm font-medium cursor-pointer hover:bg-slate-50 border-l-2 border-orange-500">
          <FiLayout size={20} /> Job Recommendation Tool
        </div>
        <div className="flex gap-1 items-center pl-4 h-9 text-sm font-medium cursor-pointer hover:bg-slate-50">
          <MdOutlineFactCheck size={20} /> History
        </div>
        <div>
          <div
            className="h-9 w-[90%] bg-slate-950 rounded-md  ml-2 flex justify-between px-2 cursor-pointer"
            onClick={() => setShowHideSaved(!showHideSaved)}>
            <div className="flex gap-1 items-center text-white text-sm font-medium">
              <TbBookmark size={20} color="#FF9800" /> Saved Jobs
            </div>
            <div className="text-white flex items-center">
              {showHideSaved ? (
                <RiArrowDropUpLine size={20} />
              ) : (
                <RiArrowDropDownLine size={20} />
              )}
            </div>
          </div>
          {showHideSaved && (
            <div className="mt-2 flex flex-col gap-2">
              {saved.map((item, i) => {
                return (
                  <div
                    className={`h-9 w-[90%] border border-slate-100 rounded-md hover:bg-slate-50  ml-2 flex gap-2 items-center px-2 cursor-pointer ${
                      selected == item ? "bg-slate-200" : null
                    } ${selected == item ? "text-orange-400" : null}`}
                    onClick={() => setSelected(item)}>
                    <BiSolidCircle
                      size={10}
                      color={selected == item ? "#FF9800" : "#D8DBE4"}
                    />
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex gap-1 items-center pl-4 h-9 text-sm font-medium cursor-pointer hover:bg-slate-50 mt-2">
          <PiCurrencyCircleDollar size={20} />
          Plan{" "}
          <span className="text-slate-600 font-normal text-sm">
            (Current: Free)
          </span>
        </div>
        <div className="flex gap-1 items-center pl-4 h-9 text-sm font-medium cursor-pointer hover:bg-slate-50">
          <FaPeopleLine size={20}/>
          Manage Profiles
        </div>
      </div>
      {/* lower section */}
      <div className="w-full">
          <div >
            <div className="flex items-center pl-4 h-9 text-sm text-slate-400 font-normal ">Help & Support</div>
            <div className="flex gap-1 items-center pl-4 h-9 text-sm font-medium cursor-pointer hover:bg-slate-50" ><LuSettings size={20}/> Settings</div>
            <div className="flex gap-1 items-center pl-4 h-9 text-sm font-medium cursor-pointer hover:bg-slate-50"><TbHelpSquare size={20}/> Help Center</div>
          </div>
          <div className="mt-2 w-full flex flex-col gap-2">
            <div className="h-9 w-[90%] border border-slate-100 rounded-md hover:bg-slate-50  ml-2 flex gap-2 items-center px-2 cursor-pointer">Current Plan:   {' '}Free</div>
            <div className="h-16 w-[90%] border-2 border-orange-400 rounded-md bg-orange-100  ml-2  cursor-pointer grid grid-rows-2 grid-cols-6">
                <div className="row-span-2 col-span-2 h-full w-full"><img src="/sidenav.svg" alt="logo" /></div>
                <div className="row-span-1 col-span-3 flex items-end justify-center text-sm font-medium">Upgrade to Pro</div>
                <div className="row-span-2 col-span-1 flex items-center justify-center"><IoIosArrowForward/></div>
                <div className="row-span-1 col-span-3 flex items-start justify-center text-sm text-slate-500">Get all features</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SideNav;
