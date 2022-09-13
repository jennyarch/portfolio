import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  & p{
    width: 70%;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    opacity: 0.97;
    @media (max-width: 850px) {
      width: 50%;
      font-size: 16px;
    }
    @media (max-width: 450px) {
      width: 45%;
      font-size: 14px;
    }
  }
`;

export const Percent = styled.span`
  text-align: center;
  margin: auto;
  font-size: 50px;
  font-weight: 500;
  color: #E4D192;
  filter: drop-shadow(0 0 3px #FFD700);

    @media (max-width: 850px) {
      font-size: 40px;
    }
    @media (max-width: 450px) {
      font-size: 25px;
    }
`;