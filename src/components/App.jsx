import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
import { getImages } from 'services/getImages';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { StyledWrapper } from './App.styled';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [altModal, setAltModal] = useState('');
  const [maxPage, setMax] = useState(0);

  useEffect(() => {
    if (!q) {
      return;
    }

    setIsLoading(true);

    const fetchImages = async () => {
      try {
        const res = await getImages({ q, page });
        const maxPage = Math.ceil(res.data.totalHits / 12);
        setGallery(prev => [...prev, ...res.data.hits]);
        setMax(maxPage);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, q]);

  const handleBtnLoadMore = () => {
    setPage(prev => prev + 1);
  };
  const handleSubmit = value => {
    setQ(value);
    setPage(1);
    setGallery([]);
  };
  const handleToggleModal = (image, alt) => {
    setIsOpen(prev => !prev);
    setModalImage(image);
    setAltModal(alt);
  };
  return (
    <StyledWrapper>
      <SearchBar onSubmit={handleSubmit} />

      {isLoading && <Loader />}
      {error && <h2>Ooop... Something went wrong </h2>}
      {!gallery.length && q && !isLoading && (
        <h1>Nothing here!!! Try again </h1>
      )}
      <ImageGallery handleToggleModal={handleToggleModal} gallery={gallery} />

      {isOpen && (
        <Modal
          modalImage={modalImage}
          altModal={altModal}
          handleToggleModal={handleToggleModal}
        />
      )}

      {gallery.length > 0 && page !== maxPage && (
        <Button handleBtnLoadMore={handleBtnLoadMore} />
      )}
    </StyledWrapper>
  );
};
