import { createContext } from 'react';

const portfolioContext = createContext({
  basics: {
    name: '',
    headline: '',
    summary: '',
    profiles: [],
  },
  projects: [],
});

export default portfolioContext;
