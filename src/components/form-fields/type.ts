import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormProps<T extends FieldValues> = {
	form: UseFormReturn<T>;
	name: Path<T>;
	label?: string | React.ReactNode;
	disabled?: boolean;
	itemClass?: string;
    addOn?: React.ReactNode;
};

export type InputFieldProps<T extends FieldValues> = Omit<
    React.ComponentProps<"input">,
    "form"
> &
    FormProps<T>;