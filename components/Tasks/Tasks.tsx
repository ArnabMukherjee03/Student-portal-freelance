import { GrTask } from "react-icons/gr";
import { lusitana } from "../fonts";
import { cn } from "@/lib/utils";
import { TaskTable } from "./task-table";
import { Task, columns } from "./columns"

async function getData(): Promise<Task[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        hourlyRate: "12",
        status: "employed",
        organisation: "xyz",
        startDate: "08-03-2024",
        endDate: "08-04-2024",
        shift: "first",
        assignTask: "cooking"
      },
      {
        id: "728ed53f",
        hourlyRate: "12",
        status: "employed",
        organisation: "New",
        startDate: "08-03-2024",
        endDate: "08-04-2024",
        shift: "full day",
        assignTask: 'Cleaning'
      },
      {
        id: "728ed52f",
        hourlyRate: "14",
        status: "not employed",
        organisation: "MGH",
        startDate: "08-03-2024",
        endDate: "08-04-2024",
        shift: "second",
        assignTask: "Front Desk"
      },
      
    ]
  }

export const Tasks = async() => {
    

      const data = await getData()
  return (
    <main className="bg-[#f5f6f8] p-4 h-full">
      <div className="bg-white shadow-md w-full h-auto rounded-md">
        {/* HEading */}
        <div className={cn("flex gap-4 items-center py-6 px-8",lusitana.className)}>
          <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <GrTask className="m-auto text-blue-500" />
          </span>
          Assign Tasks
        </div>
        <TaskTable columns={columns} data={data}/>
      </div>
    </main>
  );
};
