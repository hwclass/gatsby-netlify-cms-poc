import React from 'react';
import PropTypes from 'prop-types';
import { AirportServicePageTemplate } from '../../templates/airport-service-page';

const AirportServicePagePreview = ({ entry, widgetFor }) => (
  <AirportServicePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

AirportServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AirportServicePagePreview;
