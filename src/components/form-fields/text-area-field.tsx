import { Controller, FieldValues } from "react-hook-form";
import { FormProps } from "./type";
import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";

type TextareaFieldProps<T extends FieldValues> = Omit<
	React.ComponentProps<"textarea">,
	"form"
> &
	FormProps<T>;

const TextareaField = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
	...props
}: TextareaFieldProps<T>) => {
	return (
		<Controller
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field, fieldState }) => (
				<Field className={cn(itemClass)}>
					{label && <FieldLabel>{label}</FieldLabel>}
                    <Textarea {...field} aria-invalid={fieldState.invalid} disabled={disabled} {...props} />
					{fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
				</Field>
			)}
		/>
	);
};

export default TextareaField;