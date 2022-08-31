import styled from "styled-components";

export const Divider = styled.div`
  border: none;
  border-radius: 20px;
  width: 0.1rem;
  height: 500px;
  background-color: #FFE69A;
  -webkit-animation: neon 0.2s ease-in-out infinite alternate;
  -moz-animation: neon 2s ease-in-out infinite alternate;
  animation: neon 1.5s ease-in-out infinite alternate;

  @keyframes neon {
  from {
    box-shadow: 0 0 10px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #FFD700, 0 0 5px #FFD700, 0 0 4px #FFD700, 0 0 10px #FFD700, 0 0 10px #FFD700;
  }
  to {
    box-shadow: 0 0 5px #fff, 0 0 2px #fff, 0 0 5px #fff, 0 0 5px #ffd700, 0 0 5px #ffd700, 0 0 4px #ffd700, 0 0 10px #ffd700, 0 0 10px #ffd700;
  }
}
    @media (max-width: 1200px) {
      display: none;
    }
`;