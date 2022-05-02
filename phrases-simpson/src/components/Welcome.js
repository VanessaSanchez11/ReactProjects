import React from 'react'
import logo from "../the-simpson.png";
import styled from 'styled-components';

const Welcome = (props) => {

  const {reqApi} = props;


  return (
    <ContentLogo>
      <WelcomeText>Bienvenido, para poder utilizar las frases da click en las imagenes</WelcomeText>
        <ImageLogo src={logo} alt="Logo simpson" onClick={reqApi} />
      </ContentLogo>
  )
}

const ImageLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;

export default Welcome