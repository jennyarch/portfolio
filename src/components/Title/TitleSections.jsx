import React from 'react';
import * as S from './style';

export default function TitleSections({children, className}){
  return(
      <S.Title className={className}>
        {children}
      </S.Title>
  );
}