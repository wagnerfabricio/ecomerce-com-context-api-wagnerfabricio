import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 80px;
  box-sizing: border-box;
  background-color: #fff4f0;

  a:any-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
  }

  form {
    display: flex;

    input,
    button {
      padding: 10px 0;
      border-radius: 5px;
      font-size: 1rem;
      border: none;
      background-color: #ffa23a;
    }

    button > span {
      display: none;
    }
  }

  @media (min-width: 550px) {
    .MuiAvatar-root {
      display: flex;
    }

    form {
      input,
      button {
        padding: 10px 15px;
      }

      input {
        width: 300px;
      }

      button > span {
        display: block;
      }
    }
  }
`;

export const Logo = styled.div`
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
    display: none;
  }

  @media (min-width: 550px) {
    span {
      display: block;
    }
  }
`;

export const CartIcon = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  button {
    padding: 10px 0;
    font-size: 1rem;
    border: none;
    background-color: #ffa23a;
  }

  @media (min-width: 800px) {
    position: static;
    flex-direction: row;
    transform: translateY(0);

    button {
      padding: 10px;
      margin-right: 10px;
    }
  }
`;
