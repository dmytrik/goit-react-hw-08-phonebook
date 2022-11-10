import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = children => {
  return createPortal(
    <Backdrop>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};
export default Modal;
