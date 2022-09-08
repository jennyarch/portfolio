import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import * as S from "./styles";
import { IconContext } from "react-icons";
import { RiContactsBook2Line } from "react-icons/ri";
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { orange } from '@mui/material/colors';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import TitleSections from '../Title/TitleSections';
import IconText from '../IconText/IconText';

export default function Contato() {
  useEffect(() => {
    ScrollReveal({ reset: true });

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'top',
      reset: false
    });

    ScrollReveal().reveal('.r-title', {delay: 200});
    ScrollReveal().reveal('.r-content', {delay: 200});
    ScrollReveal().reveal('.r-media', {delay: 200});
  },[])

  const sendForm = (e) => {
    e.preventDefault();
    console.log('fui submetido');
  }
  return (
    <>
      <S.Title>
        <TitleSections className="r-title">Contato</TitleSections>
        <IconText>
        <RiContactsBook2Line />
        </IconText>
      </S.Title>
      <S.Conteudo className='r-content'>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircle sx={{ color: orange[500], mr: 1, my: 0.5 }} />
          <TextField
            className="TextFieldMedia" 
            id="outlined-basic"
            label="Seu nome"
            variant="outlined"
            color="warning"
            sx={{
              width: "400px",
              background: '#708090',
              borderRadius: '5px'
            }}
          />

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailOutlinedIcon sx={{ color: orange[500], mr: 1, my: 0.5 }}/>
          <TextField
            className="TextFieldMedia" 
            id="outlined-basic"
            label="Seu email"
            variant="outlined"
            color="warning"
            sx={{
              width: "400px",
              background: '#708090',
              borderRadius: '5px'
            }}
          />

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextsmsOutlinedIcon sx={{ color: orange[500], mr: 1, my: 0.5 }}/>
          <TextField
            className="TextFieldMedia" 
            id="outlined-multiline-static"
            label="Deixe seu texto aqui"
            multiline
            rows={4}
            color="warning"
            sx={{
              width: "400px",
              background: '#708090',
              borderRadius: '5px'
            }}
          />
        </Box>
        <button onSubmit={sendForm}>Enviar</button>
      </S.Conteudo>
        <S.MediaSocial className='r-media'>
          <IconContext.Provider value={{ className: "iconMedia"}}>
            <a href="https://www.facebook.com/jenny.knowles.96/">
              <BsFacebook />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "iconMedia" }}>
            <a href="https://www.instagram.com/jennyfer_csantos/">
              <BsInstagram />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "iconMedia" }}>
            <a href="https://www.linkedin.com/in/jennyfer-c-santos/">
              <BsLinkedin />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "iconMedia" }}>
            <a href="https://github.com/jennyarch">
              <BsGithub />
            </a>
          </IconContext.Provider>
        </S.MediaSocial>
      </>
  );
}
