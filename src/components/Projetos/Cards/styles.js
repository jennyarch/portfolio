import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  
  .rec.rec-arrow{
    background-color: #112B3C;
    color: #FFC23C;
    border: 2px solid #FFC23C;
    @media (max-width: 450px) {
      display: none;
    }
  }
  .rec.rec-dot{
    background-color: #112B3C;
  }
  .rec.rec-dot_active{
    box-shadow: 0 0 1px 3px #FFC23C;
  }
  
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 350px;
  padding: 10px;
  gap: 10px;
  background-color: #393E46;
  box-shadow: 0px 10px 13px -7px #000000, 11px 5px 11px 0px rgba(35,31,64,0.43);
  border-radius: 10px;
    
    @media (max-width: 850px) {
      width: 250px;
      height: 350px;
    }
    @media (max-width: 450px) {
      width: 200px;
      height: 310px;
    } 
    @media (max-width: 400px) {
      width: 180px;
      height: 210px;
    } 
  & img{
    width: 100%;
    height: 50%;
    margin: 0 auto;
    border-radius: 10px;
      @media (max-width: 1200px) {
        width: 100%;
        height: 50%;
      }
      @media (max-width: 450px) {
        width: 90%;
        height: 40%;  
        border-radius: 5px;

      }
      @media (max-width: 400px) {
        width: 100%;
        height: 30%;  
        border-radius: 5px;
      }
      @media (max-width: 320px) {
      width: 100%;
      height: 30%;
      border-radius: 5px;

    } 
  }
  & h3{
    color: #fff;
    font-size: 18px;
      
      @media (max-width: 850px) {
        font-size: 16px;
      }
      @media (max-width: 450px) {
        font-size: 14px;
      }
      @media (max-width: 380px) {
        font-size: 13px;
      }
      @media (max-width: 320px)  {
        font-size: 12px;

      }
  }
  & p{
    width: 90%;
    height: 80px;
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    word-wrap: break-word;
    /* @media (max-width: 1200px) {
      width: 300px;
    }
    @media (max-width: 850px) {
      width: 270px;
    } */
    @media (max-width: 850px){
      width: 80%;
      font-size: 14px;
    }
    @media (max-width: 450px){
      width: 80%;
      height: 100px;
      font-size: 13px;
    }
    @media (max-width: 400px) {
      width: 90%;
      height: 100px;
      font-size: 10px;
    }
    @media (max-width: 320px)  {
      width: 90%;
      height: 100px;
      font-size: 10px;
      
    }
  }
  & div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .verProjeto{
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 8px;
    padding: 8px;
    color: black;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    background-color: #FFC23C;
    cursor: pointer;
    :hover{
      background-color: #E4D192;
    }
    @media (max-width: 450px) {
      width: 45px;
      height: 20px;
      padding: 4px;
      font-size: 10px;
    }
    @media (max-width: 400px) {
      width: 40px;
      height: 20px;
      padding: 4px;
      font-size: 10px;
    }
    @media (max-width: 320px)  {
      width: 40px;
      height: 20px;
      padding: 4px;
      font-size: 10px;
    }
  }
  .verRepo{
    width: 100px;
    height: 30px;
    border: 1px solid #FFC23C;
    border-radius: 8px;
    padding: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    background-color: #112B3C;
    cursor: pointer;

    :hover{
      background-color: #22577E;
    }
    @media (max-width: 450px) {
      width: 45px;
      height: 20px;
      padding: 4px;
      font-size: 10px;
    }
    @media (max-width: 400px) {
      width: 40px;
      height: 20px;
      padding: 4px;
      font-size: 9px;
    }
    @media (max-width: 320px)  {
      width: 40px;
      height: 20px;
      padding: 4px;
      font-size: 9px;
    }
  }
`;