import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
    @media (max-width: 450px) {
      margin-top: 30px;
    }
  & h2{
    color: #fff;
    font-size: 32px;
      @media (max-width: 1200px) {
        font-size: 35px;
      }
      @media (max-width: 850px) {
        font-size: 24px;        
      }
  }
  .icon{
    font-size: 35px;
    color: #FFD700;
    @media (max-width: 1200px) {
      font-size: 35px;
    }
    @media (max-width: 850px) {
      font-size: 26px;
    }
  }
`;
export const ConteudoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  padding: 20px;
  align-items: center;
  width: 500px;
  height: auto;
  border-radius: 10px;
  @media (max-width: 850px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 300px;
    justify-content: center;
  }
  
  .TextFieldMedia{
    @media (max-width: 850px) {
      width: 300px;
    }
    @media (max-width: 450px) {
      justify-content: center;
      width: 250px;
    }
  }
  
  & button{
    width: 150px;
    height: auto;
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #EC994B;
    padding: 10px;
    border: none;
    border-radius: 10px;
    :hover{
      background-color: #D36B00;
    }
  }
`;
export const MediaSocial = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  gap: 25px;

  .iconMedia{
    font-size: 45px;
    color: #FFD700;
      :hover{
        animation: moveUndraw 1s alternate-reverse infinite;
      }
    @media (max-width: 320px) {
    font-size: 26px;
    }
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

