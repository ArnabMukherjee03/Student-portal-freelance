import { auth, signOut } from "@/auth";
import { Dashboard } from "@/components/dashboard/dashboard";
import {redirect} from "next/navigation"

const SettingsPage = async ()=>{
    const session = await auth();

    // if(!session?.user?.isFormFilled){
    //     redirect("/form")
    // }
    return <Dashboard/>
}

export default SettingsPage;