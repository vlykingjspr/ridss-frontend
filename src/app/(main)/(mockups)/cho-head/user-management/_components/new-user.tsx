"use client"

import Modal, { ModalCloseButton, ModalProps, ModalTitle } from "@/components/ui/modal-spring";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRoundPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { defaultUser, IFormUser, USERSCHEMA } from "./_form/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "@/components/ui/form";
import InputField from "@/components/form-fields/input-field";
import SelectField from "@/components/form-fields/select-field";
import { SelectItem } from "@/components/ui/select";

interface Props extends ModalProps {

}
export default function NewUserModal({ open, onClose }: Props) {
    const form = useForm<IFormUser>({
        resolver: zodResolver(USERSCHEMA),
        defaultValues: defaultUser
    })

    const onSubmit = (FormData: IFormUser) => {

    }

    return (
        <Modal open={open} onClose={onClose} preventAutoFocus>
            <ModalTitle>Add New User</ModalTitle>
            <ModalCloseButton onClick={() => onClose(false)} />
            <div className="">
                <FormContainer form={form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <InputField
                        form={form}
                        name="first_name"
                        label="First Name"
                    />
                    <InputField
                        form={form}
                        name="last_name"
                        label="Last Name"
                    />
                    <InputField
                        form={form}
                        name="middle_name"
                        label="Middle Name"
                    />
                    <SelectField form={form} name="role" label="Select Role">
                        {() => (
                            <Fragment>
                                <SelectItem value="cho-head">City Health Office - Head</SelectItem>
                                <SelectItem value="cho-staff">City Health Office - Staff</SelectItem>
                                <SelectItem value="bhww-head">Barangay Health Worker - Head</SelectItem>
                                <SelectItem value="bhww-staff">Barangay Health Worker - Staff</SelectItem>
                            </Fragment>
                        )}
                    </SelectField>
                    <SelectField form={form} name="barangay" label="Select Barangay">
                        {() => (
                            <Fragment>
                                <SelectItem value="Brgy Malativas">Brgy Malativas</SelectItem>
                                <SelectItem value="Brgy Malitbug">Brgy Malitbug</SelectItem>
                                <SelectItem value="Brgy New Visayas">Brgy New Visayas</SelectItem>
                            </Fragment>
                        )}
                    </SelectField>
                </FormContainer>
            </div>
        </Modal>
    )
}

export const NewUserButton = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <Fragment>
            <Button className="ml-auto h-10 px-4!" onClick={() => setOpen(true)}>
                <UserRoundPlus />
                <span>New User</span>
            </Button>
            
            <NewUserModal open={open} onClose={setOpen} />
        </Fragment>
    )
}