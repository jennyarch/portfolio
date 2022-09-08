import React, { useEffect } from 'react';
import * as S from './style';
import ScrollReveal from 'scrollreveal';

export default function NivelSkill({ children }){

  useEffect(() => {
    ScrollReveal({ reset: true });

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'left',
      reset: false
    });

    ScrollReveal().reveal('.r-paragrafo', { delay: 200});
    ScrollReveal().reveal('.r-percent', { delay: 200});
  }, [])

  return(
    <S.Container>
        <p className='r-paragrafo'><em>Meu nivel de conhecimento até agora</em></p>
        <S.PercentContent className='r-percent'>
          <S.Percent>{children}</S.Percent>
        </S.PercentContent>
    </S.Container>
  );
}