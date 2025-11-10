"use client"

import { TypographySmall } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";


export default function ImmunizingBarangay() {
    return (
        <div className=" rounded-md border border-border p-3">
            <div className="mb-2">
                <TypographySmall className="text-[15px]">Current Immunization</TypographySmall>
            </div>
            <Card className="col-span-full rounded-md shadow-xs overflow-hidden border-none p-0 gap-0">
                <div className="h-12 grid grid-cols-6 items-center [&>div]:px-4 bg-primary border border-primary text-primary-foreground rounded-t-md">
                    <div className="col-span-2"> <TypographySmall>Barangay</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>BCG</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>HEPA B</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>IPV</TypographySmall> </div>
                    <div className="text-center"> <TypographySmall>OPV</TypographySmall> </div>
                </div>
                <div className="rounded-b-md border border-border border-t-0 divide-y divide-border">
                    {barangaysVials.map((brgy) => (
                        <ImmunizingBarangayCard key={brgy.id} brgy={brgy} />
                    ))}
                </div>
            </Card>
        </div>
    )
}

interface ImmunizingBarangayCardProps {
    brgy: {
        id: number;
        brgy: {
            name: string;
            contactPerson: string;
            contactNumber: string;
        };
        vaccines: {
            stock: number;
        }[];
    }
}
const ImmunizingBarangayCard = ({ brgy }: ImmunizingBarangayCardProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-12 grid grid-cols-6 items-center [&>div]:not-first:px-4">
            <div className="col-span-2"> 
                <div className="h-12 flex items-center justify-between px-4 hover:bg-secondary cursor-pointer" onClick={() => setOpen(!open)}>
                    <div className="flex items-center gap-2">
                        <span className="relative flex size-3 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                        </span>
                        <TypographySmall>{brgy.brgy.name}</TypographySmall>
                    </div>
                    <ChevronDown className="size-4" />
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto'}}
                            exit={{ height: 0 }}
                            transition={{
                                type: "keyframes",
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                            className="overflow-hidden bg-secondary/25 shadow-inner border-t border-border"
                        >
                            <div className="p-2 px-4">
                                <div className=""><TypographySmall className="text-muted-foreground">Head: </TypographySmall><TypographySmall>{brgy.brgy.contactPerson}</TypographySmall></div>
                                <div className=""><TypographySmall className="text-muted-foreground">Contact: </TypographySmall><TypographySmall>{brgy.brgy.contactNumber}</TypographySmall></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="text-center"> <TypographySmall>{brgy.vaccines[0].stock}</TypographySmall> </div>
            <div className="text-center"> <TypographySmall>{brgy.vaccines[1].stock}</TypographySmall> </div>
            <div className="text-center"> <TypographySmall>{brgy.vaccines[2].stock}</TypographySmall> </div>
            <div className="text-center"> <TypographySmall>{brgy.vaccines[3].stock}</TypographySmall> </div>
        </div>
    )
}

const barangaysVials = [
    {
        id: 1,
        brgy: { name: 'New Malitbog', contactPerson: 'Anna Rose Doe', contactNumber: '09955826473' },
        vaccines: [ { stock: 10 },{ stock: 15 },{ stock: 20 },{ stock: 33 } ]
    },
    {
        id: 2,
        brgy: { name: 'New Pandan', contactPerson: 'Lara Mendoza', contactNumber: '09955826473' },
        vaccines: [ { stock: 10 },{ stock: 25 },{ stock: 23 },{ stock: 24 } ]
    },
    {
        id: 3,
        brgy: { name: 'New Visayas', contactPerson: 'Daniel Roxas', contactNumber: '09955826473' },
        vaccines: [ { stock: 17 },{ stock: 13 },{ stock: 20 },{ stock: 33 } ]
    },
    {
        id: 4,
        brgy: { name: 'Southern Davao', contactPerson: 'Celine Marquez', contactNumber: '09955826473' },
        vaccines: [ { stock: 21 },{ stock: 18 },{ stock: 22 },{ stock: 46 } ]
    },
    {
        id: 5,
        brgy: { name: 'Maduao', contactPerson: 'Jasmine Dela Cruz', contactNumber: '09955826473' },
        vaccines: [ { stock: 22 },{ stock: 29 },{ stock: 20 },{ stock: 33 } ]
    },
]