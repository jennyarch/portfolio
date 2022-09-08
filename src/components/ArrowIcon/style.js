import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  & button{
    cursor: pointer;
    background: none;
    border: none;
    
  }
  .icon{
      font-size: 25px;
      color: #FFD700;
      :hover{
        color: red;
      }
    }
`;