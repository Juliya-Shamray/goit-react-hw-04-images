import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledSpan,
} from './SearchBar.styled';
import { toast } from 'react-toastify';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.error('Search field is empty');
    }
    onSubmit(value);
  };
  const handleChangeInput = ({ target }) => {
    setValue(target.value);
  };
  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledButton type="submit" onClick={handleSubmit}>
          <StyledSpan>Search</StyledSpan>
        </StyledButton>

        <StyledInput
          onChange={handleChangeInput}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
