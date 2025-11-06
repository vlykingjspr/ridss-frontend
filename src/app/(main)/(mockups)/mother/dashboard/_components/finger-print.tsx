"use client"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Spinner } from "@/components/ui/spinner";
import { Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FingerPrint() {
    const [open, setOpen] = useState(true)
    const router = useRouter()

    const [enableFingerprint, setEnableFingerpint] = useState(false)

    return (
        <Drawer open={open}>
            <DrawerContent>
                <div className="py-5">
                    <div className="flex justify-center pt-6 pb-6">
                        <div className="border border-lime-600 rounded-full flex items-center justify-center p-4 size-fit text-muted-foreground/40 hover:!text-lime-600" hidden={enableFingerprint} onClick={() => {
                            setEnableFingerpint(true)
                            setTimeout(() => {
                                setOpen(false)
                                router.push('/mother/dashboard')
                            }, 3000)
                        }}>
                            <Fingerprint className="size-10 stroke-[1.5]" />
                        </div>

                        {enableFingerprint && (<Spinner className="size-16" />)}
                    </div>

                    <DrawerHeader>
                        <DrawerTitle>Place your finger to Enable Fingerprint</DrawerTitle>
                        <DrawerDescription>Your finger print can be used for secure and ease of login.</DrawerDescription>
                    </DrawerHeader>

                    <div className="flex justify-center">
                        <Button variant={'outline'}>Skip Fingerprint Authentication</Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}