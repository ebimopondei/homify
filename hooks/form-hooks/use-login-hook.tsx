import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useLogin(){

    const formSchema = z.object(
        {
            email: z.string().email( { message: 'Invalid email address'}),
            password: z.string().min(8, { message: 'Password must be atleast 8 character long'}),
            rememberMe: z.boolean()
        }
    )

    type FormData = z.infer<typeof formSchema>;
    

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: '',
            password: '',
            rememberMe: false
        }
    });
    
    function onSubmit(values:any) {
        console.log(values);
    }

    return { onSubmit, form }
}