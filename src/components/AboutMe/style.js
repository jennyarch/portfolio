import styled from "styled-components";


export const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
    @media (max-width: 1200px) {
      flex-direction: column;    
    }
    @media (max-width: 850px) {
      flex-direction: column;       
    }
    @media (max-width: 450px) {
      flex-direction: column;
      justify-content: space-around;
      gap: 20px;
      width: 320px;        
    }
`;
export const ConteudoImagem = styled.div`
  display: block;
  text-align: center;
    & img{
      width: 350px;
      height: auto;
      margin-top: 50px;
      border: 2px solid #FFE69A;
      border-radius: 50%;
        @media (max-width: 1200px) {
          width: 35%;
          margin: 10px auto;

        }
        @media (max-width: 850px) {
          width: 32%;
          margin: 10px auto;
        }
        @media (max-width: 450px) {
          width: 35%;
          height: auto;       
        }
    }
`;
export const contentAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;

    @media (max-width: 450px) {
      width: 320px;
      height: auto;
    }
  & article{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
      @media (max-width: 1200px) {
        justify-content: center;
      }
    & h2{
      font-size: 32px;
      font-weight: 700;
      color: #fff;
        @media (max-width: 1200px) {
          font-size: 35px;
        }
        @media (max-width: 850px) {
          font-size: 24px;
        }
        @media (max-width: 450px) {
          font-size: 22px;
        }
    }
    .icon{
      font-size: 35px;
      color: #FFD700;
        @media (max-width: 1200px) {
          font-size: 35px;
        }
        @media (max-width: 850px) {
          font-size: 24px;
        }
        @media (max-width: 450px) {
          font-size: 22px;
        }
    }
  }
  & p{
    width: 500px;
    font-size: 20px;
    height: auto;
    color: #fff;
    line-height: 1.5em;
      @media (max-width: 1200px) {
        width: 80%;
        font-size: 22px;
        text-align: justify;
        margin: auto;
      }
      @media (max-width: 850px) {
        width: 70%;
        font-size: 18px;
        text-align: justify;
        margin: auto;       
      }
      @media (max-width:450px) {
        width: 80%;
        font-size: 15px;
        text-align: justify;
        margin: auto;
      }
  }
  &  strong {
    color: #FFE69A;
  }
`;




