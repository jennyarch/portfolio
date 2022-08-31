import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  padding: 50px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 500px;
  padding: 15px;
  background-color: #393E46;
  box-shadow: 0px 10px 13px -7px #000000, 11px 5px 11px 0px rgba(35,31,64,0.43);
  border-radius: 10px;
    @media (max-width: 1200px) {
      width: 400px;
    }
    @media (max-width: 850px) {
      width: 320px;
    }
    @media (max-width: 450px) {
      width: 280px;
    }
  & img{
    width: 350px;
    height: 250px;
    margin-left: 7px;
    border-radius: 10px;
    background-color: #22577E;
      @media (max-width: 1200px) {
        width: 95%;
        height: 45%;
      }
      @media (max-width: 320px) {
        width: 93%;
        height: 40%;        
      }
  }
  & h3{
    color: #fff;
    font-size: 20px;
      @media (max-width: 1200px) {
        font-size: 20px;
      }
      @media (max-width: 320px) {
        font-size: 18px;
      }
  }
  & p{
    width: 350px;
    height: auto;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    @media (max-width: 1200px) {
      width: 300px;
    }
    @media (max-width: 850px) {
      width: 270px;
    }
    @media (max-width: 320px){
      width: 250px;
    }
  }
  & div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .verProjeto{
    height: 30px;
    width: 100px;
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
  }
  .verRepo{
    height: 30px;
    width: 100px;
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
  }
`;