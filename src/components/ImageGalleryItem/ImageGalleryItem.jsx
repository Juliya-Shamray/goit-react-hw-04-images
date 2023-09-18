import { StyledImg, StyledLi } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  handleToggleModal,
  largeImageURL,
}) => {
  return (
    <StyledLi>
      <StyledImg
        onClick={() => handleToggleModal(largeImageURL, tags)}
        src={webformatURL}
        alt={tags}
      />
    </StyledLi>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  handleToggleModal: PropTypes.func,
  largeImageURL: PropTypes.string,
};
