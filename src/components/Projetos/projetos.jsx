import React, { useEffect }  from  'react';
import ScrollReveal from 'scrollreveal';
import CardsProjetos from "./Cards/cardsProjetos";
import * as S from './styles';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { GoProject } from 'react-icons/go';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import TitleSections from '../Title/TitleSections.jsx';
import IconText from '../IconText/IconText';

export default function Projetos(){

  
  useEffect(() => {
    ScrollReveal({ reset: true});

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'left',
      reset: false
    });

    ScrollReveal().reveal('.r-title', {delay: 200});
    ScrollReveal().reveal('.r-information', {delay: 200});
  },[])

  return(
    <>
        <S.Title className='r-title'>
          <TitleSections>Projetos</TitleSections>
          <IconText>
            <GoProject/>
          </IconText>
        </S.Title> 
        <S.Information className='r-information'>
          <ArrowIcon>
            <BsArrowLeft/>
          </ArrowIcon>
          <em>Deslize</em>
          <ArrowIcon>
            <BsArrowRight/>
          </ArrowIcon>
        </S.Information> 
        <CardsProjetos/>
    </>
  );
}