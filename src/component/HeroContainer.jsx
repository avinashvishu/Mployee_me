import { Data } from "../utils/data"
import { MdWorkOutline } from "react-icons/md";
import { TbClockHour8 } from "react-icons/tb";

const HeroContainer = () => {
 
    function convertDateFormat(dateStr) {
        // Split the date string into components
        let dateParts = dateStr.split("/");
    
        // Create a new Date object (assuming the format is MM/DD/YYYY)
        let dateObj = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    
        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        // Get the day, month, and year from the Date object
        let day = dateObj.getDate();
        let month = monthNames[dateObj.getMonth()];
        let year = dateObj.getFullYear();
    
        // Format the date in "DD Month YYYY" format
        let formattedDate = `${day.toString().padStart(2, '0')} ${month} ${year}`;
    
        return formattedDate;
    }

  return (
    <div className="w-full h-full flex flex-col bg-white border border-x-slate-300 rounded-t-lg" >
        {/* head */}
        <div className="h-20 flex  justify-start items-center p-4 font-medium">Jobs({Data.length})</div>
        {/* body */}
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
            {Data.map((item,i)=>{
                return (
                <div key={i} className="w-full h-52 bg-slate-50 my-2 border border-x-slate-300 rounded-lg flex overflow-hidden">
                    {/* left */} 
                    <div className="w-[70%] h-full  p-3">
                        <div className="flex flex-col gap-3">
                           {/* image , role and skills */}
                           <div className="grid grid-rows-2 grid-cols-4 items-center w-fit  h-20 gap-2" >
                            <div className="row-span-2 w-fit border border-slate-50 rounded-3xl overflow-hidden h-full">
                                <img src={item.img} alt="CompanyLogo" className="h-full w-full" />
                            </div>
                            <div className="col-span-3 font-semibold">{item.role}</div>
                            <div className="col-span-3 self-start flex items-center gap-2">
                            <div className="">{item.companyName}</div>
                            <span className="h-1 w-1 bg-slate-600 rounded-full" ></span>
                            <div className="col-span-2 flex gap-1 text-sm">{item.skills.map((skill,i)=>{
                                let color,bgcolor;
                                switch (i) {
                                    case 0:
                                        color="text-orange-500";
                                        bgcolor="bg-orange-200";
                                        break;
                                    case 1:
                                        color="text-violet-500";
                                        bgcolor="bg-violet-200 ";
                                        break
                                    case 2:
                                        color="text-blue-500";
                                        bgcolor="bg-blue-200 ";
                                        break
                                    case 3:
                                        color="text-red-500";
                                        bgcolor="bg-red-200 ";
                                        break
                                    default:
                                        break;
                                }
                                return(
                                    <div key={i} className={`px-2 ${bgcolor} ${color} rounded-3xl`} >
                                        {skill}
                                    </div>
                                )
                            })}</div>
                            </div>
                           </div>
                           {/* exp , type and postedOn */}
                           <div className="h-6 w-fit gap-4  flex items-center">
                                <div className="h-full flex items-center gap-2"><MdWorkOutline className="text-slate-400"/><span>0-3 Years</span></div>
                                <div className="h-full border-x-2 border-slate-300 px-2 flex items-center gap-2"><TbClockHour8 className="text-slate-400"/><span>Full Time</span></div>
                                <div className="h-full flex items-center gap-2">
                                    <span className="text-slate-400">Posted on:</span>
                                    <span>{convertDateFormat(item.postedOn)}</span>
                                </div>
                           </div>
                        </div>
                     
                        {/* JD */}
                        <div>

                        </div>
                    </div>
                    {/* right */}
                    <div className="w-[30%] h-full bg-lime-400">

                    </div>
                </div>
                )
            })}
                
        </div>
        {/* bottom */}
        <div className="h-10  shadow-2xl p-4 border-t border-slate-200 flex justify-between items-center">
            <div>Showing 1-20 from 1250 data</div>
            <div>Pagination</div>
        </div>

    </div>
  )
}

export default HeroContainer