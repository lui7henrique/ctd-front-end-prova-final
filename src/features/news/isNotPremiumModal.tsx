import {
  CloseButton,
  CardModal,
  ContainerModal,
  DescriptionModal,
  ImageModal,
  TituloModal,
  ContainerTexto,
} from "./styled";
import { CloseButton as Close } from "../../assets";
import React from "react";
import { INormalizeNotes } from "./Noticias";

interface PremiumModalProps {
  closeButtonClick: () => void;
  modal: INormalizeNotes;
}

export function IsNotPremiumModal(props: PremiumModalProps) {
  const { closeButtonClick, modal } = props;
  return (
    <ContainerModal>
      <CardModal>
        <CloseButton onClick={closeButtonClick}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImageModal src={modal.image} alt="news-image" />
        <ContainerTexto>
          <TituloModal>{modal.title}</TituloModal>
          <DescriptionModal>{modal.description}</DescriptionModal>
        </ContainerTexto>
      </CardModal>
    </ContainerModal>
  );
}
