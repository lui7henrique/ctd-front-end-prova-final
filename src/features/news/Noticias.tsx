import { useEffect, useState } from "react";
import { obterNoticias } from "./fakeRest";
import PremiumModal from "./PremiumModal";
import {
  CardNoticia,
  DateCardNoticia,
  DescriptionCardNoticia,
  ImageCardNoticia,
  TituloCardNoticia,
  ContainerNoticias,
  ListaNoticias,
  TituloNoticias,
  BotaoLeitura,
} from "./styled";
import { IsNotPremiumModal } from "./isNotPremiumModal";

export interface INormalizeNotes {
  id: number;
  title: string;
  description: string;
  date: number | string;
  premium: boolean;
  image: string;
  shortDescription?: string;
}

export const Notes = () => {
  const [notes, setNotes] = useState<INormalizeNotes[]>([]);
  const [modal, setModal] = useState<INormalizeNotes | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      const response = await obterNoticias();

      const data = response.map((notes) => {
        const titleWithoutWhiteSpaces = notes.titulo.split(" ");

        const FormattedTitleWithoutWhiteSpaces = titleWithoutWhiteSpaces
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const currentHour = new Date().getTime();
        const minutesElapsed = Math.floor(
          (currentHour - notes.date.getTime()) / 60000
        );

        return {
          id: notes.id,
          title: FormattedTitleWithoutWhiteSpaces,
          description: notes.description,
          date: `Faz ${minutesElapsed} minutos`,
          premium: notes.premium,
          image: notes.image,
          shortDescription: notes.description.substring(0, 100),
        };
      });

      setNotes(data);
    };

    getInfo();
  }, []);

  return (
    <ContainerNoticias>
      <TituloNoticias>Noticias dos Simpsons</TituloNoticias>
      <ListaNoticias>
        {notes.map((notes) => (
          <CardNoticia>
            <ImageCardNoticia src={notes.image} />
            <TituloCardNoticia>{notes.title}</TituloCardNoticia>
            <DateCardNoticia>{notes.date}</DateCardNoticia>
            <DescriptionCardNoticia>
              {notes.shortDescription}
            </DescriptionCardNoticia>
            <BotaoLeitura onClick={() => setModal(notes)}>Ver más</BotaoLeitura>
          </CardNoticia>
        ))}
        {modal &&
          (modal.premium ? (
            <PremiumModal
              signButton={() =>
                setTimeout(() => {
                  alert("Suscripto!");
                  setModal(null);
                }, 1000)
              }
              closeButtonClick={() => setModal(null)}
            />
          ) : (
            <IsNotPremiumModal
              modal={modal}
              closeButtonClick={() => setModal(null)}
            />
          ))}
      </ListaNoticias>
    </ContainerNoticias>
  );
};
