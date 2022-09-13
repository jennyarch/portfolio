import React, { useEffect } from "react";
import * as S from "./style";
import Avatar from "../../assets/img/imagemHome.svg";
import ScrollReveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    ScrollReveal({ reset: true });

    ScrollReveal({
      distance: "50px",
      duration: 2000,
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".salutation", { delay: 200 });
    ScrollReveal().reveal(".title-word", { delay: 200 });
    ScrollReveal().reveal("h1", { delay: 200 });
    ScrollReveal().reveal(".cv", { delay: 200 });
    ScrollReveal().reveal(".r-imagem", { delay: 200 });
  }, []);

  return (
    <>
      <S.Conteudo>
        <span className="salutation">Olá, me chamo</span>
        <h1>
          <span className="decoractionText">Jenny</span>
          fer C. Santos
        </h1>
        <div className="title-word">
          <span className="title-word title-word-1">Desenvolvedora</span>
          <span className="title-word title-word-2">Web</span>
          <span className="title-word title-word-3">Front</span>
          <span className="title-word title-word-4">End</span>
        </div>
        <a className="cv" href={require("../../assets/docs/Jennyfer_Conceicao_Santos.pdf")} download>Curriculo</a>
      </S.Conteudo>
      <S.AvatarPerson>
        <S.ImagemAvatar
          className="r-imagem"
          src={Avatar}
          alt="Imagem inlustrativa garota no computador"
        />
      </S.AvatarPerson>
    </>
  );
}
