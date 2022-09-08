import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import { IconContext } from "react-icons";
import { FaCss3Alt, FaReact, FaHtml5, FaGitAlt } from "react-icons/fa";
import { DiResponsive, DiBootstrap } from 'react-icons/di';
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents, SiMaterialui } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { Divider } from "../Divider/style.js";
import ScrollReveal from "scrollreveal";
import TitleSections from "../Title/TitleSections.jsx";
import IconText from "../IconText/IconText.jsx";
import NivelSkill from '../NivelSkill/NivelSkill.jsx';

export default function Skills() {
  useEffect(() => {
    ScrollReveal({ reset: true });

    ScrollReveal({
      distance: "50px",
      duration: 2000,
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".r-iconSkill", { delay: 200 });
    ScrollReveal().reveal(".r-titulo", { delay: 200 });
    ScrollReveal().reveal(".r-paragrafo", { delay: 200 });
    ScrollReveal().reveal("figure", { delay: 300 });
  }, []);

  const text = [
    "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.",
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.",
    "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.",
    "Responsividade utilizando BreakPoints e propriedades de flexibilização de elementos.",
    "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.",
    "Ele segue as diretrizes, componentes e ferramentas de material design do Google para tornar os aplicativos da web mais rápidos."
  ];

  const [nameCardSkill, setNameCardSkill] = useState("");
  const [textSkill, setTextSkill] = useState("-> Passe o cursor sobre os ícones para saber mais <-");
  const [nivelSkill, setNivelSkill] = useState("?");

  function changeText(nameskill) {
    if (nameskill === "html") {
      setNameCardSkill("HTML");
      setTextSkill(text[0]);
      setNivelSkill('75%');
    }
    if (nameskill === "css") {
      setNameCardSkill("CSS");
      setTextSkill(text[1]);
      setNivelSkill('66%');
    }

    if (nameskill === "js") {
      setNameCardSkill("JavaScript");
      setTextSkill(text[2]);
      setNivelSkill('60%');
    }

    if (nameskill === "git") {
      setNameCardSkill("Git");
      setTextSkill(text[3]);
      setNivelSkill('50%');
    }

    if (nameskill === "react") {
      setNameCardSkill("ReactJS");
      setTextSkill(text[4]);
      setNivelSkill('68%');
    }

    if (nameskill === "styled") {
      setNameCardSkill("Styled Components");
      setTextSkill(text[5]);
      setNivelSkill('80%');
    }

    if (nameskill === "responsivo") {
      setNameCardSkill("Responsividade");
      setTextSkill(text[6]);
      setNivelSkill('82%');
    }

    if (nameskill === "bootstrap") {
      setNameCardSkill("Bootstrap");
      setTextSkill(text[7]);
      setNivelSkill('66%');
    }
    if (nameskill === "material") {
      setNameCardSkill("MUI");
      setTextSkill(text[8]);
      setNivelSkill('60%');
    }
  }
  function clearText() {
    setNameCardSkill("");
    setTextSkill("-> Passe o cursor sobre os ícones para saber mais <-");
    setNivelSkill("?");
  }

  return (
    <>
      <S.Content>
        <S.Title>
          <TitleSections>Skills</TitleSections>
          <IconText>
            <MdComputer />
          </IconText>
        </S.Title>
        <S.NameSkill>{nameCardSkill}</S.NameSkill>
        <S.InfoSkill className="r-paragrafo">{textSkill}</S.InfoSkill>
        <NivelSkill>{nivelSkill}</NivelSkill>
      </S.Content>
      <Divider />
      <S.IconsSkills className="r-iconSkill">
        <S.CardSkills
          onMouseOver={() => changeText("js")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <IoLogoJavascript />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("html")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaHtml5 />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("css")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaCss3Alt />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("react")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaReact />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("git")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <FaGitAlt />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("styled")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <SiStyledcomponents />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("responsivo")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <DiResponsive />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("bootstrap")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <DiBootstrap />
          </IconContext.Provider>
        </S.CardSkills>
        <S.CardSkills
          onMouseOver={() => changeText("material")}
          onMouseOut={clearText}
        >
          <IconContext.Provider value={{ className: "card-icon" }}>
            <SiMaterialui />
          </IconContext.Provider>
        </S.CardSkills>
      </S.IconsSkills>
    </>
  );
}
