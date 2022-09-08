import React from "react";
import * as S from './style';
import { IconContext } from 'react-icons';

export default function IconText({children}){
  return(
    <S.icon>
      <IconContext.Provider value={{ className: "icon"}}>
        {children}
      </IconContext.Provider>
    </S.icon>
  );
}