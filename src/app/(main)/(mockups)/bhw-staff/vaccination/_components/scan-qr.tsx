"use client"

import { Button } from "@/components/ui/button";
import Modal, { ModalCloseButton, ModalTitle } from "@/components/ui/modal-spring";
import { TypographySmall } from "@/components/ui/typography";
import { Loader2, ScanQrCode } from "lucide-react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

export default function ScanQrCodeButton() {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Button variant="outline" onClick={() => setOpen(true)}>
                <ScanQrCode />
                Scan QR
            </Button>

            <Modal open={open} onClose={setOpen} maxWidth="6xl" preventAutoFocus>
                <ModalTitle>Scan QR</ModalTitle>
                <ModalCloseButton onClick={() => setOpen(false)} />
                
                <div className="h-130 grid grid-cols-[28rem_1fr]">
                    <div className="h-130">
                        <Image
                            width={300}
                            height={300}
                            src="/qr_scan.png"
                            alt="Scan"
                            className="size-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="p-4 px-8 flex flex-col">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="">
                                <div className=""> <TypographySmall className="text-base text-muted-foreground/70">First Name</TypographySmall> </div>
                                <div className=""> <TypographySmall className="text-base">John</TypographySmall> </div>
                            </div>
                            <div className="">
                                <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Last Name</TypographySmall> </div>
                                <div className=""> <TypographySmall className="text-base">Doe</TypographySmall> </div>
                            </div>
                            <div className="">
                                <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Sex</TypographySmall> </div>
                                <div className=""> <TypographySmall className="text-base">Male</TypographySmall> </div>
                            </div>
                            <div className="">
                                <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Age</TypographySmall> </div>
                                <div className=""> <TypographySmall className="text-base">1 yr</TypographySmall> </div>
                            </div>
                            <div className="">
                                <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Weight</TypographySmall> </div>
                                <div className=""> <TypographySmall className="text-base">9.6 KG</TypographySmall> </div>
                            </div>
                            <div className="">
                                <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Parent Name</TypographySmall> </div>
                                <div className=""> <TypographySmall className="text-base">Analiza Doe</TypographySmall> </div>
                            </div>
                        </div>

                        <div className="mt-7">
                            <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Vaccine Received</TypographySmall> </div>
                            <div className=""> <TypographySmall className="text-base">BCG</TypographySmall> </div>
                        </div>

                        <div className="mt-7">
                            <div className=""> <TypographySmall className="text-base text-muted-foreground/70">Vaccination Status</TypographySmall> </div>
                            <div className=""> <TypographySmall className="text-base text-green-600">Active</TypographySmall> </div>
                        </div>

                        <Button className="h-10 px-8 ml-auto mt-auto">Confirm</Button>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}