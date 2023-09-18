import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ handleBtnLoadMore }) => {
  return (
    <StyledButton onClick={handleBtnLoadMore} type="button">
      Load more
    </StyledButton>
  );
};

Button.propTypes = {
  handleBtnLoadMore: PropTypes.func,
};
