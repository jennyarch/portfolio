import React, { useState } from 'react';
import * as S from './style.js';

export default function Header(){
  const myName = "<Jennyfer C. Santos/>";
  const [menu, setMenu] = useState(false);

  function showMenu() {
    if (menu === false) setMenu(true)
    else setMenu(false)
  }
  return (
    <>
      <S.HeaderContainer>
      <S.Logo>
        <a href='/'>{myName}</a>
      </S.Logo>
      <S.Nav>
        <ul className={menu ? 'listFade' : undefined}>
          <li><a onClick={menu ? showMenu : undefined} href="#home">Ínicio</a></li>
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