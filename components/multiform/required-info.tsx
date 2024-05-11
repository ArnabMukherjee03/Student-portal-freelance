"use client"
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
import { useState } from "react";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { requiredInfoSchema } from "@/schemas";

const RequiredInformation = () => {
  const { step, changeStep, updateUserData } = useUserFormContext();
  const form = useForm<z.infer<typeof requiredInfoSchema>>({
    resolver: zodResolver(requiredInfoSchema),
    mode: "onChange",
    defaultValues: {
      address:"",
      city: "",
      dob:"",
      image: null,
      state: "",
      hasCrime: "",
      crimeDescription: "",
      zipcode:"",
      country: ""
    },
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log(imagePreview);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("imageFile",file);
    
    if (file) {
      const reader = new FileReader() 
      reader.onload = () => {  
        setSelectedFile(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(step);
  

  const onSubmit = (values: z.infer<typeof requiredInfoSchema>) => {
    if (selectedFile) {
    updateUserData({...values,image:selectedFile}  );
    changeStep(step + 1);
    }
  };

  return (
    <MultiFormWrapper
      headerLabel="Required info"
      subHeaderLabel="Please provide following details"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <div className="space-y-4 ">
            {/* image and the address section */}
            <div className=" lg:flex lg:gap-8">
              {/* Image */}
               <div className="lg:w-[40%] lg:h-[180px]">
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    objectFit="cover"
                  />
                ) : (
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="w-full h-[180px] flex items-center justify-center border text-xs text-center cursor-pointer">
                          Choose Profile <br /> Image
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="file"
                            className="hidden"
                            onChange={handleImageChange}
                            accept="image/png, image/jpeg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input {...field} type="date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div> 
              {/* Address Section */}
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us your Address"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* City && STATE:: START */}
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="eg: New York"
                            type="text"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="eg: New York"
                            type="text"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="United States of America"
                          type="text"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="eg: 12345-1234"
                          type="text"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
                {/* City && STATE:: END */}
              </div>
            </div>
            {/* image and the address section ends here*/}
            <FormField
              control={form.control}
              name="hasCrime"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    Have You ever been convicted of a crime?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 
            <FormField
              control={form.control}
              name="crimeDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>If Yes, then explain</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="natue of offense,dates,sentences etc"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Footer />
        </form>
      </Form>
    </MultiFormWrapper>
  );
};

export default RequiredInformation;
