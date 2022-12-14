import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { ESTADO_FETCH } from "./constants";
import { obterCita } from "./citaAPI";
import { ICita } from "./types";

export interface EstadoCita {
  data: ICita | null;
  estado: ESTADO_FETCH;
}

const initialState: EstadoCita = {
  data: null,
  estado: ESTADO_FETCH.INACTIVE,
};

export const obterCitaAsync = createAsyncThunk(
  "cita/obterCita",
  async (personagem: string) => {
    try {
      const cita = await obterCita(personagem);

      return cita;
    } catch (err) {
      throw err;
    }
  }
);

export const citaSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {
    limpar: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(obterCitaAsync.pending, (state) => {
        state.estado = ESTADO_FETCH.CARREGANDO;
      })
      .addCase(obterCitaAsync.fulfilled, (state, action) => {
        state.estado = ESTADO_FETCH.INACTIVE;
        state.data = action.payload;
      })
      .addCase(obterCitaAsync.rejected, (state) => {
        state.estado = ESTADO_FETCH.ERROR;
      });
  },
});

export const { limpar } = citaSlice.actions;

export const obterCitaDaAPI =
  (personagem: string) => (dispatch: AppDispatch) => {
    dispatch(limpar());
    dispatch(obterCitaAsync(personagem));
  };

export const obterCitaDoEstado = (state: RootState) => state.cita.data;
export const obterEstadoDoPedido = (state: RootState) => state.cita.estado;

export default citaSlice.reducer;
