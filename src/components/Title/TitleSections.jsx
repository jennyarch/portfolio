import React from 'react';
import * as S from './style';

export default function TitleSections({children}){
  return(
      <S.Title className='r-titulo'>
        {children}
      </S.Title>
  );
}