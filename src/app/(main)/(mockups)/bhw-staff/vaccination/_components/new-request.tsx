"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Modal, { ModalCloseButton, ModalTitle } from "@/components/ui/modal-spring";
import { Plus, X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import OverlayScrollbar from "@/components/orverlay-scrollbar";
import { Label } from "@/components/ui/label";

export default function NewRequest() {
    const [open, setOpen] = useState(false);
    const [requests, setRequests] = useState(1);

    useEffect(() => {
        if(open) {
            setRequests(1)
        }
    }, [open])

    return (
        <Fragment>
            <Button onClick={() => setOpen(true)} className="ml-auto">
                <Plus />
                New Request
            </Button>

            <Modal open={open} onClose={setOpen} preventAutoFocus>
                <ModalTitle>Request Vials</ModalTitle>
                <ModalCloseButton onClick={() => setOpen(false)} />

                <OverlayScrollbar className="max-h-[calc(100vh-20rem)]">
                    <div className="space-y-3">
                        {Array.from({ length: requests }).map((_, index) => (
                            <RequestCard
                                key={index}
                                isMoreRequest={requests > 1}
                                onRemove={() => setRequests(requests - 1)}
                            />
                        ))}
                    </div>
                </OverlayScrollbar>

                <div className="mt-3">
                    <Button
                        className="w-full border-dashed"
                        variant={"outline"}
                        onClick={() => setRequests(requests + 1)}
                    >
                        <Plus />
                        <span>New Row</span>
                    </Button>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w- 40" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button className="w- 40">Submit Request</Button>
                </div>
            </Modal>
        </Fragment>
    );
}

const vaccines = {
    BCG: "Bacillus-Calmette-Guerin",
    Hepatitis: "Hepatitis B",
    Penta: "DTwP-HepB-Hib",
    PCV: "Pneumococcal Conjugate Vaccine",
    OPV: "OPV",
    IPV: "Inactivated Polio Vaccine",
    MR: "Measles - Rubella Vaccine",
    MMR: "Measles - Mumps - Rubella Vaccine",
    Others: "Other vaccines",
    default: "",
} as const;

interface RequestCardProps {
    isMoreRequest: boolean;
    onRemove: CallableFunction;
}
const RequestCard = ({ isMoreRequest, onRemove }: RequestCardProps) => {
    const [selected, setSelected] = useState<keyof typeof vaccines>("default");

    return (
        <Card className="flex-row gap-3 rounded-sm p-3 shadow-xs">
            <div className="grow space-y-3">
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="current">Vaccine</Label>
                        <Select onValueChange={(value: keyof typeof vaccines) => setSelected(value)}>
                            <SelectTrigger className="h-9 w-full rounded-sm">
                                <SelectValue placeholder="Select">{selected && vaccines[selected]}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel className="text-muted-foreground text-[13px]">
                                        Vaccine Types
                                    </SelectLabel>
                                    <SelectItem value="BCG">
                                        BCG <small>(Bacillus-Calmette-Guerin)</small>
                                    </SelectItem>
                                    <SelectItem value="Hepatitis">Hepatitis B</SelectItem>
                                    <SelectItem value="Penta">Penta: DTwP-HepB-Hib</SelectItem>
                                    <SelectItem value="PCV">
                                        PCV <small>(Pneumococcal Conjugate Vaccine)</small>
                                    </SelectItem>
                                    <SelectItem value="OPV">OPV</SelectItem>
                                    <SelectItem value="IPV">
                                        IPV <small>(Inactivated Polio Vaccine)</small>
                                    </SelectItem>
                                    <SelectItem value="MR">
                                        MR <small>(Measles - Rubella Vaccine)</small>
                                    </SelectItem>
                                    <SelectItem value="MMR">
                                        MMR <small>(Measles - Mumps - Rubella Vaccine)</small>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {(selected != "default") && (
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label htmlFor="current">Current Vials</Label>
                                <Input id="current" defaultValue={0} readOnly />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="current">Suggested Vials</Label>
                                <Input id="current" defaultValue={30} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isMoreRequest && (
                <div className="">
                    <Button
                        onClick={() => onRemove()}
                        size="icon"
                        variant="ghost"
                        className="!text-destructive hover:bg-destructive/10 hover:border-destructive/10 size-7"
                    >
                        <X />
                    </Button>
                </div>
            )}
        </Card>
    );
};
