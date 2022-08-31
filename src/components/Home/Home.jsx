import React from  'react';
import * as S from './style';
import Avatar from '../../assets/img/imagemHome.svg';

import CV from '../../assets/docs/Jennyfer Conceição Santos.pdf';

export default function Home(){
  function EnviarCV(e){
    const cv = {CV};
    return cv;
  }

  return(
    <>
      <S.Conteudo>
        <span className='salutation'>Olá, me chamo</span>
        <h1>
          <span className='decoractionText'>Jenny</span>
            fer C. Santos
        </h1>
        <div className='title-word'>
          <span className='title-word title-word-1'>Desenvolvedora</span>
          <span className='title-word title-word-2'>Web</span>
          <span className='title-word title-word-3'>Front</span>
          <span className='title-word title-word-4'>End</span>
        </div>
        <button onClick={EnviarCV}>Curriculo</button>
      </S.Conteudo>
      <S.AvatarPerson>
        <S.ImagemAvatar src={Avatar} alt="Imagem inlustrativa garota no computador"/>
      </S.AvatarPerson>
    </>
  );
}