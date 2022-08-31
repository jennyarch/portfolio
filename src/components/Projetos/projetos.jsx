import React from "react";
import CardsProjetos from "./Cards/cardsProjetos";
import * as S from './styles';
import { IconContext } from 'react-icons';
import { GoProject } from 'react-icons/go';

export default function Projetos(){
  return(
    <>
        <S.Title>
          <h2>Projetos</h2>
          <IconContext.Provider value={{ className: "icon"}}>
            <GoProject/>
          </IconContext.Provider>
        </S.Title>  
        <CardsProjetos/>
    </>
  );
}