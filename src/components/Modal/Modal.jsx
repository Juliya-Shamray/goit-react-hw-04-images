import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ modalImage, altModal, handleToggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        handleToggleModal();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleToggleModal]);
  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };
  return (
    <StyledOverlay onClick={onBackDropClick}>
      <StyledModal>
        <img src={modalImage} alt={altModal} />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  handleToggleModal: PropTypes.func,
  modalImage: PropTypes.string,
  altModal: PropTypes.string,
};
