import styled from "styled-components";

// Estilo pagina main

export const Container = styled.div`
  margin: auto;
`;
export const sectionHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 20px;
  top: 0;
  opacity: 0.97;
  z-index: 99;
  background-color: #2C3333;
  border-bottom: 1px solid rgba(114, 114, 126, 0.2);

  @media (max-width: 1200px){
    height: 80px;
    padding: 10px;
  }
  @media(max-width: 850px){
    height: 80px;
    padding: 10px;
  }
`;
export const sectionHome = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-color: #2C3333;

    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 100px;
      height: auto;
    }
    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 100px;   
    }
    @media (max-width: 450px) {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 100px;
    }
`;
export const sectionAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  height: auto;
  background-color: #2C3639;
    @media (max-width: 1200px) {
      justify-content: space-between;
      align-items: center;
    }
    @media (max-width: 450px) {
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
`;

export const sectionProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: auto;
  padding: 40px;

  @media(max-width: 1200px) {
    height: auto;
  }
`;
export const sectionSkills = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 720px;
  background-color: #2C3639;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
`;
export const sectionContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 600px;

  @media (max-width: 450px) {
    height: auto;
    padding: 10px;
  }
`;
//  Estilo pagina Sucesso

export const ContainerSucess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
  margin: 0 auto;

  & img{
    width: 100px;
    height: auto;
  }
  & h2{
    font-size: 35px;
    color: #FFF;
    font-weight: 700;
    @media (max-width: 850px) {
      font-size: 25px;
      text-align: center;
    }
    @media (max-width: 450px) {
      font-size: 20px;
      text-align: center;
    }
    @media (max-width: 320px) {
      font-size: 18px;
      text-align: center;
    }
    
  }
  & button{
    display: inline-block;
    padding: 20px 50px;
    border:none;
    background-color: #FFB244;
    border-radius: 10px;
    margin:0 auto;
    cursor: pointer;

    font-size: 18px;
    font-weight: 700;
    color: #fff;

    &:hover{
        animation: pulsate 1s ease-in-out infinite;
      }
        @media (max-width: 1200px) {
          padding: 15px 25px;
        }
        @media (max-width: 850px) {
          padding: 15px 25px;
          font-size: 16px;        
        }
        @media (max-width: 450px) {
          padding: 12px  20px;
          font-size: 12px;
          margin-top: 10px;
        }
  }
  @keyframes pulsate {
    0%{
      box-shadow: 
      0 0 25px #FFB244,
      0 0 50px #2E0249;
    }
  }
  
`;