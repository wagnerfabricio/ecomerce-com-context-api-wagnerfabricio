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

  @media (min-width: 500px) {
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
  background-color: white;

  width: 90%;
  padding: 20px;
  max-width: 480px;
  border-radius: 12px;
  box-shadow: 14px 14px 14px orange;
  margin-top: -10%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 10px;

    input,
    text-area {
      background-color: white;
      border-radius: 8px;
    }

    div {
      margin-bottom: 5px;
    }

    button {
      padding: 10px;
    }
  }

  a:any-link {
    color: inherit;
    font-weight: bold;
  }

  @media (min-width: 500px) {
    margin-top: -5%;
  }
`;

export const Logo = styled.a`
  :any-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
  }
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 30px;
  }

  span {
    font-size: 40px;
    line-height: 1;
  }
`;
