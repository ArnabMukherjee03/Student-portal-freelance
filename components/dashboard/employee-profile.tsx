import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { lusitana } from "../fonts";
import { cn } from "@/lib/utils";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { employeeDetails } from "@/actions/employee";

export const EmployeeProfile = async() => {
  const details = await employeeDetails();

  function convertToInitials(name: string) {
    const words = name.split(" ");
    let initials = "";
    words.forEach(word => {
        initials += word.charAt(0).toUpperCase();
    });
    return initials;
  
  }
  return (
    <aside className="w-full lg:w-[30%] bg-white shadow-md rounded-md flex flex-col items-center py-10 px-4 gap-4">
      <Avatar className="w-[80px] h-[80px]">
        <AvatarImage src={details?.userInfo?.image || undefined} />
        <AvatarFallback>{convertToInitials(details?.name || "")}</AvatarFallback>
      </Avatar>
      <h3 className={cn(lusitana.className)}>{details?.name}</h3>
      <div className="w-full h-[1px] bg-slate-100"></div>
      <div className={cn("flex gap-2 items-center text-sm ",lusitana.className)}>
        <MdLocalPhone/> 
        {details?.userInfo?.phone}
      </div>
      <div className="flex gap-2 items-center text-sm">
        <HiOutlineMail/> 
        {details?.email}
      </div>
    </aside>
  );
}
