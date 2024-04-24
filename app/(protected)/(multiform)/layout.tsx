import { Sidebar } from "@/components/multiform/sidebar";
import { UserFormContextProvider } from "./multi-form-context";

type Props = {
  children: React.ReactNode;
};

const MultiFormLayout = ({ children }: Props) => {
  return (
    <main className="flex items-center justify-center h-full py-2  bg-[#F0F6FF]">
      <div className="bg-white rounded-lg w-[80%] flex gap-[100px] p-4 ">
        <UserFormContextProvider>
        <Sidebar/>
        {children}
        </UserFormContextProvider>
      </div>
    </main>
  );
};

export default MultiFormLayout;
