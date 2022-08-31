import styled from "styled-components";

export const container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(114, 114, 126, 0.2);
  background-color: #2C3639;
  height: 80px;
  
  & p{
    color: #ECCCB2;
    font-size: 16px;
    font-style: normal;
    
    & strong{
      color: #E4D192;
      font-style: italic;
    }
      @media (max-width: 1200px) {
        font-size: 14px;
        opacity: 0.80;
      }
      @media (max-width: 850px) {
        font-size: 12px;
        opacity: 0.80;        
      }
  }
`;