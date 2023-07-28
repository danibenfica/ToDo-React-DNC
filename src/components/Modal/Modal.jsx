import "./index.scss";
import "./indexLight.scss";
import { useTheme } from '../../../ThemeContext';

const Modal = ({ isOpen, children }) => {
    const { isLightMode } = useTheme();
    
    if (!isOpen) return null;

    const modalOverlay = isLightMode ? 'modal-overlayL' : 'modal-overlay';
    const modalContent = isLightMode ? 'modal-contentL' : 'modal-content';

    return (
        <div className={modalOverlay}>
            <div className={modalContent}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
