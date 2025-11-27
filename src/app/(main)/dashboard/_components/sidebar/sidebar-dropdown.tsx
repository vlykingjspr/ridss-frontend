import { Fragment } from "react/jsx-runtime";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Building2, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import useElementResize from "@/hooks/element-resize";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/click-outside";

export default function SidebarDropDown() {
    const isCollapsed = useSidebar().state
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { width } = useElementResize({
        el: triggerRef.current, defaultWidth: triggerRef.current?.offsetWidth!
    })

    useClickOutside(
        [triggerRef, dropdownRef],
        () => setDropdownOpen(false),
        dropdownOpen // Only listen when dropdown is open
    );

    return (
        <div className="relative">
            <SidebarMenuButton ref={triggerRef} onClick={() => setDropdownOpen(!dropdownOpen)} className="data-[slot=sidebar-menu-button]:p-2! data-[slot=sidebar-menu-button]:px-3! data-[slot=sidebar-menu-button]:gap-3 h-11 bg-background cursor-pointer border border-border">
                <Building2 className="size-4! text-primary" />
                <span className="mr-auto font-medium text-nowrap" hidden={isCollapsed === 'collapsed'}>Brgy. Malativas</span>
                <ChevronsUpDown className={cn(isCollapsed === 'collapsed' && 'hidden')} />
            </SidebarMenuButton>

            <AnimatePresence>
                {dropdownOpen && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, scale: 0.75, transformOrigin: 'top' }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.75, transformOrigin: 'top' }}
                        transition={{
                            type: 'tween',
                            ease: 'easeInOut',
                            duration: 0.075,
                        }}
                        style={{ width: width, top: triggerRef.current?.offsetHeight! + 4 }}
                        className="overflow-hidden rounded-md bg-background border border-border shadow-lg absolute z-50"
                    >
                        <div className="p-1.5 [&>button]:w-full [&>button]:h-10 [&>button]:justify-start [&>button]:rounded-sm">
                            <Button className="px-1 gap-3" variant="ghost">
                                <Building2 className="size-4! text-primary" />
                                Brgy New Visayas
                            </Button>
                            <Button className="px-1 gap-3" variant="ghost">
                                <Building2 className="size-4! text-primary" />
                                Brgy Malitbug
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
