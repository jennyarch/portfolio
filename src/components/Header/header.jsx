import React, { useState } from 'react';
import Logo from '../../assets/img/logo_21.png';
import * as S from './style.js';

export default function Header(){
  const [menu, setMenu] = useState(false);

  const alt = "Logo descreve o nome da desenvolvedora e triangulos em lados opostos";

  function showMenu() {
    if (menu === false) setMenu(true)
    else setMenu(false)
  }

  return (
    <>
      <S.HeaderContainer>
      <S.Logo>
        <img src={Logo} alt={alt}/>
      </S.Logo>
      <S.Nav>
        <ul className={menu ? 'listFade' : undefined}>
          <li><a onClick={menu ? showMenu : undefined} href="#home">Home</a></li>
          <li><a onClick={menu ? showMenu : undefined} href="#about">Sobre Mim</a></li>
          <li><a onClick={menu ? showMenu : undefined} href="#skills">Skills</a></li>
          <li><a onClick={menu ? showMenu : undefined} href="#projects">Projetos</a></li>
          <li><a onClick={menu ? showMenu : undefined} href="#contact">Contato</a></li>
        </ul>
      </S.Nav>
      <S.menu onClick={showMenu}>
          <div className={menu ? 'line-1t' : undefined} />
          <div className={menu ? 'line-2t' : undefined} />
          <div className={menu ? 'line-3t' : undefined} />
      </S.menu>
      </S.HeaderContainer>
      
    </>
    
    
  );
}