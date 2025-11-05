"use client"

import { cn } from "@/lib/utils";
import { Tabs } from "@ark-ui/react/tabs";
import { PropsWithChildren, useState } from "react";
import AnimatedHover from "./animated-hover";

interface Props extends PropsWithChildren {
	activeValue: string;
	onValueChange?: (details: Tabs.ValueChangeDetails) => void;
    className?: string;
}
export function ArkUITab({ children, activeValue, className, onValueChange }: Props) {
	return (
		<Tabs.Root
			defaultValue={activeValue}
			value={activeValue}
			onValueChange={onValueChange}
		>
			<Tabs.List className={cn("relative h-full flex text-muted-foreground/80 text-sm font-medium", className)}>
				{children}
				<Tabs.Indicator className="-bottom-px w-[var(--width)] h-[3.5px] bg-primary" />
			</Tabs.List>
		</Tabs.Root>
	);
}

export function ArkUITabButton({
	children,
	activeValue,
	onValueChange,
}: Props) {
	return (
		<Tabs.Root
			defaultValue={activeValue}
			value={activeValue}
			onValueChange={onValueChange}
		>
			<Tabs.List className="relative h-full flex text-muted-foreground/80 text-sm font-medium">
				{children}
				<Tabs.Indicator className="w-[var(--width)] h-full bg-primary rounded-sm" />
			</Tabs.List>
		</Tabs.Root>
	);
}

interface ItemProps extends PropsWithChildren {
	id?: string;
	value: string | null;
	className?: string;
    withHover?: boolean;
}
export function ArkUITabItem({ id, children, value, className, withHover = true }: ItemProps) {
	const [isHovered, setIsHovered] = useState(withHover);

	return (
		<Tabs.Trigger
			value={value ?? (children?.toString() || "")}
			className={cn("h-8.5 px-3 transition duration-100 relative", className)}
            onMouseOver={() => withHover && setIsHovered(true)}
            onMouseOut={() => withHover && setIsHovered(false)}
		>
			{children}
			<AnimatedHover hover={isHovered} id={id||''} />
		</Tabs.Trigger>
	);
}
