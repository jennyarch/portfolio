import styled from "styled-components";


export const Content = styled.div`
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
    @media (max-width: 450px) {
      margin-top: -70px;
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
        
    }
`;
export const NameSkill = styled.h4`
  font-weight: 600;
  font-size: 22PX;
  color: #FFD700;
  @media (max-width: 1200px) {
      width: 500px;
      margin: auto;
      font-size: 20px;
    }
    @media (max-width: 850px) {
      width: 350px;
      font-size: 18px;
      margin: auto;
    }
    @media (max-width: 450px) {
      width: 250px;
      height: 10px;
      font-size: 16px;
      margin: 0 auto;
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
`;
export const InfoSkill = styled.p`
  width: 500px;
  height: 100%;
  font-size: 20px;
  color: #fff;
  line-height: 1.5em;
    @media (max-width: 1200px) {
      width: 500px;
      height: 80%;
      margin: auto;
      font-size: 20px;
    }
    @media (max-width: 850px) {
      width: 350px;
      height: 60%;
      font-size: 18px;
      margin: auto;
    }
    @media (max-width: 450px) {
      width: 250px;
      height: 30%;
      font-size: 14px;
      margin: 0 auto;
    }
`;
export const IconsSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 450px;
  height: auto;
  gap: 5px;
    @media (max-width: 1200px) {
      align-items: center;
      justify-content: center;
      width: 400px;
    }
    @media (max-width: 850px) {
      align-items: center;
      justify-content: center;
      width: 350px;        
    }
    @media (max-width: 450px) {
      align-items: center;
      width: 250px;
      margin-top: -150px;
      margin-bottom: -50px;
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
    @media (max-width: 850px) {
      padding: 25px;
    }
    @media (max-width: 450px) {
      padding: 20px;
    }
    .card-icon {
        font-size: 50px;
        color: #FFD700;
        @media (max-width: 850px) {
          font-size: 40px; 
          transition:1s ease-out;

        }
        @media (max-width: 450px) {
          font-size: 30px;
          transition:1s ease-out;

        }
        @media (max-width: 320px) {
          font-size: 20px; 
          transition:1s ease-out;
        }
    }
    :hover{
      border: 1px solid #FFD700;
    }
`;
