import React from 'react';

import { Link } from 'react-router-dom';

import {
  PageLanding,
  LogoContainer,
  Background,
  ButtonContainer,
  TotalConnections,
  PageLandingContent,
  Container,
} from './style';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <PageLandingContent id="page-landing-content" className="container">
        <Container>
          <LogoContainer className="logo-container">
            <img src={logoImg} alt="logoProffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>

          <Background>
            <img src={landingImg} alt="landingImg" className="hero-image" />
          </Background>

          <ButtonContainer className="buttons-container">
            <a href="test.com" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </a>

            <a href="test" className="giveClasses">
              <img src={giveClassesIcon} alt="Estudar" />
              Estudar
            </a>
          </ButtonContainer>

          <TotalConnections>
            <span className="total-connections">
              static value temporary
              <img src={purpleHeartIcon} alt="coração roxo" />
            </span>
          </TotalConnections>
        </Container>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
