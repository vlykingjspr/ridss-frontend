import { Controller, FieldValues } from "react-hook-form";
import { InputFieldProps } from "./type";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

const InputField = <T extends FieldValues>({
    form,
    name,
    label,
    disabled,
    itemClass,
    addOn,
    ...props
}: InputFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={form.control}
            disabled={disabled}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={cn(itemClass)}>
                    {label && <FieldLabel>{label}</FieldLabel>}
                    <div className="relative">
                        <Input {...field} aria-invalid={fieldState.invalid} disabled={disabled} {...props} />
                        {addOn}
                    </div>
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    )
}

export default InputField