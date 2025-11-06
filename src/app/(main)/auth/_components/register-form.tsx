"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, InputForm } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const FormSchema = z
    .object({
        first_name: z.string().min(1, { message: 'Please enter your first name.'}),
        last_name: z.string().min(1, { message: 'Please enter your first name.'}),
        middle_name: z.string().optional(),
        employee_type: z.enum([ 'staff', 'head' ]),
        email: z.string().email({ message: "Please enter a valid email address." }).optional(),
        password: z.string().min(6, { message: "Password must be at least 6 characters." }),
        confirmPassword: z.string().min(6, { message: "Confirm Password must be at least 6 characters." }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    });

export function RegisterForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "John",
            last_name: "Doe",
            middle_name: "",
            employee_type: "staff",
            email: "john.doe@gmail.com",
            password: "12345678",
            confirmPassword: "12345678",
        },
    });

    const router = useRouter()
    const sp = useSearchParams()

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        // toast("You submitted the following values", {
        //     description: (
        //         <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
        //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        // });

        toast.success('You have successfully registered.')
        router.push(`/${sp.get('type')}-${form.getValues('employee_type')}/dashboard`)
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <InputForm form={form} name="first_name" label="First Name" />
                <InputForm form={form} name="last_name" label="Last Name" />
                <InputForm form={form} name="middle_name" label={<span>Middle Name <span className="text-xs">(optional)</span></span>} />

                <FormField
                    control={form.control}
                    name="employee_type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Employee Type</FormLabel>
                            <Select defaultValue="staff">
                                <FormControl>
                                    <SelectTrigger className="w-full rounded-sm">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="staff">Staff</SelectItem>
                                    <SelectItem value="head">Head</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">
                    Register
                </Button>
            </form>
        </Form>
    );
}
