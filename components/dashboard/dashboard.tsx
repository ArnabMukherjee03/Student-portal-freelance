import { EmployeeDetails } from "./employee-details"
import { EmployeeProfile } from "./employee-profile"

export const Dashboard = ()=>{
    return <main className="flex flex-col lg:flex-row h-full w-full lg:py-10 py-5 lg:px-4 px-2 gap-8 bg-[#f5f6f8]">
        <EmployeeProfile/>
        <EmployeeDetails/>
    </main>
}