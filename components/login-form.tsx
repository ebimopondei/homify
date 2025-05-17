'use client'

import useLogin from "@/hooks/form-hooks/use-login-hook"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { Instagram } from "lucide-react";


export default function LoginForm() {

    const { onSubmit, form} = useLogin();

    return (
        <Form {...form}>
            <form className="w-full md:w-[483px]" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="py-3">
                    <div>
                        <FormField
                            name="email"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className="border-black/50" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                </div>
                
                <div className="grid py-3 gap-3 grid-rows-1">
                    <div className="md: w-fulls">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className="border-black/50" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} 
                        />
                    </div>
                </div>

                <div className="text-xs ">
                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 my-2">
                                <FormControl>
                                    <Checkbox
                                        className="border-black/50"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1">
                                    <label>
                                        Remember me?
                                    </label>
                                    <FormMessage className="text-xs" />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <p className="my-4 text-xs">Forgot Email / Password? <Link href='/login' className="text-blue-2000">Reset</Link> </p>
                                
                <Button className="w-full bg-blue-2000 rounded-2xl py-5" type="submit">Log In</Button>
                <Button className="bg-grey-3000 text-black mx-auto py-5 w-full rounded-2xl my-3"><Instagram /> Sign up with Google</Button>
                <p className="my-4 text-xs">Don&apos;t have an account? <Link href='/signup' className="text-blue-2000">Create one for free</Link> </p>
            </form>
        </Form>
    )
}