"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Footer from "@/components/multiform/Footer";
import { useUserFormContext } from "@/hooks/useUserFormContext";
import { MultiFormWrapper } from "./wrapper";
import { employmentHistorySchema } from "@/schemas";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useTransition } from "react";
import { multiFormSubmit } from "@/actions/multi-form";
import { uploadImage } from "@/actions/imageUpload";

const EmploymentHistory = () => {
  const {
    addNew,
    handleDelete,
    step,
    changeStep,
    user,
    updateEmployment,
    employment,
  } = useUserFormContext();
  const form = useForm<z.infer<typeof employmentHistorySchema>>({
    resolver: zodResolver(employmentHistorySchema),
    mode: "onChange",
    defaultValues: {
      employer: "",
      position: "",
      leaveReason: "",
      startDate: "",
      endDate: "",
      payRate: "",
      address: "",
      contactInfo: "",
    },
  });
  
  const onSubmit = async () => {
    try {
      if(user){
        const file = user.image as File
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        const result = await uploadImage(buffer).catch(err=>console.log("Error::",err))

        if(result){
          delete user.image;
          await multiFormSubmit({...user,image:result.secure_url});
        }

        
      }
    } catch (error:any) {
      console.log(error.message);
    }
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    let { name, value } = e.target as HTMLInputElement;
    let onChangeValue = [...employment];
    onChangeValue[index][name] = value;
    updateEmployment(onChangeValue);
  };

  return (
    <MultiFormWrapper
      headerLabel="Employment History"
      subHeaderLabel="Please provide your previous Employment Details"
    >
      {employment.map((emp, index) => {
        return (
          <div key={index}>
            <Form {...form}>
              <form className={cn({ "mt-4": index !== 0 }, "space-y-2")}>
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="employer"
                    disabled={employment.length - 1 !== index}
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Employer</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            value={emp.employer}
                            placeholder="Enter employer name"
                            onChangeCapture={(e) => handleChange(e, index)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={employment.length - 1 !== index}
                            type="text"
                            value={emp.position}
                            placeholder="Enter position name"
                            onChangeCapture={(e) => handleChange(e, index)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="leaveReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for Leaving</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none"
                          disabled={employment.length - 1 !== index}
                          value={emp.leaveReason}
                          placeholder="Reason for leaving"
                          onChangeCapture={(e) => handleChange(e, index)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4 justify-between">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Joining Date</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={employment.length - 1 !== index}
                            type="date"
                            value={emp.startDate}
                            onChangeCapture={(e) => handleChange(e, index)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="date"
                            disabled={employment.length - 1 !== index}
                            value={emp.endDate}
                            onChangeCapture={(e) => handleChange(e, index)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="payRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pay Rate</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            disabled={employment.length - 1 !== index}
                            value={emp.payRate}
                            placeholder="00/hr"
                            onChangeCapture={(e) => handleChange(e, index)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Address</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          disabled={employment.length - 1 !== index}
                          value={emp.address}
                          placeholder="enter full address"
                          className="resize-none"
                          onChangeCapture={(e) => handleChange(e, index)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Info </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={employment.length - 1 !== index}
                          value={emp.contactInfo}
                          onChangeCapture={(e) => handleChange(e, index)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Footer /> */}
              </form>
            </Form>
            {index === employment.length - 1 && (
              <div className="flex gap-4 mt-4">
                <div
                  onClick={addNew}
                  className="w-8 h-8  border border-green-500 text-green-500 flex items-center justify-center cursor-pointer rounded-full"
                >
                  <IoIosAdd />
                </div>
                <div
                  onClick={() => {
                    handleDelete(index);
                  }}
                  className="w-8 h-8 border border-red-500 text-red-500 flex items-center justify-center cursor-pointer rounded-full"
                >
                  <MdDelete />
                </div>
              </div>
            )}
          </div>
        );
      })}
      <Footer onHandleNextStep={onSubmit}/>
    </MultiFormWrapper>
  );
};

export default EmploymentHistory;
