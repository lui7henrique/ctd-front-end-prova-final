import {
  BartImage,
  HomerImage,
  LisaImage,
  MaggieImage,
  MargeImage,
} from "../../assets";

export enum NomesSimpsons {
  BART = "BART",
  LISA = "LISA",
  MAGGIE = "MAGGIE",
  MARGE = "MARGE",
  HOMER = "HOMERO",
}

export const INFO_SIMPSONS = {
  [NomesSimpsons.BART]: {
    id: NomesSimpsons.BART,
    nome: "Bart Simpson",
    description: `Aos dez anos, Bart é o filho mais velho e único de Homer e Marge.
     e o irmão de Lisa e Maggie.
     Os traços de caráter mais proeminentes e populares de Bart são sua malícia,
     rebelião e falta de respeito pela autoridade.`,
    image: BartImage,
  },
  [NomesSimpsons.HOMER]: {
    id: NomesSimpsons.HOMER,
    nome: "Homero Simpson",
    description: `Como chefe da família,
     Homer e sua esposa Marge têm três filhos: Bart, Lisa e Maggie.
     Homer trabalha na Usina Nuclear de Springfield como inspetor de segurança.
     Homer incorpora muitos estereótipos da classe trabalhadora americana:
     é obeso, imaturo, franco, agressivo, careca, preguiçoso, ignorante,
     não profissional e viciado em cerveja, junk food e televisão`,
    image: HomerImage,
  },
  [NomesSimpsons.LISA]: {
    id: NomesSimpsons.LISA,
    nome: "Lisa Simpson",
    description: `Lisa é vegetariana, forte ambientalista, feminista e budista.
     A personagem de Lisa se transforma muitas vezes ao longo do show: ela se torna
     um vegetariano na temporada 7 e se converte ao budismo na temporada 13.
     Forte liberal e ativista pela paz, igualdade e meio ambiente,
     Lisa defende uma variedade de causas políticas que geralmente a colocam
     contra a maioria das pessoas em Springfield.`,
    image: LisaImage,
  },
  [NomesSimpsons.MAGGIE]: {
    id: NomesSimpsons.MAGGIE,
    nome: "Maggie Simpson",
    description: `Maggie é a filha mais nova de Homer e Marge, e a irmã mais nova de Bart.
     e Lisa. Ela é muitas vezes vista chupando sua chupeta vermelha, e quando ela anda,
     ele tropeça em suas roupas e cai de cara. Sendo um bebê, ele ainda não aprendeu a falar.`,
    image: MaggieImage,
  },
  [NomesSimpsons.MARGE]: {
    id: NomesSimpsons.MARGE,
    nome: "Marge Simpson",
    description: `Marge é a mãe da família Simpson. Com o marido Homer, ela tem três
     filhos: Bart, Lisa e Maggie. Marge é a força moralista em sua família e
     muitas vezes usa uma voz firme no meio das travessuras de sua família, tentando
     manter a ordem na casa dos Simpsons. Ela é frequentemente retratada como a típica
     mãe da tv e é frequentemente incluída nas listas das melhores "mãe da tv".`,
    image: MargeImage,
  },
};
