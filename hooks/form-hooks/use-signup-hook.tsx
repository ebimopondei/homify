import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useSignup(){

    const formSchema = z.object(
        {
            firstname: z.string().min(3, {
                message: "First name must be at least 3 characters.",
            }),
            lastname: z.string().min(3, {
                message: "Last name must be at least 3 characters.",
            }),
            email: z.string().email( { message: 'Invalid email address'}),
            countryCode: z.string().min(3, { message: 'Select Country Code'}),
            phone: z.string().min(6, { message: 'Phone is too short'}),
            password: z.string().min(8, { message: 'Password must be atleast 8 character long'}),
            confirmPassword: z.string().min(8, { message: 'Password must be atleast 8 character long'}),
            agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  })
        }
    )
    .refine(
        (data) => data.password === data.confirmPassword, {
            message: "Passwords don't match",
            path: ["confirmPassword"], // This specifies which field the error should be associated with
        }
    );

    type FormData = z.infer<typeof formSchema>;
    

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            countryCode: '',
            email: '',
            firstname: '',
            lastname: '',
            phone: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false
        }
    });
    
    function onSubmit(values:any) {
        console.log(values);
    }

    return { onSubmit, form }
}