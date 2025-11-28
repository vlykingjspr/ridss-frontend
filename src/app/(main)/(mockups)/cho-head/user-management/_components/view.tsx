import Modal, { ModalCloseButton, ModalProps, ModalTitle } from "@/components/ui/modal-spring";

interface Props extends ModalProps {}
export default function View({ open, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalTitle>View User Details</ModalTitle>
            <ModalCloseButton onClick={() => onClose(false)} />
            <div className="">
                
            </div>
        </Modal>
    )
}