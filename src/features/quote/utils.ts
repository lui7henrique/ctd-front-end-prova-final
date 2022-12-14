import {
  ESTADO_FETCH,
  NOME_INVALIDO,
  MENSAGEM_CARREGANDO,
  NO_ENCONTRADO,
} from "./constants";

export const obterMensagem: (
  cita: string,
  estadoPedido: ESTADO_FETCH
) => string = (cita, estadoPedido) => {
  if (estadoPedido === ESTADO_FETCH.CARREGANDO) {
    return MENSAGEM_CARREGANDO;
  }

  if (estadoPedido === ESTADO_FETCH.ERROR) {
    return NOME_INVALIDO;
  }

  return cita ? `${cita}` : NO_ENCONTRADO;
};
