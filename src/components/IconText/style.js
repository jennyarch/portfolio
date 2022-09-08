import styled from "styled-components";

export const icon = styled.figure`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

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
`;