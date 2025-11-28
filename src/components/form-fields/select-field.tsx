import {
    Controller,
    ControllerFieldState,
    ControllerRenderProps,
    FieldValues,
    Path,
} from "react-hook-form";
import { FormProps } from "./type";
import { Field, FieldError, FieldLabel } from "../ui/field";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SelectField = <T extends FieldValues>({
    form,
    name,
    disabled,
    label,
    children,
    itemClass,
    className,
    placeholder
}: FormProps<T> & {
    children: (
        field: ControllerRenderProps<T, Path<T>>,
        fieldState: ControllerFieldState
    ) => React.ReactNode;
    className?: string;
    placeholder?: string;
}) => {
    return (
        <Controller
            name={name}
            control={form.control}
            disabled={disabled}
            render={({ field, fieldState }) => (
                <Field
                    data-invalid={fieldState.invalid}
                    className={cn(itemClass)}
                >
                    {label && <FieldLabel>{label}</FieldLabel>}
                    <Select>
                        <SelectTrigger aria-invalid={fieldState.invalid} className={cn(className)}>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {children(field, fieldState)}
                        </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    );
};

export default SelectField;
