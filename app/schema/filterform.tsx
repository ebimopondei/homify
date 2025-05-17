import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the Zod schema for the form
const formSchema = z.object(
    {
        location: z.string().min(3, {
            message: "Location must be at least 2 characters.",
        }),
        category: z.enum(["flat", "house", "land", ""],).optional(),
        keyword: z.string().optional(),
        min: z.enum(["1000000", "5000000", "10000000"],).optional(),
        max: z.enum(["50000000", "100000000", "200000000"],).optional(),
        bedroom: z.enum(["1", "2", "3", "4", "5"],).optional(),
        furnishing: z.enum(["unfurnished", "furnished"],).optional(),
        servicing: z.enum(["serviced", "unserviced"],).optional(),
        shared: z.enum(["yes", "no"],).optional(),
    }
);

// Define the form type based on the schema
type FormData = z.infer<typeof formSchema>;

// Create the form using React Hook Form
const useMyForm = () => { // Changed to useMyForm to avoid naming conflicts.  This is a factory.
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: "",
            category: '',
            keyword: ''
        },
    });
    return form;
}

function onSubmit(values: FormData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
}

export { formSchema, useMyForm, onSubmit }; // Export the schema, the form, and the onSubmit function
