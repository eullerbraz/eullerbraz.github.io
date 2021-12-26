import { useState, useEffect } from 'react';

const ENDPOINT = 'https://gitconnected.com/v1/portfolio/eullerbraz';

export default () => {
  const [gitHubInfo, setGitHubInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ENDPOINT);
      const { basics, projects } = await response.json();
      setGitHubInfo({ basics, projects });
    }

    fetchData();
  }, []);

  return gitHubInfo;
}
