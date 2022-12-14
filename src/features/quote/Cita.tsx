import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Botao, Input, AutorCita, ContainerCita, TextoCita } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  obterCitaDoEstado,
  limpar,
  obterEstadoDoPedido,
  obterCitaDaAPI,
} from "./citaSlice";
import { obterMensagem } from "./utils";

function Cita() {
  const [valorInput, setValorInput] = useState("");
  const { cita = "", personagem = "" } =
    useAppSelector(obterCitaDoEstado, shallowEqual) || {};
  const estadoPedido = useAppSelector(obterEstadoDoPedido);

  const dispatch = useAppDispatch();

  const onClickObterCita = () => dispatch(obterCitaDaAPI(valorInput));

  const onClickApagar = () => {
    dispatch(limpar());
    setValorInput("");
  };

  return (
    <ContainerCita>
      <TextoCita>{obterMensagem(cita, estadoPedido)}</TextoCita>
      <AutorCita>{personagem}</AutorCita>
      <Input
        aria-label="Author Cita"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Digite o nome do autor"
      />
      <Botao
        aria-label={valorInput ? "Obter Cita" : "Obter cita aleatoria"}
        onClick={onClickObterCita}
      >
        {valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
      </Botao>
      <Botao aria-label="Apagar" onClick={onClickApagar} secondary={true}>
        Apagar
      </Botao>
    </ContainerCita>
  );
}
export default Cita;
