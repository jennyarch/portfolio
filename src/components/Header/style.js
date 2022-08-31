import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-around;
  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 420px) {
    padding: 15px;
  }
`;
export const Logo = styled.div`
  & a{
    font-size: 32px;
    color: #E4D192;
    text-decoration: none;
    cursor: pointer; 
    @media (max-width: 1200px) {
      font-size: 26px;
    }
    @media (max-width: 450px) {
        font-size: 20px;
        opacity: 0.97;
      }
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  gap:30px;

    & ul{
      display: flex;
      flex-direction: row;
      gap: 15px;
      list-style: none;
        @media (max-width: 950px) {
          display: none;
        }
    }
  & a{
    text-decoration: none;
    color: #E4D192;
      &:hover{
        color:#ffd700;
    }
    @media (max-width: 1200px) {
      font-size: 20px;
    }
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }
  .listFade {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 55px;
        left: 0;
        text-align: center;
        background-color: #2C3639;
        opacity: 0.97;
        @media (max-width: 1200px) {
          height: 800px;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
        }
        @media (max-width: 850px) {
          height: 600px;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
        }
        @media (max-width: 320px) {
          height: 480px;
          justify-content: space-around;
          align-items: center;
          margin: auto;
        }
    }
`;
export const menu = styled.div`
    display: none;
    
    @media(max-width: 950px) {
        display: flex;
        flex-direction: column;
        gap: 7px;
        cursor: pointer;
    }
    div {
        width: 32px;
        height: 2px;
        background-color: #E4D192;
        transition: 0.4s;
        
    }
    .line-1t {
        transform: rotate(-45deg) translate(-8px, 8px);
        
    }
    .line-2t {
        opacity: 0;
    }
    .line-3t {
        transform: rotate(45deg) translate(-5px, -5px);
    }
`;
