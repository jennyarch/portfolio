import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & p{
    width: 50%;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    opacity: 0.97;
    @media (max-width: 850px) {
      width: 35%;
      font-size: 16px;
    }
    @media (max-width: 450px) {
      width: 25%;
      font-size: 14px;
    }
  }
`;
export const PercentContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid yellow;
  background-color: #112B3C;
    @media (max-width: 850px) {
      width: 80px;
      height: 80px;
    }
    @media (max-width: 450px) {
      width: 50px;
      height: 50px;
    }
`;
export const Percent = styled.h4`
  text-align: center;
  margin: auto;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
    @media (max-width: 850px) {
      font-size: 20px;
    }
    @media (max-width: 450px) {
      font-size: 14px;
    }
`;