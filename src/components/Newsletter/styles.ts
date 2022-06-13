import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 800px;
    z-index: -10;
  }

  div {
    > p {
      opacity: 0.5;
      font-size: 22px;
    }

    strong {
      font-family: 'Elsie Swash Caps', cursive;
      font-size: 75px;
    }

    .text {
      margin-top: 30px;
      font-size: 16px;
      max-width: 400px;
    }

    form {
      margin-top: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      width: fit-content;
      position: relative;
      border-radius: 5px;

      .icon {
        opacity: 0.6;
        position: absolute;
        top: 35%;
        width: 30px;
        height: 20px;
        left: 15px;
      }

      input,
      button {
        border: none;
        padding: 25px;
      }

      input {
        padding-left: 50px;
        width: 300px;
        opacity: 0.6;

        &::placeholder {
          font-size: 18px;
        }
      }

      button {
        background-color: #ffcb47;
        color: #fff;
        cursor: pointer;
        transition: filter 0.2s ease;
        font-size: 16px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .hero {
    position: absolute;
    width: 600px;
    height: 750px;
    left: 40%;
  }
`;
