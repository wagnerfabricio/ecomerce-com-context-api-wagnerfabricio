import styled from "styled-components";
import background from "../../assets/images/background.jpeg";

export const Content = styled.div`
  margin-top: 30px;
  button + button {
    margin-left: 10px;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  background-image: url(${background});
  background-position: center;

  h1 {
    text-shadow: 4px 4px 4px rgba(236, 236, 236, 0.3);
  }

  @media (min-width: 500px) {
    align-items: flex-end;
    min-height: 100vh;
    background-position: inherit;

    h1,
    button {
      margin-right: 20%;
    }
  }
`;
