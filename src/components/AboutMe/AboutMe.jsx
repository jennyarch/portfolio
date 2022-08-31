import React from 'react';
import * as S from './style.js';

import minhaImagem from '../../assets/img/Jennyfer.jpg';
import { IconContext } from 'react-icons';
import { BsPersonCircle } from 'react-icons/bs';
import Divider from '../Divider/Divider';

export default function SobreMim(){
  return(
    
      <S.Conteudo>
        <S.ConteudoImagem>
          <img src={minhaImagem} alt="Imagem de uma garota no computador ilustrativa" />
        </S.ConteudoImagem>
        <Divider />
        <S.contentAboutMe>
          <article>
            <h2>Sobre mim</h2>
            <IconContext.Provider value={{ className: "icon"}}>
              <BsPersonCircle/>
            </IconContext.Provider>
          </article>
          <p>Sou Jennyfer, tenho 29 anos, sou desenvolvedora focada no front-end e venho constantemente aprimorando meus conhecimentos em <strong>HTML, CSS, JavaScript e ReactJS</strong>. Graduada em Análise e Desenvolvimento de Sistemas na Faculdade Mauricio de Nassau. <br />
          No momento estou em busca da minha primeira <strong>oportunidade</strong>
          </p>
        </S.contentAboutMe>
        
      </S.Conteudo>
    
    
  );
}