"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal, { ModalTitle } from "@/components/ui/modal-spring";
import { Plus } from "lucide-react";
import { Fragment, useState } from "react";

export default function NewVaccine() {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Button variant="outline" onClick={() => setOpen(true)}>
                <Plus />
                <span>New Vaccine</span>
            </Button>

            <Modal open={open} onClose={setOpen}>
                <ModalTitle>New Vaccine</ModalTitle>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="vaccine">Vaccine Name</Label>
                        <Input id="vaccine" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="vials">Dosage per Vial</Label>
                        <Input id="vials" type="number" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="exp">Exp. After Open <span className="text-xs">(no. of hours/days)</span> </Label>
                        <Input id="exp" />
                    </div>
                </div>
                <div className="mt-5 flex justify-between">
                    <Button variant={'outline'} onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Add Vaccine</Button>
                </div>
            </Modal>
        </Fragment>
    )
}