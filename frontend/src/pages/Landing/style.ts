import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const Background = styled.div`
  img {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a:first-child {
    margin-right: 1.6rem;
  }

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a.study {
    background: var(--color-primary-lighter);
  }

  a.giveClasses {
    background: var(--color-secundary);
  }

  a.study:hover {
    background: var(--color-primary-light);
  }

  a.giveClasses:hover {
    background: var(--color-secundary-dark);
  }

  img {
    width: 4rem;
  }
`;

export const TotalConnections = styled.div`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }
`;

export const Container = styled.div``;

export const PageLandingContent = styled.div`
  @media (min-width: 1100px) {
    ${Container} {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        'logo hero hero'
        'buttons buttons total';
    }

    .logo-container {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin: 0;
    }

    .logo-container h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }

    ${Background} {
      .hero-image {
        grid-area: hero;
        justify-self: end;
      }
    }

    .buttons-container {
      grid-area: buttons;
      justify-content: flex-start;

      a {
        font-size: 2.4rem;
      }
    }

    ${TotalConnections} {
      grid-area: total;
      justify-self: end;
    }
  }
`;
