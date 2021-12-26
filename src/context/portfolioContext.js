import { createContext } from 'react';

const portfolioContext = createContext({
  basics: {},
  projects: [],
});

export default portfolioContext;
