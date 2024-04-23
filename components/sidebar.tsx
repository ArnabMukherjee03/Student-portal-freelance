import { cn } from "@/lib/utils";
import { lusitana } from "@/components/fonts";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import Image from "next/image";

type Props = {
  className?: string;
};
export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col py-4",
        className
      )}
    >
      <Link href="/dashboard">
        <div className="pt-8 pl-4 pb-7 flex items-center justify-center gap-x-3">
          <Image src="/MP_Logo.jpeg" alt="MP_LOGO" width={120} height={120} />
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 ">
        <SidebarItem
          href="/dashboard"
          label="Home"
          iconSrc="/home-svgrepo-com.svg"
        />
        <SidebarItem
          href="/tasks"
          label="Assign Tasks"
          iconSrc="/task-svgrepo-com.svg"
        />
        <SidebarItem
          href="/payrate"
          label="Pay Rate"
          iconSrc="/home-svgrepo-com.svg"
        />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            ></path>
          </svg>
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </div>
  );
};
