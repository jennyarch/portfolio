import styled from 'styled-components';

export const Header = styled.header`
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
  
  & img{
    width: 200px;
    height: 65px;
    padding: 8px;
    margin: -25px 0;
    cursor: pointer;
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
    margin-right: 10px;
    color: #E4D192;
      &:hover{
        filter: drop-shadow(0 0 3px #FFD700);
    }
    @media (max-width: 1200px) {
      font-size: 20px;
    }
    @media (max-width: 950px) {
      font-size: 22px;
    }
  }
  .listFade {
    background-color: #2C3639;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    line-height: 50px;
    top: 55px;
    left: 0;
    opacity: 0.97;
        @media (max-width: 850px) {
          align-items: center;
          margin: 0 auto;
        }
        @media (max-width: 450px) {
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
