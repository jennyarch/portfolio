import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  
`;
export const Information = styled.span`
  display: none;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
    & em{
      color: #fff;
      font-size: 14px;
    }
  }
  
`;