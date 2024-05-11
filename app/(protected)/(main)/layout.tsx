
import { checkFormFilled } from "@/actions/multi-form";
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

import {redirect} from "next/navigation"


type Props = {
  children: React.ReactNode;
};

const ProtectedLayout = async({ children }: Props) => {

  const isFormFilled = await checkFormFilled();

  if(!isFormFilled){
    redirect("/form")
  }
  
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
