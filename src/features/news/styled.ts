import styled from "styled-components";

export const ContainerNoticias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

export const TituloNoticias = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 2rem 0;
  padding: 0;
  color: #fdd835;
  text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
    -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
    -2px 0px 0 #000000, 0px -2px 0 #000000;

  letter-spacing: 0.1rem;
`;

export const ListaNoticias = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0;
`;

export const CardNoticia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 280px;
  height: 400px;
  padding: 0;
  margin: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const ImageCardNoticia = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TituloCardNoticia = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem auto;
  padding: 0 1rem;
  height: 3.5rem;
`;

export const DescriptionCardNoticia = styled.p`
  width: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;

export const DateCardNoticia = styled.p`
  font-size: 0.9rem;
  margin: 0.3rem auto;
  width: 90%;
  text-align: right;
`;

export const BotaoLeitura = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  background-color: blue;
  margin: 0;
  padding: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fdd835;
    color: #000;
  }

  position: absolute;
  bottom: 0px;
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 60%;
  padding: 0;
  margin: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  & img {
    max-width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImageModal = styled.img`
  width: 60%;
  height: 100%;
`;

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 45%;
  height: 100%;
  padding: 1rem;
  margin-top: 5rem;
`;

export const TituloModal = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const DescriptionModal = styled.p`
  width: 100%;
  max-width: 100%;
  max-height: 55%;
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem 0;
  text-align: left;
  overflow-y: auto;
`;

export const BotaoAssinar = styled.button`
  width: 20%;
  min-width: 200px;
  border: none;
  font-size: 1.3rem;
  background-color: #fdd835;
  color: #000;
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 1rem;
  font-weight: bold;
  font-family: "Homer Simpson Revised", sans-serif;
`;
