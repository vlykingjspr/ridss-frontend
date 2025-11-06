"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, InputForm, NumberInputForm, PasswordInputForm } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Link from "next/link";

const FormSchema = z
    .object({
        first_name: z.string().min(1, { message: "Please enter your first name." }),
        last_name: z.string().min(1, { message: "Please enter your first name." }),
        middle_name: z.string().optional(),
        date_of_birth: z.date(),
        username: z.string().min(6, 'Username must be at least 6 characters'),
        mobile_number: z.string().length(11, 'Please enter 11 digits'),
        password: z.string().min(6, { message: "Password must be at least 6 characters." }),
        confirmPassword: z.string().min(6, { message: "Confirm Password must be at least 6 characters." }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    });

export function ParentRegisterForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            middle_name: "",
            mobile_number: "",
            password: "",
            confirmPassword: "",
        },
    });

    const [open, setOpen] = useState(false)

    const watchDoB = form.watch("date_of_birth");

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <InputForm form={form} name="first_name" label="First Name" />
                    <InputForm form={form} name="last_name" label="Last Name" />
                    <InputForm form={form} name="middle_name" label="Middle Name" />
                    <FormField
                        control={form.control}
                        name="date_of_birth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <FormControl>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                id="date-picker"
                                                className="justify-between font-normal"
                                            >
                                                {watchDoB ? watchDoB.toLocaleDateString() : "Select date"}
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                    </FormControl>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={watchDoB}
                                            captionLayout="dropdown"
                                            onSelect={(date) => {
                                                field.onChange(date);
                                                setOpen(false);
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <NumberInputForm form={form} name="mobile_number" label="Mobile Number" itemClass="col-span-full" placeholder="09123456789" />
                </div>

                <div className="relative border-b border-border !my-8">
                    <div className="absolute top-1/2 -translate-y-1/2 text-sm bg-background font-medium pr-3">Security Details</div>
                </div>
            
                <InputForm form={form} name="username" label="Username" placeholder="ex. JohnDoe" />
                
                <PasswordInputForm
                    form={form}
                    name="password"
                    placeholder="••••••••"
                    label="Password"
                />
                <PasswordInputForm
                    form={form}
                    name="confirmPassword"
                    placeholder="••••••••"
                    label="Confirm Password"
                />
                
                <Link href={`?type=parent&verification=opt`}>
                    <Button className="w-full" type="submit">
                        Register
                    </Button>
                </Link>
            </form>
        </Form>
    );
}
