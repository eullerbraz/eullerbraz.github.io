import React, { useContext } from 'react';
import portfolioContext from '../context/portfolioContext';
import aboutImage from '../images/about-image.svg'

const AboutSection = () => {
  const { basics: { summary } } = useContext(portfolioContext);
  const paragraphs = summary.split(/\r?\n/);

  return (
    <section className='about-section' id='about'>
      <h2 className='about-title'>Sobre Mim</h2>
      <div className='about-content'>
        <div className='about-text'>
          {
            paragraphs.map((paragraph, index) => (
              <p className='paragraph' key={ `${index}-paragraph` }>{ paragraph }</p>
            ))
          }
        </div>
        <img
          src={ aboutImage }
          alt='Euller Braz'
          className='about-image'
        />
      </div>
    </section>
  );
}

export default AboutSection;
