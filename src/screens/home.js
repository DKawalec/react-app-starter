import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import img from '../assets/img.png';
import Image from '../components/image/';
import Button from '../components/button/';
import style from './style.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Image url={img}/>
        { this.props.count }
        <Button/>
      </div>
    );
  }
}

HomePage.propTypes = {
  count: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    count: state.example.counter
  };
}

export default connect(mapStateToProps)(HomePage);
