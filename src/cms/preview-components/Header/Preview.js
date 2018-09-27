import PropTypes from 'prop-types';
import React from 'react';
import Header from 'ds-monorepo/packages/components/lib/Header';

export default function Preview({ value }) {
  return <Header/>;
}

Preview.propTypes = {
  value: PropTypes.node,
};