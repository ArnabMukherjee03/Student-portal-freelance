import { employeeDetails } from "@/actions/employee";
import { HiOutlineUser } from "react-icons/hi2";



export const PersonalDetails = async () => {
  const details = await employeeDetails();

  const data = [
    {
      label: "Name",
      value: details?.name,
    },
    {
      label: "Email",
      value: details?.email,
    },
    {
      label: "Employee Id",
      value: details?.id,
    },
    {
      label: "Gender",
      value: details?.userInfo?.gender
    },
    {
      label: "DOB",
      value: details?.userInfo?.dob
    },
    {
      label: "Country",
      value: details?.userInfo?.country
    },
    {
      label: "Contact Information",
      value: details?.userInfo?.phone
    },
    {
      label: "State",
      value: details?.userInfo?.state
    },
    {
      label: "City",
      value: details?.userInfo?.city
    },
    {
      label: "Zip Code",
      value: details?.userInfo?.zipcode
    },
    {
      label: "Address",
      value: details?.userInfo?.address
    },
    {
      label: "",
      value: ""
    },
    {
      label: "Emergency Contact",
      value: details?.userInfo?.secondaryphone
    },
  ];

  return (
    <main className="mt-8 px-2">
      <div className="flex gap-4 items-center">
        <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <HiOutlineUser className="m-auto text-blue-500" />
        </span>
        Personal Details
      </div>
      <div className="mt-4 flex flex-wrap">
        {data?.map((data, index) => {
          return (
            <div key={index} className="w-1/2 flex justify-between mt-4 text-sm">
              <p className="w-1/2">{data.label}</p>
              <p className="w-1/2">{data.value}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
