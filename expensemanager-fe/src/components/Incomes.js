import React from 'react';
import PropTypes from 'prop-types';
import FeatureButton from './FeatureButton';

const Incomes = ({ match, changeFeature, changeAction }) => (
  <div className="container d-flex h-100">
    <div className="row w-100 justify-content-center align-self-center">
      <FeatureButton
        link={`${match.url}/new`}
        text="New"
        feature="Incomes"
        action="New"
        changeFeature={changeFeature}
        changeAction={changeAction}
      />
      <hr className="vertical-spacer d-md-none" />
      <FeatureButton
        link={`${match.url}/filter`}
        text="Filter"
        feature="Incomes"
        action="Filter"
        changeFeature={changeFeature}
        changeAction={changeAction}
      />
    </div>
  </div>
);

Incomes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  changeFeature: PropTypes.func.isRequired,
  changeAction: PropTypes.func.isRequired,
};

export default Incomes;
