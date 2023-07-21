import React, {ReactNode} from 'react';
import './Modal.css';

interface IModal {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}
const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    const closeModal = () => {
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-btn" onClick={closeModal}>&times;</span>
                { children }
            </div>
        </div>
    );
};

export default Modal;
