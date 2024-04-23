"use client";
import { CardWrapper } from "./card-wrapper"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { useTransition, useState } from "react";

export const LoginForm = ()=>{
    const [error,setError]= useState<string | undefined>("");
    const [success,setSuccess]= useState<string | undefined>("");
    const [ispending,startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password: ""
        }
    })

    const onSubmit = (values:z.infer<typeof LoginSchema>)=>{
        startTransition(()=>{
            login(values).then((data)=>{
                setError(data?.error)
            })
        })
    }

    return (
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't Have an Account?"
        backButtoHref="/auth/register"
        
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 "
                >
                    <div className="spac-y-4">
                        <FormField control={form.control}
                         name="email"
                         render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    placeholder="Enter your email address"
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
                            <FormItem >
                                <FormLabel >Password</FormLabel>
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
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}