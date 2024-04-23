import {lusitana} from "@/components/fonts"
import {cn} from "@/lib/utils";
import Image from "next/image";


interface HeaderProps{
    label: string
};

export const Header =({
label
}: HeaderProps)=>{
    return(
        <div className="w-full flex flex-col gap-y-2 items-center justify-center ">
            {/* <h1 className={cn("text-2xl font-semibold", lusitana.className)}>
              Student Portal
            </h1> */}
            <div className="w-full flex items-center justify-center">
                <Image src="/MP_Logo.jpeg" alt="MP_LOGO" width={120} height={120}/>
            </div>
            <p className={cn("text-black",lusitana.className)}>
                {label}
            </p>
        </div>
    )
}