/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect }  from  'react';
import ScrollReveal from 'scrollreveal';
import projeto from '../../../data/projetos.json';
import Carousel from 'react-elastic-carousel';


import * as S from './styles';

export default function CardsProjetos(){
  useEffect(() => {
    ScrollReveal({ reset: true });

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'top',
      reset: false
    });

    ScrollReveal().reveal('.r-card', {delay: 200});
  },[])

  const breakpoints = [
    { width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 4},
  ];
  
  return(
    <S.Container>
      
        <Carousel className='rec-carousel' breakPoints={breakpoints} >
            {projeto.map(projetos => 
              <S.Card className="r-card" key={projetos.id}>
                <img src={projetos.photo} alt={projetos.alt} />
                <h3>{projetos.title}</h3>
                <p>{projetos.description}</p>
                <div>
                  <a className="verProjeto" href={projetos.site}>Live</a>
                  <a className="verRepo" href={projetos.repo}>GitHub</a>
                </div>
              </S.Card>
            )}
        </Carousel>
      
    </S.Container>
  );
}