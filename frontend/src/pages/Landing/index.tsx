import React from 'react';

import { Link } from 'react-router-dom';

import { PageLanding, LogoContainer, Background } from './style';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <div id="page-land-content" className="container">
        <LogoContainer className="logo-container">
          <img src={logoImg} alt="logoProffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        {/* <img src={landingImg} alt="landingImg" className="hero-image" /> */}
        <Background>
          <img src={landingImg} alt="landingImg" className="hero-image" />
        </Background>
        <div className="buttons-container">
          <a href="test.com" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="test" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          static value temporary
          <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </PageLanding>
  );
};

export default Landing;
