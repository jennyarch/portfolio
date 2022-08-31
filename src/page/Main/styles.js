import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
`;
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
export const sectionHome = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-color: #2C3333;

    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 100px;
      height: auto;
    }
    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 100px;   
    }
    @media (max-width: 450px) {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 100px;
    }
`;
export const sectionAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  height: auto;
  background-color: #2C3639;
    @media (max-width: 1200px) {
      justify-content: space-between;
      align-items: center;
    }
    @media (max-width: 450px) {
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
`;

export const sectionProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: auto;
  padding: 40px;

  @media(max-width: 1200px) {
    height: auto;
  }
`;
export const sectionSkills = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 720px;
  background-color: #2C3639;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  
`;
export const sectionContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 600px;

  @media (max-width: 450px) {
    height: auto;
    padding: 10px;
  }
`;