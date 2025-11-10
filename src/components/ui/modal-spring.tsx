"use client";

import { cn } from "@/lib/utils";
import {
	Portal,
	Overlay,
	Root,
	Content,
	Title,
	Description,
} from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren } from "react";
import { Button } from "./button";
import { X } from "lucide-react";
import { TooltipComponent } from "./tooltip";

export type ModalProps = PropsWithChildren & {
	open: boolean;
	onClose: CallableFunction;
	maxWidth?:
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "fit"
		| "full";
    thight?: boolean;
    preventAutoFocus?: boolean;
    outsideClick?: boolean;
};

export default function Modal({
	children,
	maxWidth = "md",
	open,
    thight,
    preventAutoFocus = false,
	onClose,
    outsideClick = false
}: ModalProps) {
	const maxWidthClass = {
		sm: "sm:max-w-sm",
		md: "sm:max-w-md",
		lg: "sm:max-w-lg",
		xl: "sm:max-w-xl",
		"2xl": "sm:max-w-2xl",
		"3xl": "sm:max-w-3xl",
		"4xl": "sm:max-w-4xl",
		"5xl": "sm:max-w-5xl",
		"6xl": "sm:max-w-6xl",
		"7xl": "sm:max-w-7xl",
		fit: "sm:max-w-fit",
		full: "max-w-full",
	}[maxWidth];

	return (
		<AnimatePresence >
			{open && (
				<Root
					open={open}
					onOpenChange={(close) => onClose(close)}
					data-slot="dialog"
					modal
				>
					<Portal>
						<Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 backdrop-blur-[2px] pointer-events-none" />

						<div
							className={cn(
								"fixed top-0 left-0 size-full inline-flex z-50 font-googlesans p-4 py-8",
								open ? "overflow-y-auto" : "overflow-hidden",
							)}
						>
							<motion.div
								initial={{
									scale: 0.97,
								}}
								animate={{
									scale: 1,
									opacity: 1,
									transition: {
										type: "spring",
										duration: 0.2,
										ease: "easeInOut",
										stiffness: 350,
										mass: 0.6,
									},
								}}
								exit={{
									opacity: 0,
									scale: 0.97,
									// animationDuration: 0.1,
									transition: {
										type: "tween",
										duration: 0.1,
									},
								}}
								className={cn(
									"bg-background w-full rounded-xl shadow-lg m-auto relative z-50 pointer-events-auto",
									maxWidthClass
								)}
							>
								<Content
									onWheel={(e) => e.stopPropagation()}
									data-slot="dialog-content"
									className={cn("rounded-[inherit] card-dark-bg", !thight && "p-5")}
                                    onOpenAutoFocus={e => preventAutoFocus && e.preventDefault()}
                                    onInteractOutside={(e) => outsideClick && e.preventDefault()}
								>
									<Title />
									<Description />
									{children}
								</Content>
							</motion.div>
						</div>
					</Portal>
				</Root>
			)}
		</AnimatePresence>
	);
}

export function ModalTitle({
	children,
	className,
}: PropsWithChildren & { className?: string }) {
	return <div className={cn("pb-5 text-2xl", className)}>{children}</div>;
}

export function ModalCloseButton({ ...props }: React.ComponentProps<"button">) {
    return (
        <TooltipComponent title="Close">
            <Button {...props} size={"icon"} variant={'ghost'} className={cn("rounded-full absolute top-2 right-2 dark:hover:bg-white/10", props.className)}>
                <X />
            </Button>
        </TooltipComponent>
    )
}
