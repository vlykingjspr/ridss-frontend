import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { InputFieldProps } from "./type";

const NumberInputField = <T extends FieldValues>({
	form,
	name,
	label,
	disabled,
	itemClass,
    addOn,
	...props
}: InputFieldProps<T>) => {
	// Format phone number as XXX XXX XXXX
	const formatPhoneNumber = (value: string) => {
		const digits = value.replace(/\D/g, '');
		const limitedDigits = digits.slice(0, 10);
		
		if (limitedDigits.length >= 6) {
			return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6)}`;
		} else if (limitedDigits.length >= 3) {
			return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
		}
		
		return limitedDigits;
	};

	// Get only digits for form value
	const getDigitsOnly = (value: string) => {
		return value.replace(/\D/g, '');
	};

	// Handle cursor position after formatting
	const getCursorPosition = (prevValue: string, newValue: string, prevCursor: number) => {
		const digitsBeforeCursor = getDigitsOnly(prevValue.slice(0, prevCursor)).length;
		
		let digitCount = 0;
		let newCursorPos = 0;
		
		for (let i = 0; i < newValue.length && digitCount < digitsBeforeCursor; i++) {
			if (/\d/.test(newValue[i])) {
				digitCount++;
			}
			newCursorPos = i + 1;
		}
		
		return newCursorPos;
	};

	// Phone-specific handlers
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const prevValue = target.value;
		const prevCursor = target.selectionStart || 0;
		
		const formattedValue = formatPhoneNumber(e.target.value);
		const digitsOnly = getDigitsOnly(formattedValue);
		
		form.setValue(name, digitsOnly as any);
		
		setTimeout(() => {
			const newCursorPos = getCursorPosition(prevValue, formattedValue, prevCursor);
			target.setSelectionRange(newCursorPos, newCursorPos);
		}, 0);
	};

	const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const cursorPos = target.selectionStart || 0;
		const value = target.value;
		
		// Handle backspace specially
		if (e.key === 'Backspace') {
			if (cursorPos > 0 && value[cursorPos - 1] === ' ') {
				e.preventDefault();
				const newCursor = cursorPos - 1;
				target.setSelectionRange(newCursor, newCursor);
				
				const newValue = value.slice(0, newCursor - 1) + value.slice(newCursor);
				const formattedValue = formatPhoneNumber(newValue);
				const digitsOnly = getDigitsOnly(formattedValue);
				
				form.setValue(name, digitsOnly as any);
				
				setTimeout(() => {
					const finalCursorPos = getCursorPosition(value, formattedValue, newCursor - 1);
					target.setSelectionRange(finalCursorPos, finalCursorPos);
				}, 0);
				return;
			}
		}
		
		// Allow navigation and control keys
		const allowedKeys = [
			'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
			'Home', 'End', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
		];
		
		const isCtrlKey = e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase());
		const isCmdKey = e.metaKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase());
		
		if (allowedKeys.includes(e.key) || isCtrlKey || isCmdKey) {
			return;
		}
		
		// Only allow numbers (0-9)
		if (!/^[0-9]$/.test(e.key)) {
			e.preventDefault();
		}
	};

	return (
		<Controller
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field, fieldState }) => (
				<Field className={cn(itemClass)}>
					{label && <FieldLabel>{label}</FieldLabel>}
					<div className="relative">
                        <Input
                            {...field}
                            disabled={disabled}
                            value={formatPhoneNumber(field.value || '')}
                            onChange={handlePhoneChange}
                            onKeyDown={handlePhoneKeyDown}
                            placeholder="XXX XXX XXXX"
                            maxLength={12}
							aria-invalid={fieldState.invalid}
                            {...props}
                        />
						{addOn}
					</div>
					{fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
				</Field>
			)}
		/>
	);
};

export default NumberInputField;