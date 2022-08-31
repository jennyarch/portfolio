import styled from 'styled-components';

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 500px;
  height: auto;
    @media (max-width: 1200px){
      width: 400px;
    }
    @media (max-width: 450px) {
      width: 300px;
    }

  .salutation{
    color:#FFFFFF;
    font-size: 35px;
    @media (max-width: 1200px) {
      font-size: 1.5rem;
    }
    @media (max-width: 850px) {
      font-size: 1.2rem;
      text-align: center;
    }
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }
  & h1{
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    line-height: 5.2rem;
    margin: 1px 0 1px 0;
      @media (max-width: 1200px) {
        margin: auto;
        text-align: center;
        font-size: 55px;
        line-height: 2.8rem;
      }
      @media (max-width: 850px) {
        margin: auto;
        text-align: center;
        font-size: 45px;
        line-height: 2.8rem;  
      }
      @media (max-width: 450px) {
        margin: auto;
        text-align: center;
        font-size: 40px;
        line-height: 2.8rem;         
      }
    .decoractionText{
      font-size: 5rem;
      font-weight: 700;
      color: #DBAD4A;
      @media (max-width: 1200px) {
        font-size: 55px;
      }
      @media (max-width: 850px) {
        font-size: 45px;
      }
      @media (max-width: 450px) {
        font-size: 40px;
      }
    }
  }
  & div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 5px;
    font-size: 24px;
    font-weight: 800;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    font-weight: 800;
      @media (max-width: 1200px) {
        text-align: center;
        margin: 0 auto;
      }
    
    .title-word{
      animation: color-animation 4s linear infinite;
        
        @media (max-width: 850px) {
          font-size: 16px;
        }
        @media (max-width: 320px) {
          font-size: 14px;
        }
    }

    .title-word-1 {
      --color-1: #DF8453;
      --color-2: #3D8DAE;
      --color-3: #E4A9A8;
    }

    .title-word-2 {
      --color-1: #DBAD4A;
      --color-2: #ACCFCB;
      --color-3: #17494D;
    }

    .title-word-3 {
      --color-1: #ACCFCB;
      --color-2: #E4A9A8;
      --color-3: #ACCFCB;
    }

    .title-word-4 {
      --color-1: #3D8DAE;
      --color-2: #DF8453;
      --color-3: #E4A9A8;
    }

    @keyframes color-animation {
      0%    {color: var(--color-1)}
      32%   {color: var(--color-1)}
      33%   {color: var(--color-2)}
      65%   {color: var(--color-2)}
      66%   {color: var(--color-3)}
      99%   {color: var(--color-3)}
      100%  {color: var(--color-1)}
    }
  }
  & button{
    display: inline-block;
    text-decoration: none;
    padding: 20px 50px;
    border:none;
    background-color: #FFB244;
    border: none;
    border-radius: 10px;
    margin: auto;
    margin-top: 50px;
    cursor: pointer;

    font-size: 18px;
    font-weight: 400;
    color: #fff;

      &:hover{
        animation: pulsate 2s ease-in-out infinite;
      }
        @media (max-width: 1200px) {
          padding: 15px 25px;
        }
        @media (max-width: 850px) {
          padding: 15px 25px;
          font-size: 18px;        
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
export const AvatarPerson = styled.div`
  width: 500px;
  display: contents;
`;

export const ImagemAvatar = styled.img`
  position: relative;
  bottom: 20px;
  width: 40%;
  animation: moveUndraw 1.7s infinite alternate-reverse linear;

  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 850px) {
    width: 45%;
  }
  @media (max-width: 450px) {
    width: 40%;
  }
  
  @keyframes moveUndraw {
  from {
      transform: translateY(0px);
  }

  to {
      transform: translateY(-15px);
  }
}
  
`;

