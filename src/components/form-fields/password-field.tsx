import { Controller, FieldValues } from "react-hook-form";
import { InputFieldProps } from "./type";
import React from "react";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInputField = <T extends FieldValues>({
    form,
    name,
    label,
    disabled,
    itemClass,
    ...props
}: Omit<InputFieldProps<T>, "type">) => {
    const [passwordState, setPasswordState] = React.useState("password");

    return (
        <Controller
            control={form.control}
            name={name}
            disabled={disabled}
            render={({ field, fieldState }) => (
                <Field className={cn(itemClass)}>
                    {label && <FieldLabel>{label}</FieldLabel>}
                    <div className="relative group">
                        <Input
                            {...field}
                            type={passwordState}
                            disabled={disabled}
                            aria-invalid={fieldState.invalid}
                            {...props}
                        />
                        <Button
                            type="button"
                            className="absolute top-1/2 right-px h-[calc(100%-1.5px)] w-10 -translate-y-1/2 rounded-l-none border-l aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                            aria-invalid={fieldState.invalid}
                            variant={"ghost"}
                            onClick={() => {
                                if (passwordState === "password")
                                    setPasswordState("text");
                                else setPasswordState("password");
                            }}
                        >
                            <Eye
                                data-type={passwordState}
                                className="absolute scale-0 transition duration-250 data-[type=text]:scale-100"
                            />
                            <EyeClosed
                                data-type={passwordState}
                                className="absolute scale-100 transition duration-250 data-[type=text]:scale-0"
                            />
                        </Button>
                    </div>
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    );
};

export default PasswordInputField;