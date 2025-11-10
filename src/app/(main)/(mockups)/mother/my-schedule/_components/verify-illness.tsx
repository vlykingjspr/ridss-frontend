import { Button } from "@/components/ui/button";
import Modal, { ModalProps, ModalTitle } from "@/components/ui/modal-spring";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Props = ModalProps;
export default function VerifyIllness({ open, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalTitle>History of illness</ModalTitle>
            <div className="">
                <div className="text-base font-medium">
                    Does your child experience sickness/illness for the last few months?
                </div>

                <Textarea className="mt-6" placeholder="Please indicate illness" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <Button variant={"secondary"} onClick={() => onClose(false)}>Cancel</Button>
                <Button onClick={() => {
                    onClose(false)
                }}>
                    Submit
                </Button>
            </div>
        </Modal>
    );
}