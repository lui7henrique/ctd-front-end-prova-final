import React from "react";
import {
  CloseButton,
  CardModal,
  ContainerModal,
  DescriptionModal,
  ImageModal,
  TituloModal,
  BotaoAssinar,
  ContainerTexto,
} from "./styled";
import { AssinarImage, CloseButton as Close } from "../../assets";

interface PremiumModalProps {
  closeButtonClick: () => void;
  signButton: () => void;
}

export function PremiumModal(props: PremiumModalProps) {
  const { closeButtonClick, signButton } = props;
  return (
    <ContainerModal>
      <CardModal>
        <CloseButton onClick={closeButtonClick}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImageModal src={AssinarImage} alt="mr-burns-excelent" />
        <ContainerTexto>
          <TituloModal>Assine a nossa newsletter</TituloModal>
          <DescriptionModal>
            Assine nossa newsletter e receba novidades de nossos personagens
            favoritos
          </DescriptionModal>
          <BotaoAssinar onClick={signButton}>Assinar</BotaoAssinar>
        </ContainerTexto>
      </CardModal>
    </ContainerModal>
  );
}

export default PremiumModal;
