import React, { useEffect }  from  'react';
import ScrollReveal from 'scrollreveal';
import * as S from './style.js';
import TitleSections from '../Title/TitleSections.jsx';
import minhaImagem from '../../assets/img/Jennyfer.jpg';
import { BsPersonCircle } from 'react-icons/bs';
import Divider from '../Divider/Divider';
import IconText from '../IconText/IconText.jsx';

export default function SobreMim(){
  useEffect(() => {
    ScrollReveal({ reset: true})

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'top',
      reset: false
    })

    ScrollReveal().reveal('.r-titulo', {delay: 200})
    ScrollReveal().reveal('.r-paragrafo', {delay: 200})
    ScrollReveal().reveal('article', {delay: 200})
    ScrollReveal().reveal('figure', {delay: 300})
  }, [])
  return(
    
      <S.Content>
        <S.ContentImage>
          <img src={minhaImagem} alt="Foto da desenvolvedora deste site" />
        </S.ContentImage>
        <Divider />
        <S.contentAboutMe>
          <div className='content-title'>
            <TitleSections>Sobre Mim</TitleSections>
            <IconText>
              <BsPersonCircle/>
            </IconText>
          </div>

          <p className='r-paragrafo'>Sou Jennyfer, tenho 29 anos, sou desenvolvedora focada no front-end e venho constantemente aprimorando meus conhecimentos em <strong>HTML, CSS, JavaScript e ReactJS</strong>. Graduada em Análise e Desenvolvimento de Sistemas na Faculdade Mauricio de Nassau. <br />
          No momento estou em busca da minha primeira <strong>oportunidade</strong>
          </p>
        </S.contentAboutMe>
        
      </S.Content>
    
    
  );
}