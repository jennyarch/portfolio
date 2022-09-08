import React from "react";
import { IconContext } from "react-icons";
import * as S from './style';

export default function ArrowIcon({ children }){
  return(
    <S.Container>
      <IconContext.Provider value={{ className: "icon" }}>
        {children}
      </IconContext.Provider>
    </S.Container>
    
  )
}