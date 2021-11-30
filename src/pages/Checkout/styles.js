import styled from "styled-components";
import background from "../../assets/images/background.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background-image: url(${background});
  background-position: center;

  h1 {
    margin: 0;
  }

  span {
    font-weight: bolder;
  }

  @media (min-width: 500px) {
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
  background-color: white;

  margin-top: -25%;
  width: 90%;
  padding: 20px;
  max-width: 480px;
  border-radius: 12px;
  box-shadow: 14px 14px 14px orange;

  @media (min-width: 500px) {
    margin-top: -10%;
  }
`;
