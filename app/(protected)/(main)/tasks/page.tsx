import { auth, signOut } from "@/auth";
import { Tasks } from "@/components/Tasks/Tasks";
import {redirect} from "next/navigation"

const TasksPage = async ()=>{
    return <Tasks/>
}

export default TasksPage;