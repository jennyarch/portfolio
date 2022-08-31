import styled from "styled-components";


export const Conteudo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
    
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
    }
    & p{
      width: 500px;
      font-size: 20px;
      color: #fff;
      height: auto;
      line-height: 1.5em;
        @media (max-width: 1200px) {
          width: 600px;
          margin: auto;
          font-size: 24px;
          text-align: justify;
        }
        @media (max-width: 850px) {
          width: 400px;
          font-size: 20px;
          margin: auto;
          text-align: justify;        
        }
        @media (max-width: 450px) {
          width: 250px;
          font-size: 17px;
          margin: auto;
          text-align: justify;        
        }
    }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
    @media (max-width: 1200px) {
      justify-content: center;
      margin-top: 20px;
    }
  .icon{
    font-size: 35px;
    color: #FFD700;
    @media (max-width: 320px) {
      font-size: 26px;
    }
  }
`;
export const IconsSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
  height: auto;
  gap: 10px;
    @media (max-width: 1200px) {
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 400px;
    }
    @media (max-width: 850px) {
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 350px;        
    }
    @media (max-width: 320px) {
      align-items: center;
      gap: 5px;
      width: 300px;
      margin-top: -150px;        
    }
`;
export const CardSkills = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  border: 1px solid #191919;
  border-radius: 50%;
  transition: 0.8s ease;
  background-color: #395B64;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .card-icon {
        font-size: 85px;
        color: #FFD700;
        @media (max-width: 1200px) {
          font-size: 50px;
        }
        @media (max-width: 850px) {
          font-size: 40px;        
        }
        @media (max-width: 450px) {
          font-size: 30px;        
        }
    }
    :hover{
      border: 2px solid #FFD700;
    }
`;
