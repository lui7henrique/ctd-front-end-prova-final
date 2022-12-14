import { API_URL } from "../../app/constants";
import { ICita } from "./types";

export const obterCita: (personagem?: string) => Promise<ICita> = async (
  personagem
) => {
  if (personagem && parseInt(personagem)) {
    throw new Error("O nome deve ser um texto");
  }

  const url = personagem ? `${API_URL}?character=${personagem}` : API_URL;
  const resposta = await fetch(url);
  const [data] = await resposta.json();

  const dataNormalizada = {
    cita: data.quote,
    personagem: data.character,
    image: data.image,
    direcaoPersonagem: data.characterDirection,
  };

  return dataNormalizada;
};
