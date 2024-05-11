import { MultiForm } from "@/components/multiform/multi-form";
import { auth} from "@/auth";
import {redirect} from "next/navigation"
import { checkFormFilled } from "@/actions/multi-form";

const MultiFormPage = async()=>{
    const session = await auth();
    const isFormFilled = await checkFormFilled();

    if(isFormFilled){
        redirect("/dashboard")
    }

    return <MultiForm data={{name:session?.user?.name||"",email:session?.user?.email||""}}/>
}

export default MultiFormPage;