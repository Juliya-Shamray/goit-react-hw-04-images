import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
import { getImages } from 'services/getImages';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { StyledWrapper } from './App.styled';

export class App extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
    q: null,
    isOpen: false,
    modalImage: '',
    altModal: '',
    max: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      try {
        const res = await getImages({
          q: this.state.q,
          page: this.state.page,
        });
        const max = Math.ceil(res.data.totalHits / 12);

        this.setState(prev => ({
          gallery: [...prev.gallery, ...res.data.hits],
          max,
        }));
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = value => {
    this.setState({ q: value.trim(), page: 1, gallery: [] });
  };

  handleBtnLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleToggleModal = (image, alt) => {
    this.setState({
      isOpen: !this.state.isOpen,
      modalImage: image,
      altModal: alt,
    });
  };

  render() {
    const {
      gallery,
      isLoading,
      isOpen,
      modalImage,
      error,
      max,
      page,
      q,
      altModal,
    } = this.state;
    return (
      <StyledWrapper>
        <SearchBar onSubmit={this.handleSubmit} />

        {isLoading && <Loader />}
        {error && <h2>Ooop... Something went wrong </h2>}
        {!gallery.length && q && !isLoading && (
          <h1>Nothing here!!! Try again </h1>
        )}
        <ImageGallery
          handleToggleModal={this.handleToggleModal}
          gallery={gallery}
        />

        {isOpen && (
          <Modal
            modalImage={modalImage}
            altModal={altModal}
            handleToggleModal={this.handleToggleModal}
          />
        )}

        {gallery.length > 0 && page !== max && (
          <Button handleBtnLoadMore={this.handleBtnLoadMore} />
        )}
      </StyledWrapper>
    );
  }
}
