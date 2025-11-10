"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal, { ModalTitle } from "@/components/ui/modal-spring";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { Fragment, useState } from "react";

interface Props {
    vaccine: {
    id: number;
    name: string;
    batch: string;
    vials: number;
    expiration: string;
};
}
export default function AddStock({ vaccine }: Props) {
    const [open, setOpen] = useState(false)
    
    return (
        <Fragment>
            <Button onClick={() => setOpen(true)}> <Plus /> Add </Button>

            <Modal open={open} onClose={setOpen}>
                <ModalTitle>Add Stock for {vaccine.name}</ModalTitle>

                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="batch">Batch</Label>
                        <Input id="batch" defaultValue={vaccine.batch} />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="vials">Number of Vials</Label>
                        <Input id="vials" type="number" defaultValue={vaccine.vials} />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="vials">Expiration</Label>
                        <Input id="vials" type="date" defaultValue={format(vaccine.expiration, "yyyy-MM-dd")} />
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