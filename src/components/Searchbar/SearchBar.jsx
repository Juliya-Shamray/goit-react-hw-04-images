import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledSpan,
} from './SearchBar.styled';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error('Search field is empty');
    }
    this.props.onSubmit(this.state.value);
  };
  handleChangeInput = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledButton type="submit" onClick={this.handleSubmit}>
            <StyledSpan>Search</StyledSpan>
          </StyledButton>

          <StyledInput
            onChange={this.handleChangeInput}
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
