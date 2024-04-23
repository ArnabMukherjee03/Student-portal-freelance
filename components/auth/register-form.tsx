"use client";
import { CardWrapper } from "./card-wrapper"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import { useTransition, useState } from "react";

export const RegisterForm = ()=>{
    const [error,setError]= useState<string | undefined>("");
    const [success,setSuccess]= useState<string | undefined>("");
    const [ispending,startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
        startTransition(()=>{
            register(values)
            .then(({error,success}:{error?:string,success?:string})=>{
                setError(error)
                setSuccess(success)
            })
        })
    }

    return (
        <CardWrapper
        headerLabel="Create An Account"
        backButtonLabel="Already have an Account?"
        backButtoHref="/auth/login"
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className="spac-y-4">
                    <FormField control={form.control}
                         name="name"
                         render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder="Enter your Name"
                                    type="text"
                                    autoComplete="off"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                         )}
                        />
                        <FormField control={form.control}
                         name="email"
                         render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder="Enter your Email"
                                    type="email"
                                    autoComplete="off"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                         )}
                        />
                         <FormField control={form.control}
                         name="password"
                         render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder="Enter your Password"
                                    type="password"
                                    autoComplete="off"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                         )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    type="submit"
                    className="w-full"
                    disabled={ispending}
                    >
                        Register
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}