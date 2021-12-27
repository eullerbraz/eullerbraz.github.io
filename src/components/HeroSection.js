import React, { useContext } from 'react';
import portfolioContext from '../context/portfolioContext';

const HeroSection = () => {
  const { basics: { name, headline } } = useContext(portfolioContext);

  return (
    <section className='hero-section'>
      <div className='text-container'>
        <h1 className='headline'>{ headline }</h1>
        <h2 className='name'>{ name }</h2>
      </div>
      <a href='#about' className='button'>Ver Mais</a>
    </section>
  );
}

export default HeroSection;
