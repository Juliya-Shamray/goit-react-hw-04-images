import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, handleToggleModal }) => {
  return (
    <>
      <StyledList>
        {gallery.map(item => (
          <ImageGalleryItem
            key={item.id}
            {...item}
            handleToggleModal={handleToggleModal}
          />
        ))}
      </StyledList>
    </>
  );
};

ImageGallery.propTypes = {
  handleToggleModal: PropTypes.func,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
