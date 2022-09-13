import styled from "styled-components";

export const sectionHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 20px;
  top: 0;
  opacity: 0.97;
  z-index: 99;
  background-color: #2C3333;
  border-bottom: 1px solid rgba(114, 114, 126, 0.2);

  @media (max-width: 1200px){
    height: 80px;
    padding: 10px;
  }
  @media(max-width: 850px){
    height: 80px;
    padding: 10px;
  }
`;