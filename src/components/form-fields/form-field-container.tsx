import { FieldValues, UseFormReturn } from "react-hook-form";
import { FieldGroup } from "../ui/field";
import { cn } from "@/lib/utils";

const FormContainer = <T extends FieldValues>({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	onSubmit: () => void;
} & React.ComponentProps<"form">) => {
	return (
        <form {...props}>
            <FieldGroup className={cn(className)}>
                {children}
            </FieldGroup>
        </form>
    );
};

export default FormContainer;