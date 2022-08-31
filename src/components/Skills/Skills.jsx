import React from 'react';
import * as S from './styles.js';
import { IconContext } from 'react-icons';
import { FaCss3Alt, FaReact, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiStyledcomponents } from 'react-icons/si'
import { MdComputer } from 'react-icons/md'
import { Divider } from '../Divider/style.js';

export default function Skills(){
  return(
    <>
      <S.Conteudo>
        <S.Title>
          <h2>Skills</h2>
          <IconContext.Provider value={{ className: "icon"}}>
            <MdComputer/>
          </IconContext.Provider>
        </S.Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi harum quas est? Voluptatibus tempore facere, placeat odio libero ullam sequi itaque suscipit. Veritatis a soluta quaerat nostrum. Veritatis, repellendus?</p>
      </S.Conteudo>
      <Divider />
      <S.IconsSkills>
        <S.CardSkills>
          <IconContext.Provider value={{ className: "card-icon" }}>
            <IoLogoJavascript />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills>
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaHtml5 />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills>
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaCss3Alt />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills>
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaReact />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills>
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaGitAlt />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills>
          <IconContext.Provider value={{ className: "card-icon" }}>
            <SiStyledcomponents />
          </IconContext.Provider>
        </S.CardSkills>
      </S.IconsSkills>
    </>
  )
}