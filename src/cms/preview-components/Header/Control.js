import PropTypes from 'prop-types';
import React from 'react';
import Header from 'ds-monorepo/packages/components/lib/Header';

export default class Control extends React.Component {
  static defaultProps = {
    value: '',
  }

  render() {
    return <Header/>
  }
}