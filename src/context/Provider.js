import React from 'react';
import PropTypes from 'prop-types';
import portfolioContext from './portfolioContext';
import usePortfolio from '../hooks/usePortfolio';

const Provider = ({ children }) => {
  const gitHubInfo = usePortfolio();

  return (
    <portfolioContext.Provider value={ gitHubInfo }>
      { children }
    </portfolioContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Provider;
