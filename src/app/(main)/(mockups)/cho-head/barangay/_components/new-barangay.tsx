"use client"

import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Modal, { ModalTitle } from "@/components/ui/modal-spring";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewBarangay() {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Button className="h-10 px-4!" onClick={() => setOpen(true)}>
                <Building2 />
                <span>Create Barangay</span>
            </Button>

            <Modal open={open} onClose={setOpen}>
                <ModalTitle>Create Barangay</ModalTitle>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="bname">Barangay Name</Label>
                        <Input id="bname" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="bname">Barangay Head</Label>
                        <Select>
                            <SelectTrigger className="h-9 w-full rounded-sm">
                                <SelectValue placeholder="Select user" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Anna Rose Montana">Anna Rose Montana</SelectItem>
                                <SelectItem value="Justin Timberlake">Justin Timberlake</SelectItem>
                                <SelectItem value="Mark Anderson">Mark Anderson</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <Button className="!px-7" variant={'outline'} onClick={() => setOpen(false)}>Cancel</Button>
                    <Button className="!px-7" onClick={() => setOpen(false)}>Create</Button>
                </div>
            </Modal>
        </Fragment>
    )
}