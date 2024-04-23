"use client"
import { useSession } from "next-auth/react"
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
// import { getUserById } from "@/helpers/user";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: Props) => {
  
  return (
    <>
      <MobileHeader/>
      <Sidebar className="hidden lg:flex"/>
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="h-full">{children}</div>
      </main>
    </>
  );
};

export default ProtectedLayout;
