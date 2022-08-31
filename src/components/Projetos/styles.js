import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  @media (max-width: 320px) {

  }
  & h2{
      font-size: 32px;
      font-weight: 700;
      color: #fff;
        @media (max-width: 1200px) {
          font-size: 28px;
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
          font-size: 28px;   
        }
        @media (max-width: 320px) {
          font-size: 24px;
        }
  }
  
`;