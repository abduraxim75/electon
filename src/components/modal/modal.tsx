
import { createPortal } from "react-dom";
const Modal = ({
    isModalOpen,
    setIsModalOpen,
    children,
}: {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}) => {
    return (
        isModalOpen && (
            <>
                {createPortal(
                    <div onClick={() => setIsModalOpen(false)} className="modal-overlay">
                        <div onClick={(e) => e.stopPropagation()} className="modal">
                            {children}
                        </div>
                    </div>,
                    document.getElementById("portal") as HTMLDivElement
                )}
            </>
        )
    );
};
export default Modal;
