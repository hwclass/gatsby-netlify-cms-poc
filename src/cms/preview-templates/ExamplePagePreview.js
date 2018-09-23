import React from 'react';
import PropTypes from 'prop-types';
import { ExamplePageTemplate } from '../../templates/example-page';

const ExamplePagePreview = ({ entry, widgetFor }) => (
  <ExamplePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ExamplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ExamplePagePreview;
