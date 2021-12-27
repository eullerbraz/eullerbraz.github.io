import React from 'react';
import fundamentalsImage from '../images/fundamentals-image.svg'
import frontImage from '../images/front-end-image.svg'
import dbImage from '../images/Db-image.svg'
import backImage from '../images/back-end-image.svg'


const TechSection = () => {
  return (
    <section className='tech-section'>
      <h2 className='tech-title'>Tecnologias</h2>
      <div className='tech-content'>
        <div className='tech-card'>
          <img
            src={ fundamentalsImage }
            alt='fundamentals techs'
            className='tech-icon'
          />
          <p className='tech-paragraph'>
            As primeiras tecnologias que eu aprendi foram HTML, CSS e JavaScript. Com elas pude desenvolver minha base na área de desenvolvimento web.
          </p>
        </div>
        <div className='tech-card'>
          <img
            src={ frontImage }
            alt='front-end techs'
            className='tech-icon'
          />
          <p className='tech-paragraph'>
            Com o React e o Redux consegui construir aplicações complexas, utilizando componentes e gerenciando o estado de aplicações front-end.  
          </p>
        </div>
        <div className='tech-card'>
          <img
            src={ dbImage }
            alt='database techs'
            className='tech-icon'
          />
          <p className='tech-paragraph'>
            Já em back-end realizei consultas a bancos de dados. Utilizando MySQL como banco relacional e MongoDB como não relacional.
          </p>
        </div>
        <div className='tech-card'>
          <img
            src={ backImage }
            alt='back-end techs'
            className='tech-icon'
          />
          <p className='tech-paragraph'>
            Utilizando Node e Express, construí API's para me comunicar com bancos de dados e fornecer informações para o front-end.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechSection;
