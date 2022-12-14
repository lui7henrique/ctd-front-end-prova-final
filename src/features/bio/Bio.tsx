import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioButton,
  BioContainer,
  BioDescription,
  BioImage,
  BioName,
  ContainerBotoes,
} from "./styles";

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <BioButton
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        isActive={bioActive.id === nome}
      >
        {nome}
      </BioButton>
    ));
  };

  return (
    <BioContainer>
      <ContainerBotoes>{criarBotoes()}</ContainerBotoes>

      <div>
        <div>
          <BioImage src={bioActive.image} alt={bioActive.nome} />
        </div>

        <div>
          <BioName>{bioActive.nome}</BioName>
          <BioDescription>{bioActive.description}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
