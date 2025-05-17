'use client'

import useSignup from "@/hooks/form-hooks/use-signup-hook"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";


export default function SignUpForm() {

    const { onSubmit, form} = useSignup();

    const countryCodes = [
  { value: "+234", label: "Nigeria (+234)" },
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+233", label: "Ghana (+233)" },
  { value: "+93", label: "Afghanistan (+93)" },
  { value: "+355", label: "Albania (+355)" },
  { value: "+213", label: "Algeria (+213)" },
  { value: "+1684", label: "American Samoa (+1684)" },
  { value: "+376", label: "Andorra (+376)" },
  { value: "+244", label: "Angola (+244)" },
  { value: "+1264", label: "Anguilla (+1264)" },
  { value: "+1268", label: "Antigua and Barbuda (+1268)" },
  { value: "+54", label: "Argentina (+54)" },
  { value: "+374", label: "Armenia (+374)" },
  { value: "+297", label: "Aruba (+297)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+43", label: "Austria (+43)" },
  { value: "+994", label: "Azerbaijan (+994)" },
  { value: "+1242", label: "Bahamas (+1242)" },
  { value: "+973", label: "Bahrain (+973)" },
  { value: "+880", label: "Bangladesh (+880)" },
  { value: "+1246", label: "Barbados (+1246)" },
  { value: "+375", label: "Belarus (+375)" },
  { value: "+32", label: "Belgium (+32)" },
  { value: "+501", label: "Belize (+501)" },
  { value: "+229", label: "Benin (+229)" },
  { value: "+1441", label: "Bermuda (+1441)" },
  { value: "+975", label: "Bhutan (+975)" },
  { value: "+591", label: "Bolivia (+591)" },
  { value: "+387", label: "Bosnia and Herzegovina (+387)" },
  { value: "+267", label: "Botswana (+267)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+1284", label: "British Virgin Islands (+1284)" },
  { value: "+673", label: "Brunei (+673)" },
  { value: "+359", label: "Bulgaria (+359)" },
  { value: "+226", label: "Burkina Faso (+226)" },
  { value: "+257", label: "Burundi (+257)" },
  { value: "+855", label: "Cambodia (+855)" },
  { value: "+237", label: "Cameroon (+237)" },
  // ... and many more countries
];

    return (
        <Form {...form}>
            <form className="w-full md:w-[483px]" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-3 grid-rows-1 md:grid-cols-2">
                    <div className="md: w-fulls">
                        <FormField
                        control={form.control}
                        name="firstname"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="border-black/50" placeholder="First name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <div className="md: w-fulls">
                        <FormField
                        name="lastname"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="border-black/50" placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </div>
                
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

                <div className="grid gap-3 grid-cols-2">
                    <div>
                        <FormField
                            control={form.control}
                            name="countryCode"
                            render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="border-black/50">
                                    <SelectValue  placeholder="Select Code" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {countryCodes.map((country, idx) => (
                                    <SelectItem key={idx} value={country.value}>
                                        {country.label}
                                    </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>

                    <div>
                        {/* You might want to add a separate field for the phone number itself */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    className="w-full rounded-md border border-black/50 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...field}
                                    placeholder="Phone number"
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
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
                                    <Input type="password" className="border-black/50" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <div className="md: w-fulls">
                        <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" className="border-black/50" placeholder="Confirm Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </div>

                <div className="text-xs ">

                    <p>Please read the <span className="text-blue-4000">Terms and Agreement</span> before you proceed.</p>
                    <FormField
                        control={form.control}
                        name="agreeToTerms"
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
                                    I have read and agree with the Terms and Condition and Privacy and Policy.
                                </label>
                            <FormMessage className="text-xs" />
                            </div>
                            </FormItem>
                        )}
                        />
                    {/* <div className="flex items-center space-x-2 my-2">
                        <Checkbox required id="terms" />
                        <label
                            htmlFor="terms"
                            className=" peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I have read and agree with the Terms and Condition and Privacy and Policy.
                        </label>
                    </div> */}
                </div>
                <Button className="w-full bg-blue-2000" type="submit">Submit</Button>
                <p className="my-4 text-xs">Already have an account? <Link href='/login' className="text-blue-2000">Log in</Link> </p>
            </form>

        </Form>
    )
}