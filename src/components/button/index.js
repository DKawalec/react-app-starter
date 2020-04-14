import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseNumber } from '../../redux/action-creators';

const Button = ({onClick}) => <button type="button" onClick={onClick}>+</button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(increaseNumber())
  };
}

export default connect(null, mapDispatchToProps)(Button);
