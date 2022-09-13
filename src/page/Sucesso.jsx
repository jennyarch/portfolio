import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import * as S from './style';

export default function Sucesso(){

  const navigate = useNavigate();

  let { id } = useParams()
  if (id === undefined) {
    id = 1;
  }

  return(
    <S.ContainerSucess>
      <img src="https://media.giphy.com/media/YlSR3n9yZrxfgVzagm/giphy.gif" alt="Imagem de Sucesso"/>
      <h2>Formulário enviado com sucesso!</h2>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </S.ContainerSucess>
  );
}