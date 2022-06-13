import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 11rem;
  max-width: 900px;
  margin: 11rem auto 0;

  img {
    height: 350px;
    width: 500px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  > div {
    flex: 1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 40px 30px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    p {
      opacity: 0.6;
      font-size: 18px;
    }

    strong {
      display: block;
      margin-top: 5px;
      font-family: 'Elsie Swash Caps', cursive;
      font-size: 35px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 20px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
